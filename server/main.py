from typing import Union
import requests
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from pymysql import connect, OperationalError
from datetime import datetime


app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MySQL database configuration
db_config = {
    "host": "localhost",
    "port": 3306,
    "user": "root",
    "password": "password",
    "database": "library",
}


# Function to handle connection to the database
def get_db_connection():
    try:
        connection = connect(**db_config)
        return connection
    except OperationalError as e:
        print("Error connecting to the database:", e)
        return None


# Create a connection to the database
connection = get_db_connection()


@app.on_event("shutdown")  # Handle connection closing during shutdown
async def shutdown_event():
    if connection:
        connection.close()


# testing by trying to get all the column values
@app.get("/columns/{column_name}")
def get_column_elements(column_name: str):
    try:
        # Create a cursor to execute SQL queries
        with connection.cursor() as cursor:
            # Replace "your_table" with the actual table name in your database
            table_name = "logbook"

            # Construct the SELECT query
            query = f"SELECT {column_name} FROM {table_name}"
            cursor.execute(query)

            # Fetch all the results
            results = cursor.fetchall()

            # Extract the elements from the column and return as a list
            column_elements = [row[column_name] for row in results]
            return column_elements
    except Exception as e:
        return {"error": str(e)}


# Getting all the books from the API and returning them as a JSON
def get_libraries():
    url = "https://frappe.io/api/method/frappe-library?page=2&title=and"
    params = {"page": 2, "title": "and"}
    response = requests.get(url, params=params)
    if response.status_code == 200:
        return response.json()
    else:
        return "Error"


libraries = get_libraries()


# Getting all the books from the API and returning them as a JSON
@app.get("/books")
def get_books():
    return libraries


class FormData(BaseModel):
    timeBorrowed: str
    fullName: str
    rollNumber: str
    email: str
    contact: str
    branch: str
    billingAmount: float
    books: list
    returnTime: str


@app.post("/submit")
def submit_form(data: FormData):
    try:
        # Get a new connection in case the previous one is closed
        connection = get_db_connection()
        if not connection:
            return {"error": "Database connection unavailable"}

        with connection.cursor() as cursor:
            insert_query = """
                INSERT INTO logbook 
                (time_borrowed, full_name, roll_number, email, phone_number, branch, billing_amount, books, time_returned) 
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
            """

            values = (
                data.timeBorrowed,
                data.fullName,
                data.rollNumber,
                data.email,
                data.contact,
                data.branch,
                data.billingAmount,
                str(data.books),
                data.returnTime,
            )

            cursor.execute(insert_query, values)
            connection.commit()

        return {"message": "Form submitted successfully"}
    except Exception as e:
        print("Error:", e)
        return {"error": str(e)}


@app.get("/issue-return/{entry_number}")
def issue_return(entry_number: int):
    try:
        # Create a connection to the database
        connection = get_db_connection()
        if not connection:
            return {"error": "Database connection unavailable"}

        with connection.cursor() as cursor:
            select_query = """
                SELECT time_borrowed, time_returned FROM logbook
                WHERE entry_number = %s
            """
            cursor.execute(select_query, (entry_number,))
            result = cursor.fetchone()

            if (
                result and result[1] == "Not Returned"
            ):  # Use integer index 1 for time_returned
                time_returned = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

                update_query = """
                    UPDATE logbook
                    SET time_returned = %s
                    WHERE entry_number = %s
                """
                cursor.execute(update_query, (time_returned, entry_number))
                connection.commit()

                # Calculate days borrowed
                time_borrowed = datetime.strptime(result[0], "%d/%m/%Y, %H:%M:%S")
                return_datetime = datetime.strptime(time_returned, "%Y-%m-%d %H:%M:%S")
                days_borrowed = (return_datetime - time_borrowed).days

                # Update daysBorrowed in the response
                response = {
                    "message": "Book returned successfully",
                    "daysBorrowed": days_borrowed,
                }
                return response
            else:
                return {"error": "Book not found or already returned"}

    except Exception as e:
        print("Error:", e)
        return {"error": str(e)}

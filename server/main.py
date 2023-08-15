from typing import Union
import requests
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from pymysql import connect

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

# Set the configuration for the ASGI server
if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "main:app",  # Replace with the name of your module
        host="0.0.0.0",
        port=8001,  # Change the port number to 8001
        reload=True,
    )

# MySQL database configuration
db_config = {
    "host": "localhost",
    "port": 3306,
    "user": "root",
    "password": "password",
    "database": "library",
}

# Create a connection to the database
connection = connect(**db_config)


@app.on_event("shutdown")  # Handle connection closing during shutdown
async def shutdown_event():
    connection.close()


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

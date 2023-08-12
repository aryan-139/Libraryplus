from typing import Union
import requests
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

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


# Current book count
@app.get("/books/count")
def get_books_count():
    return len(libraries)

from typing import Union
import requests
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


# getting all the books from the API and returning them as a json
def get_libraries():
    url = "https://frappe.io/api/method/frappe-library?page=2&title=and"
    params = {"page": 2, "title": "and"}
    response = requests.get(url, params=params)
    if response.status_code == 200:
        return response.json()
    else:
        return "Error"


libraries = get_libraries()
# print(libraries)

# getting all the books from the API and returning them as a json
@app.get("/books")
def get_books():
    return libraries

#current book count
@app.get("/books/count")
def get_books_count():
    return len(libraries)


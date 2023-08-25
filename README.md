# Libraryplus
LibraryPlus is a Library Management System, which aims to fix the efficiency and organization issues faced by libraries. It is an admin based web application, which allows the admin to manage the library, and the users to access the library. One can issue books, return books, search for books, and view the library catalog.

### Requirement Analysis Document
Requirement Analysis Document can be found here:
https://docs.google.com/document/d/12StFkDvC7djz3iCKISOiuxJsVbNLqmLcX6xd3-h34RA/edit?addon_store

### Assumptions
- The library has a single user (admin), who manages the library.
    - Hence, there is no need for a login system.
    - The library has a single branch.
    - The library has a single catalog.
    - The library has a single user.
    - The library has a single librarian.
    - The user interface must be simple and easy to use.

### Handeled Test Cases 
- The user can search for books by title, author, genre, and ISBN.
- The user can issue a book.
- The user can return a book.
- The user can view the library catalog.
- The user can view the books issued by him, along with the date on which the issue request was made.
- The user can view the books returned by him, alongside the date on which the return was carried out.
- The user can view the books issued by him, which are overdue, and hence the subsequent fine levied on him.
- If a user tries to borrow books worth Rs. 500 or more, he is not allowed to do so. A pop up Modal is displayed, which informs the user of the same.
- If the user tries to issue 0 books, it handles a similar error. 
- If the user does not add the mandatory fields at the time of checkout then it displays a relevant error message. 

### Folder Structure 

- client - contains the frontend code
- server - contains the backend code

![Alt text](/assets/folder_structure.png)

## Tech Stack

### Frontend
- ReactJS
- Material UI
- Axios
- JSX
- React-Router

### Backend
- FastAPI
- Python
- MySQL
- SQLAlchemy

## Database Schema

![Alt text](/assets/db_schema.png)

There is a single table implementation, using SQLAlchemy. The table is named `books`, and has the following columns:
- entry_number (Primary Key)
- time_borrowed
- full_name
- roll_number
- email
- phone_number
- branch
- books
- billing_amount
- time_returned 

## Installation and Setup
### Running the frontend locally 
1. Clone the repository
2. Goto, cd client and install the dependencies using `npm install`
3. Run the server using `npm start`
4. Open `localhost:3000` in your browser

### Running the backend locally
1. Goto cd server 
2. Run command, `uvicorn main:app --host 0.0.0.0 --port 8001`
3. This will run the server at port 8001, locally. 

## Application Overview 

Dashboard Page of Library Plus
![Alt text](/assets/dashboard.png)

Error Handling when the user tries to borrow books worth Rs. 500 or more
![Alt text](/assets/extra_books_error.png)

Dark Mode Support 
![Alt text](/assets/dark_mode.png)

Detailed and Intuitive Checkout Form 
![Alt text](/assets/form.png)

Detailed Transaction and Billing History
![Alt text](/assets/transaction_table.png)

Return Book Support 
![Alt text](</assets/return_book.png>)
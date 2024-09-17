School Dashboard
This project implements a school dashboard where users can sign up and log in. Based on the user's role (either student or teacher), the dashboard displays relevant data:

Students see only their own information.
Teachers can view all student data.

The dashboard also supports sorting and searching functionality for students based on their names.

Features

Signup: Create an account with fields such as name, email, password, role (either student or teacher).

Login: Log in using email and password.

Role-based access:

Students: View only their own data.

Teachers: View data of all students.

Sorting: Sort students by their names (ascending or descending).

Search: Search for students by name.

Data stored in MongoDB with the help of Mongoose.

Tech Stack
Backend: Node.js, Express.js
Database: MongoDB (using Mongoose)
Frontend: HTML, JavaScript, LocalStorage for role identification

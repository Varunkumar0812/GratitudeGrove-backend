# Gratitude Grove - Backend

## Overview

The backend for Gratitude Grove is built using Node.js, Express, and MongoDB, with Mongoose as the ORM (Object-Relational Mapping) tool. This backend manages user authentication, journal entries, goals, and user data. It provides CRUD operations for managing journals, goals, and user data, and uses JWT (JSON Web Token) for secure authentication and authorization.

- [Gratitude Grove - Frontend](https://github.com/username/gratitude-grove-frontend)

## Models

- **User Model:**
  - **email:** User's email address.
  - **firstname:** User's first name.
  - **lastname:** User's last name.
  - **age:** User's age.
  - **password:** User's password (hashed).
  - **passwordConfirm:** Field to confirm the user's password.

- **Journal Model:**
  - **title:** Title of the journal.
  - **user:** Reference to the user who owns the journal.
  - **entries:** Array of entries associated with the journal.
  - **date:** The date of the journal entry.
  - **createdAt:** Timestamp when the journal was created.

- **Goal Model:**
  - **user:** Reference to the user who set the goal.
  - **startTime:** The start time of the goal period.
  - **endTime:** The end time of the goal period.
  - **daysCount:** Number of days in the goal period.
  - **entriesCount:** Number of entries completed during the goal period.

- **Entry Model:**
  - **content:** The content of the journal entry.
  - **createdAt:** Timestamp when the entry was created.

## Features

- **CRUD Operations:**  
  Implemented for users, journals, and goals, allowing for creation, reading, updating, and deletion of records.

- **Authentication and Authorization:**  
  Secured using JWT tokens for user authentication and authorization.

## Technologies Used

- **Node.js:** JavaScript runtime for server-side development.
- **Express.js:** Web framework for building the API.
- **MongoDB:** NoSQL database for data storage.
- **Mongoose:** ODM library for MongoDB to model data.

## Future Work

The project is still a work in progress. Planned enhancements include additional features and improvements based on feedback and further requirements.

## Contribution

Feel free to use, modify, and contribute to this project. Your contributions are welcome!

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is open-source and free to use under the MIT License.

## Acknowledgements

- **Node.js** for providing the runtime environment.
- **Express.js** for the web framework.
- **MongoDB** and **Mongoose** for database management.
- **JWT** for secure authentication.

Feel free to explore the project and contribute if you have any ideas or improvements!

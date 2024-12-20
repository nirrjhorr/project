# AgroMart - A MERN Stack Agro E-commerce Site

**AgroMart** is an e-commerce platform built with the MERN stack (MongoDB, Express.js, React, Node.js) aimed at providing a marketplace for agricultural products. The website allows users to browse and purchase various farming and agro-related products. It features an admin panel for managing products and users, making it an ideal platform for agro-based e-commerce.

Deployed on: [AgroMart](https://agromart.onrender.com/)

## Run Locally

### 1. Clone the Repository

To run the project locally, clone the repository:

```bash
$ git clone git@github.com:basir/mern-amazona.git
$ cd mern-amazona
```

### 2. Create the `.env` File

- Duplicate the `.env.example` file in the `backend` folder and rename it to `.env`.

### 3. Setup MongoDB

Choose one of the following options to set up MongoDB:

#### Local MongoDB:
- Install MongoDB from [here](https://www.mongodb.com/try/download/community).
- In the `.env` file, set the `MONGODB_URI` as:
  ```env
  MONGODB_URI=mongodb://localhost/amazona
  ```

#### Atlas Cloud MongoDB:
- Create a database at [MongoDB Atlas](https://cloud.mongodb.com/).
- In the `.env` file, set the `MONGODB_URI` as:
  ```env
  MONGODB_URI=mongodb+srv://your-db-connection
  ```

### 4. Run the Backend

Navigate to the `backend` directory, install dependencies, and start the backend server:

```bash
$ cd backend
$ npm install
$ npm start
```

### 5. Run the Frontend

Open a new terminal window, navigate to the `frontend` directory, install dependencies, and start the frontend:

```bash
# In a new terminal
$ cd frontend
$ npm install
$ npm start
```

### 6. Seed Users and Products

To populate the database with sample users and products, visit the following URL in your browser:

[http://localhost:5000/api/seed](http://localhost:5000/api/seed)

This will return the admin email and password along with 6 sample products.

### 7. Admin Login

To log in as an admin, navigate to:

[http://localhost:3000/signin](http://localhost:3000/signin)

Enter the admin email and password provided by the seed script to access the admin panel.

## Technologies Used

- **MongoDB**: NoSQL database for storing user and product data.
- **Express.js**: Web framework for Node.js used for building the backend API.
- **React**: Frontend JavaScript library used for building the user interface.
- **Node.js**: Server-side runtime environment for JavaScript.

## Conclusion

AgroMart is a fully functional, MERN-based e-commerce website tailored for the agricultural industry. The application features both user and admin functionalities, ensuring seamless browsing, purchasing, and product management.

Feel free to explore and customize it further for your agro-based e-commerce needs!
```

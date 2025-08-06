# 📝 Blog Application

A full-stack blog platform that allows users to sign up, sign in, create, view, and manage blogs. Built using **React.js**, **Node.js**, **Express**, and **MongoDB**.

---

## Features

- *User Authentication (Sign up, Sign in)*
- *Create and publish blog posts*
- *View all blogs or user-specific blogs*
- *Delete your own blogs*

---

## Tech Stack

- **React.js (Vite)**  :  *For fast and modular frontend development*  
- **Tailwind CSS** : *Utility-first CSS for styling*  
- **Node.js + Express.js** : *REST API and routing*  
- **JWT (JSON Web Token)** : *Authentication mechanism (stored in localStorage)*  
- **MongoDB** : *NoSQL database for user and blog data*  
- **Mongoose** : *ODM for MongoDB*  


## Setup 

### 1. Clone the Repository

```
git clone https://github.com/your-username/blog-app.git
cd BugToBlog
```
### 2. Frontend Setup
```
cd React-frontent
npm install
npm run dev
```
### 3. Backend Setup
```
cd backend
npm install
node server.js
```
### 4. Create a .env file inside the backend folder
```
MONGODB_URI="your_mongodb_connection_string"
JWT_SECRET="your_jwt_secret"
```

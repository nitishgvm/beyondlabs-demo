# Task Management System – Full Stack Assignment

## Overview
This project is a simple full-stack task management system with basic authentication and role-based authorization.  
It demonstrates clean code structure, separation of concerns, and logical handling of authentication and task access.

## Features

### Authentication
- Login using username and password.
- No real authentication system (any credentials accepted except admin).
- Username acts as unique identifier.
- Auth state stored using localStorage.

### Admin User
- Username: `admin`
- Password: `admin@091`
- Admin can view and delete all tasks.

### Normal User
- Can create tasks.
- Can view and delete only their own tasks.

## Task Management
Each task includes:
- Title (required)
- Description (optional)
- Creator username (auto-assigned)

Supported actions:
- Create task
- View tasks
- Delete task

## Tech Stack

### Frontend
- React
- React Router
- Axios
- LocalStorage

### Backend
- Node.js
- Express.js
- JSON file storage
- Controller & Service pattern

## How to Run

### Frontend
```bash
cd client
npm install
npm run dev
```

### Backend
```bash
cd server
npm install
npm run dev

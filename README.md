# User Management App

A React + Redux application for managing users. This project allows you to **create, update, and delete users** with a modern UI, skeleton loaders, and toast notifications for feedback.

---

## Features

- **Create User:** Add new users dynamically with a form.
- **Update User:** Edit existing users; form pre-filled using React Router `state`.
- **Delete User:** Remove users with optional popup confirmation.
- **Loader & Skeletons:** Loading indicators for better UX.
- **Toast Notifications:** Using [react-hot-toast] for success/error messages.
- **Responsive Design:** Fully responsive using Tailwind CSS.
- **Reusable Components:** Input fields, loader, and popup are reusable across pages.

---

## Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS
- **State Management:** Redux Toolkit
- **Routing:** React Router v6
- **Notifications:** react-hot-toast
- **Build Tools:** Vite / Create React App (adjust based on your setup)
- **Backend (for dev/testing):** JSON Server

---

## Folder Structure

src/
├─ components/
│   ├─ InputField.tsx       # Reusable input field
│   ├─ Loader.tsx           # Loader component
│   └─ Popup.tsx            # Delete confirmation popup
├─ config/
│   └─ userFields.ts        # Form field config for users
├─ features/
│   ├─ slice/
│   │   └─ slice.ts         # Redux slice for users (CRUD)
│   └─ store/
│       └─ store.ts         # Redux store setup
├─ hooks/
│   └─ hooks.ts             # Custom hooks for Redux
├─ pages/
│   ├─ DashBoard.tsx        # Main layout with <Outlet /> for nested routes
│   ├─ UserPages.tsx        # Create User page
│   ├─ UpdatePage.tsx       # Update User page (using location state)
│   └─ DisplayUser.tsx      # Display & delete users page
├─ types/
│   └─ user.ts              # User type definition
├─ App.tsx                  # App entry, renders <RouterProvider>
└─ main.tsx                 # Entry point (ReactDOM.render)



---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Shibu-Patil/test-1.git
cd user-management-app
Install dependencies:

npm install
# or
yarn install
Start the development server:

npm run dev
# or
yarn dev
JSON Server Setup (Fake Backend)
To test CRUD operations, you can use JSON Server as a fake REST API.

1. Install JSON Server
Globally:

npm install -g json-server
Or locally:

npm install json-server --save-dev
2. Create db.json file
In the project root:

{
  "users": [
    {
      "id": "1",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "1234567890"
    },
    {
      "id": "2",
      "name": "Jane Smith",
      "email": "jane@example.com",
      "phone": "9876543210"
    }
  ]
}
3. Start JSON Server
json-server --watch db.json --port 3000
Base URL: http://localhost:3000

Endpoints:

GET /users → Fetch all users

GET /users/:id → Fetch single user

POST /users → Create new user

PUT /users/:id → Update user

DELETE /users/:id → Delete user

Usage
Navigate to Create User page to add a new user.

Navigate to All Users page to see the list of users.

Click Update to edit a user — form is pre-filled using location state.

Click Delete to remove a user.

Success or error messages appear as toast notifications.

Redux Actions
fetchUsers – Fetch all users from backend.

createUser – Add a new user.

updateUser – Update an existing user (requires id and data).

deleteUser – Delete a user by id.

Components
InputField: Reusable input component for form fields.

Loader: Displays a loading spinner or text while performing actions.

Popup: Optional confirmation modal for delete actions.

Notes
Ensure that updateUser and deleteUser actions handle the id correctly (TypeScript requires string).

Form fields in Create/Update pages use Partial<User> for flexibility.

Toast notifications require <Toaster /> in App.tsx:

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      {/* Routes / Pages */}
    </>
  );
}

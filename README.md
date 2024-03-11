# Project Name: Aniflix

## Description

Aniflix is a full-stack web application built with React (frontend), Node.js (backend), and MongoDB (database). It allows users to watch anime videos, discover new shows, and manage their favorites. An admin panel, built using React, provides functionalities for content management. Firebase Storage is leveraged for secure video and image storage. JWT (JSON Web Token) authentication ensures secure user login and registration. Vite is employed for a streamlined development experience.

## Features

- **User Accounts:** Users can register and log in using JWT authentication.
- **Anime Discovery:** Browse through a collection of anime titles.
- **Video Streaming:** Watch anime videos stored securely in Firebase Storage.
- **Favorites Management:** Add and remove anime from a user's favorite list.
- **Admin Panel (React-based):** Manage content, including adding, editing, and deleting anime entries.

## Technologies Used

- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Storage:** Firebase Storage
- **Authentication:** JWT
- **Build Tool:** Vite
- **State Management (Optional):** Redux, Context API (Consider including if used)

## Installation

1. Clone this repository: `git clone https://github.com/shambhabya/aniflix.git`
2. Install dependencies in each folder: `npm install` (or `yarn install`)
3. Create a `.env` file in the project root to store environment variables (refer to the `.env.example` file for guidance).
4. Configure your Firebase project and obtain credentials (instructions provided in the `firebase` folder).

## Running the Application

1. Start the backend server in api directory: `npm start` (or `yarn start`)
2. Start the frontend development server in client directory: `npm run dev` (or `yarn dev`)
3. Access the application in your browser: [http://localhost:5173](http://localhost:5173) (default frontend port)

## Admin Panel

- Access the admin panel from the admin directory by setting environment variables.
- Log in using authorized admin credentials.

## Development

- The codebase is structured using a clear separation of concerns client, api, admin (frontend, backend, admin panel).
- Hot Module Replacement (HMR) is enabled for the frontend to facilitate rapid development.
- Consider using a linter and code formatter (e.g., ESLint, Prettier) to maintain code quality.

## Deployment

1. The backend server is deployed on Render.
2. Deploy the built frontend files to a static hosting service like Netlify.
3. Configure environment variables appropriately for the deployment environment.
4. Update CORS settings to allow requests from the frontend to the backend if deployed on different domains.


## Credits

- This project was done by taking reference from Lama Dev Youtube Channel and the admin panel is taken from his code base. Thanks a lot.

I hope this enhanced README serves you well!

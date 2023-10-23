# React Chat App

A real-time chat application built with React and Firebase. Users can sign in with their Google accounts and start chatting with other users in real-time. The application is responsive and works on all screen sizes. The application is deployed on Netlify.

[View Live](https://darling-bombolone-85280b.netlify.app/)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Screenshots](#screenshots)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributors](#contributors)
- [Acknowledgements](#acknowledgements)

## Features

- Real-time messaging
- User authentication
- Google sign-in
- Responsive design

## Installation

To run this application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/ChaudaryHammad/react-chat-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-chat-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

   Replace `your_api_key`, `your_auth_domain`, and other values with your Firebase configuration.

5. Start the development server:

   ```bash
   npm start
   ```

6. Open your browser and visit [http://localhost:3000](http://localhost:3000) to use the chat app.

## Screenshots

![Login Screenshot](/public/login.png)



## Usage

1. Sign up or log in using your google account.
2. Start chatting in real-time with other users.

## Technologies Used

- React
- Firebase
- CSS

## Contributors

- [Chaudary Hammad](https://github.com/ChaudaryHammad)
- [Ahsan Commits](https://github.com/AhsanCommits)

## Acknowledgements

- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [React Router](https://reactrouter.com/)
- [React Router Dom](https://www.npmjs.com/package/react-router-dom)
- [Framer Motion](https://www.framer.com/motion/)
- [Chakra UI](https://chakra-ui.com/)

Built with :heart: by Chaudary Hammad and Ahsan Commits

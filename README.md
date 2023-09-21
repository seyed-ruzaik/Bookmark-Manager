# Bookmark Manager

Bookmark Manager is a web application that allows you to easily organize and manage your favorite links and collections. Whether you want to save articles, websites, or anything else you come across on the web, Bookmark Manager has you covered.

## Routes

- **Home**: The main landing page where you can view and manage your bookmarked links and collections.
  - URL: `/`

- **Sign Up**: Register for a new account to access the full features of Bookmark Manager.
  - URL: `/sign-up`

- **Sign Up Success**: A confirmation page displayed after successful user registration.
  - URL: `/sign-up/success`

- **Error**: An error page for handling unexpected situations.
  - URL: `/error`

- **Login**: Log in to your account to access your saved links and collections.
  - URL: `/login`

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository to your local machine.

2. Navigate to the project directory.

3. Run `npm install` to install the project dependencies.

4. Run `npm start` to start the development server.

5. Open your web browser and access the application using the following base URL: [https://avantrio-frontend-training.herokuapp.com/](https://avantrio-frontend-training.herokuapp.com/)

## API Endpoints

- **Sign Up**: Use this endpoint to create a new account.
  - URL: `/api/auth/register/`
  - Method: `POST`

- **Login**: Use this endpoint to log in to your account.
  - URL: `/api/auth/token/`
  - Method: `POST`

Feel free to explore the features of Bookmark Manager and start organizing your bookmarks today!
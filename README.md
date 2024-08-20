# MeetMax - Authentication and Feed App

## Overview

This React application simulates an authentication flow and provides a feed page accessible only to authenticated users. It uses Redux for state management, local storage for authentication, and provides routes for login, signup, password reset, and feed.

**Live Site Link:** [https://meetmax-ui.netlify.app](https://meetmax-ui.netlify.app)

## Features

- **Authentication:**
  - Login, Signup, and Password Reset functionalities.
  - Form validation to ensure input accuracy and security.
  - Simulated authentication using local storage.

- **Feed Screen:**
  - Accessible only to logged-in users.

- **Responsiveness:**
  - The application is designed to be responsive and adapt seamlessly to various screen sizes.

## Running the Application

- Start the development server.
- Open the application in your browser at `http://localhost:3000`.

## Project Structure

- **`/src`**: Contains all the source files.
  - **`/components`**: Reusable UI components.
  - **`/pages`**: Pages for login, signup, forget-password, and feed.
  - **`/hooks`**: Use a custom hook useWindowSize to get the Window Size.
  - **`/reducers` `/features` `/store`**: Redux slices and store configuration.
  - **`/styles`**: Global style for all components.

- **`/public`**: Static assets and HTML file.

## Routing

- **`/login`**: Sign-in page.
- **`/signup`**: Signup page.
- **`/forget-password`**: Password reset page.
- **`/feed`**: Feed page, accessible only to authenticated users.

## Form Validation

Form validation is implemented to ensure:
- Required fields are filled.
- Email format is correct.
- Password meets security requirements.

## Simulated Authentication

- **Login and Signup**: Credentials are checked against local storage.
- **Logout**: Clears authentication state and redirects to the login page.
- **Access Restriction**: The feed page is only accessible to logged-in users.

## Responsive Design

The application is built to be responsive, adjusting layout and content based on screen size for an optimal user experience on all devices.

## Testing

Ensure all functionalities work as expected by:
- Testing form validation and authentication flow.
- Verifying access control to the feed page.
- Checking responsiveness on different devices.

## Assumptions

- Local storage is used to simulate backend interactions.
- All form validations and authentication processes are handled locally.

## Tools Used

- React
- Redux
- Styled-components
- React Router DOM

## Contact

For any questions or issues, please contact [Misbah Uddin Tareq](mailto:lumisbah92@gmail.com).


# BDSports - Sports Equipment Online Store

**Live Site URL:** [https://bdsports.abujafor.me/](https://bdsports.abujafor.me/)

BDSports is a responsive and feature-rich e-commerce website dedicated to sports equipment. It allows users to browse, add, update, and purchase sports accessories across various categories. The website includes functionalities such as user authentication, product management, and a personalized experience for registered users.
![2](https://github.com/user-attachments/assets/2e3efded-f630-40bf-a6a7-9050dac6e6f3)

## Features:
- **Responsive Design:** Fully responsive across mobile, tablet, and desktop views.
- **User Authentication:** Login and register with email/password and third-party authentication (Google, GitHub, Facebook, etc.).
- **Add, Update, and Manage Equipment:** Add new products, update existing ones, and manage a personalized equipment list.
- **Product Filtering:** Sort products based on price and categories.
- **Secure Private Routes:** Access certain routes like adding equipment and viewing details only after logging in.
- **Dark/Light Theme Toggle:** Switch between dark and light themes on the homepage.
- **Animations:** Implemented with Lottie React and React Awesome Reveal for smooth UI transitions.
- **Error Handling:** Custom error and success messages displayed using toast or sweet alert.
- **404 Page:** Displayed for non-existing routes.
## Server repo link: https://github.com/abujaforhadi/Sports-Equipment-Shop-Server
## Technologies Used:
- **Frontend:** React, Tailwind CSS, Firebase Authentication
- **Backend:** Node.js, Express, MongoDB
- **Hosting:** 
  - Frontend: Firebase
  - Backend: Vercel
- **Environment Variables:** Firebase config keys and MongoDB credentials are securely stored in environment variables.

## Setup Instructions:

### 1. Clone the Repositories:
Clone both client-side and server-side repositories:
- **Client-side repository:** `git clone https://github.com/abujaforhadi/Sports-Equipment-Shop-Client.git`
- **Server-side repository:** `git clone https://github.com/abujaforhadi/Sports-Equipment-Shop-Server.git`

### 2. Install Dependencies:
- **Frontend:** Navigate to the client-side directory and run `npm install`.
- **Backend:** Navigate to the server-side directory and run `npm install`.

### 3. Firebase and MongoDB Configuration:
- Add your Firebase and MongoDB credentials in `.env` files for both the client and server sides.
- Ensure the Firebase config is hidden using environment variables for security.

### 4. Run the Development Server:
- **Frontend:** Run `npm start` to start the React development server.
- **Backend:** Run `npm start` to start the Express server.

### 5. Access the Website:
Once the servers are running, navigate to the provided URL for the frontend (usually `https://sports2.vercel.app/data`).

## Future Improvements:
- Implement email verification after registration.
- Add a forget password functionality.
- Add a user profile page for managing personal information and order history.

## Contributing:
Feel free to fork the repository, submit issues, and create pull requests. Contributions are always welcome!

## License:
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments:
- Thanks to Firebase for authentication and hosting services.
- Thanks to MongoDB for database support.
- Special thanks to the React community for providing valuable resources and libraries.


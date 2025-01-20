
# React Native Card Freeze Animation App

## Project Overview
The **React Native Card Freeze Animation App** is a mobile application designed to display card details with a freeze animation feature. The app allows users to toggle between freezing and unfreezing the card's information, showing a unique animation when frozen. The app utilizes **Faker.js** to generate random data for the card details, including the card number, expiry date, and CVV.

The app also includes bottom tab navigation for easy access to the **Home**, **Yolo Pay**, and **Genie** screens. The freeze effect gives a dynamic and interactive user experience.

## Setup Instructions
To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rojalini18/Yolo-Task.git
   cd Yolo-Task
   ```

2. **Install dependencies:**
   Make sure you have [Node.js](https://nodejs.org/) installed. Then, run:
   ```bash
   npm install
   ```

3. **Run the application:**
   Start the development server with:
   ```bash
   npm start
   ```
   This command will start the application, and you can view it in your browser or simulator.

4. **Run on mobile devices:**
   - For **iOS**: Run `npx react-native run-ios`
   - For **Android**: Run `npx react-native run-android`

5. **Make sure to install required native dependencies (if any)** as mentioned in the documentation of each library used in the project.

## Features Implemented
- **Bottom Tab Navigation**: The app includes three main tabs: **Home**, **Yolo Pay**, and **Genie**.
- **Freeze Animation**: A freeze effect is applied to the card details when the freeze button is pressed, locking the information.
- **Card Display**: Displays dynamic card details such as card number, expiry, and CVV.
- **Random Data**: Card details are generated using **Faker.js**.
- **Freeze/Unfreeze Toggle**: A button toggles the card details between visible and frozen states.
- **Responsive Design**: The app is designed to work across different screen sizes.

## Technologies and Libraries Used
- **React Native**: For building the mobile application.
- **React Navigation**: For managing navigation between different screens.
- **Faker.js**: For generating random data for the card details.
- **React Native Animations**: To implement the freeze effect animation.
- **AsyncStorage** (optional): For persisting user data (future feature).

## Known Limitations
- Limited error handling and validation.
- No user authentication or account management features.


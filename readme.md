# E-Commerce App - React Native

A React Native e-commerce application providing a comprehensive and user-friendly shopping experience.

## Main Features

### Account Screen

- **Secure Access:** Only authenticated users can access the profile screen and make purchases.
- **User Information:** Displays user details such as name and profile image.

### Authentication with Firebase

- Utilizes Firebase authentication system to manage user access.
- Allows users to securely log in and register.

### Home Screen

- Displays a selection of categories in cards.
- Clicking on a category navigates to the corresponding products screen.

### ItemsCategory Screen

- Lists all products in cards with name and photo.
- Includes a search bar to filter products by name.
- Clicking on a product navigates to the product details screen.

### ItemDetail Screen

- Provides a detailed description of the product.
- Displays price and available stock.
- Allows adding the product to the cart.

### Bottom Navigation

- **Tab 1 - Home:** Categories and products (main stack).
- **Tab 2 - Carrito:** Shopping cart details with summary and checkout button.
- **Tab 3 - Ordenes:** History of placed orders.
- **Tab 4 - Perfil:** User information, location, and profile image upload.

## Technologies Used

- **Firebase Authentication:** Implements Firebase authentication system to manage application security.
- **React Native Navigation Stack:** Manages navigation between screens.
- **React Native Navigation Bottom Tab:** Manages navigation between tabs.
- **Expo-Picker-Image:** Facilitates profile image upload.
- **Redux:** Centralizes and manages application state.
- **RTK Query and Firebase:** Performs read/write operations on the database.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/your-application.git`
2. Install dependencies: `npm install`
3. Configure API keys for external services (Expo-Location, Firebase, etc.).
4. Set up Firebase credentials in your project.
5. Run the application: `npm start`
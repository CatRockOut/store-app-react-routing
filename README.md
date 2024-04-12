# Store App 🛒

You can view the page here:
https://catrockout.github.io/store-app-react-routing/

### Description:
This project is a simple online store application built using React, Redux Toolkit for state management, and React Router for navigation. It allows users to browse products, add them to a cart, and proceed through a multi-step checkout process.

### Features:
- **Home Page**: Displays a list of products that users can browse and add to their cart.
- **Cart**: Allows users to view and manage the products they have added to their cart.
- **Checkout**: Implements a multi-step form for checkout, ensuring a smooth and intuitive user experience.
- **Breadcrumbs**: Enable users to navigate back to previous steps in the checkout process using breadcrumbs.

### Technical Requirements:
- **State Management**: Utilizes Redux Toolkit for efficient state management, ensuring a seamless user experience.
- **Routing**: Implements React Router for smooth navigation between different pages and checkout steps.
- **Multi-Step Form**: Each step of the checkout process is represented as a separate route to facilitate easy navigation.
- **Form Management**: Utilizes either React Hook Form for efficient form management, ensuring a smooth user experience during checkout.
- **Validation**: Validates the form inputs using Yup, ensuring that user-provided data is accurate and meets the required criteria.
- **State Persistence**: Stores the checkout steps' state in the `location.state` to maintain data integrity and user progress.
- **Products Data**: Fetches product data from [https://dummyjson.com/products](https://dummyjson.com/products) to populate the store with dummy products for demonstration purposes.

### Technologies Used:
- **React**
- **Redux Toolkit**
- **JavaScript**
- **CSS**
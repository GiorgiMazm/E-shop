## E-shop
E-shop is a simple e-commerce web application built with Vue.js and TypeScript. The application allows users to browse products, add products to their cart, and checkout.

## Table of Contents
1. Installation
2. Usage
3. Technologies
4. Contributing
5. License

## Installation
To install the E-shop application, follow these steps:

1. Clone the repository: git clone https://github.com/GiorgiMazm/E-shop.git
2. cd/App
3. Install dependencies: npm install
4. Build the application: npm run build
5. Navigate to Service: cd ../Service
6. Check that you are using Java 18: java -version
7. mvn clean install

## Usage
To use the E-shop application, follow these steps:

1. Start java Service: java -jar target/Service.jar  (you need local postgresql data-bank, look at Service/src/main/resources/application.properties)
2. Start the front end App: npm run serve
3. Open the application in your browser: http://localhost:5173
4. The application allows users to browse products, add products to their cart, and checkout. Users can create an account to save their personal information and create review

## Technologies
The E-shop application was built with the following technologies:

Front end
1. Vue.js
2. TypeScript
3. Pinia (for state management)
4. Vue Router (for routing)
5. Axios (for API calls)
6. Tailwind CSS (for styling)

Back end
1. Java
2. Spring boot
3. Postgresql(Database)

## Contributing
Contributions to the E-shop application are welcome. To contribute, follow these steps:

1. Fork the repository
2. Create a new branch: git checkout -b feature/your-feature
3. Make your changes
4. Push to the branch: git push origin feature/your-feature
5. Submit a pull request

## License
This project is licensed under the MIT License - see the LICENSE file for details.
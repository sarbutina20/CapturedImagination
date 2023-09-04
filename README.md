# CapturedImagination
# An e-commerce bookstore that provides users with a simple and convenient way to research, browse and purchase books online.  
  
After successful login and registration, users can browse through a diverse collection of books. Each book comes with more detailed information that can be accessed by clicking on the selected book. Adding selected books to the cart allows users to prepare their order. The shopping cart enables easy order management: users can add or remove books according to their wishes.  

When users are ready to purchase their selected books, the app generates a receipt showing all the selected books and the total price. In addition, the application integrates a simulated payment through Stripe, ensuring the security and confidentiality of the transaction.  
After making a payment, the app receives feedback from Stripe. This information provides users with a transparent insight into the status of their transaction, confirming the success of the payment or providing information about a possible failure.   

Functionalities of the web application include:  
• user registration, login and logout  
• display of products with a menu for selecting the desired list of books  
• book search by title  
• the possibility of adding books to favorites, i.e. favoring books  
• adding products to the cart  
• display of products in the basket with the possibility of increasing or decreasing the specified number  
of the product, i.e. removing the product from the shopping cart  
• bill display and bill payment  
  
The user interface is a single page application created using React, React-DOM, React Router and Redux. A React application was created with modern approaches to web application development in mind, although React allows a lot of freedom and flexibility. In addition to routing, React Router was also used to protect routes and send requests to the backend server. The simple design is created through CSS using the module approach.  
  
Using Node.js and Express.js, a back-end server was created that receives requests from the client part of the application, processes them, communicates with the database and the payment system, and sends a response. The back-end and client part communicate with each other via JWT, except of course during registration and login requests when only the server returns the token. The bcrypt library was used to hash passwords and in one place a crypto library to create a unique product price.  
  
In order to integrate Stripe, a payment route and a Stripe Webhooks route were created in the backend server to receive transaction notifications and trigger the addition of orders to the database. Stripe Checkout has been added to the user interface to facilitate the payment of products added to the cart, as well as secure communication with the backend server.  



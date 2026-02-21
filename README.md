🌸 Aura Handmade – E-Commerce Web Application

Tagline: Handmade Happiness for Every Occasion — Crafted with Love, Made for You.

Aura Handmade is a full-stack e-commerce web application for managing and selling custom handmade products. The system includes two main modules: User Module and Admin Module, with integrated cart, wishlist, and online payment functionality.

System Architecture

The application follows a client-server architecture:

Frontend: React (SPA)

Backend: Node.js + Express.js,Mongoos

Database: MongoDB 

Authentication: JWT-based authentication && Role Based Authentication

Payment Gateway:  Stripe



👥 Modules


1️⃣ User Module

Features:

User Registration & Login (JWT Authentication)

Browse Products

Search & Filter Products

View Product Details

Add to Cart

Add to Wishlist

Remove from Cart / Wishlist

Place Order

Online Payment Integration

View Order History



User Flow:

User registers / logs in

Browses products

Adds items to cart or wishlist

Proceeds to checkout

Completes payment

Order is stored in database



2️⃣ Admin Module

Features:

Secure Admin Login

Add Products

Update Products

Delete Products

Manage Product Categories

View All Orders

Update Order Status

Manage Users


Admin Flow:


Admin logs in

Performs CRUD operations on products

Monitors orders

Updates order status

🔐 Authentication & Security

Passwords hashed using bcrypt

JWT token-based authentication

Role-based access control (Admin/User)

Protected routes using middleware





used packages =  react-router-dom,Material UI, swiper (Carousel) , contextApi(for modale auth login register)
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './Main.css';

function Main() {
  return (
    <main>
      <div className="order-button-container">
        <button className="order-button">Order Online</button>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservation" element={<ReservationsPage />} />
        <Route path="/order-online" element={<OrderOnlinePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </main>
  );
}

function HomePage() {
  return (
    <section>
      <div>
        <img src="images/images/currysalann.png" alt='Curry'></img>
        <p>Curry served with Chicken topped with garlic</p>
      </div>
      <div>
        <img src="images/images/fries.png" alt='Fries'></img>
        <p>Masala Fries served with Ketchup and Mayonise</p>
      </div>
      <div>
        <img src="images/images/greek salad.jpg" alt='salad' width={330} height={330}></img>
        <p>Fruit Salad served with almond topping</p>
      </div>
    </section>
  );
}

function MenuPage() {
  return (
    <section>
      <h1>Menu</h1>
      <p>Here is our menu:</p>
      <ul>
        <li>Curry served with Chicken topped with garlic</li>
        <li>Masala Fries served with Ketchup and Mayonise</li>
        <li>Fruit Salad served with almond topping</li>
      </ul>
    </section>
  );
}

function ReservationsPage() {
  return (
    <section>
      <h1>Reserve a Table</h1>
      <p>To make a reservation, please call us at (123) 456-7890.</p>
    </section>
  );
}

function AboutPage() {
  return (
    <section>
      <h1>About Us</h1>
      <p>We are Little Lemon, a restaurant serving traditional as well as international cuisine. We are located in the heart of Chicago.</p>
    </section>
  );
}

function OrderOnlinePage() {
  return (
    <section>
      <h1>Order Online</h1>
      <p>Visit our online ordering platform to place your order.</p>
    </section>
  );
}

function LoginPage() {
  return (
    <section>
      <h1>Login</h1>
      <p>Please login to access your account.</p>
    </section>
  );
}

export default Main;

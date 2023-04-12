import React from 'react';
import './Main.css';

function Main() {
  return (
    <main>
      <div class="order-button-container">
    <button class="order-button">Order Online</button>
  </div>
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
    </main>
  ); 
}

export default Main;
 
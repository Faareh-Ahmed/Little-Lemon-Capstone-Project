import React from 'react';


import './Header.css';

function Header() {
  return (
    <header>
      <section>
        <article>
          <h1>Little Lemon</h1>
          <h4>Chicago</h4>
          <p>Little Lemon is a Food Restaurant famous for its Traditional
            as well as International Food varities
          </p>
          <button className="reserve-button">Reserve a Table</button>
        </article>
        <img src="images/images/headerrestaurant.jpg" alt="Little Lemon Logo" />
      </section>
    </header>
  );
}


export default Header;

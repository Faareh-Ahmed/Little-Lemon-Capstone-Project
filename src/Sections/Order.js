import Headerrestaurant from '../images/restaurantsurrounding.jpg'
export default function Order() {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={Headerrestaurant}
        alt="Fries Little Lemon"
      ></img>
      <div className="reserve-header-text">
        <h1>Order</h1>
      </div>
    </header>
  );
}

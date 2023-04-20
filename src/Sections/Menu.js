import Headerrestaurant from '../images/restaurantsurrounding.jpg'
export default function Menu() {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={Headerrestaurant}
        alt="Fries Little Lemon"
      ></img>
      <div className="reserve-header-text">
        <h1>Menu</h1>
      </div>
    </header>
  );
}

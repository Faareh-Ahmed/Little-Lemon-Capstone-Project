import {Link} from 'react-router-dom';
import Headerrestaurant from '../images/restaurantsurrounding.jpg';
export default function Header() {
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="subsection">Welcome to Little Lemon Restaurant. We offer you a great
                    food experience with comfortable environment to enjoy and spend your valuale time</p>
                    <br></br>
                    <Link className="action-button" to="/reservation">Reserve a table</Link>
                </section>

                <section className="hero-image">
                    <img src={Headerrestaurant} alt="Little Lemon restaurant cuisine"></img>
                </section>
            </article>
      </header>
    );
}
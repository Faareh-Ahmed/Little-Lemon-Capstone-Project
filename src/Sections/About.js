import Headerrestaurant from '../images/headerrestaurant.jpg';
import Greeksalad from '../images/greek salad.jpg';
export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="about-subtext">Little Lemon is a Restaurant famous for its wide variety
                of International cousines. It was establish in 2005 in Chicago and is owned 
                by Faareh and Azfar. It offers a comfortable and aesthetic environment for Families 
                and has an amazing Rooftop to be booked for Special Events</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={Greeksalad} alt="Little Lemon restaurant cuisine "></img>
                <img className="about-2" src={Headerrestaurant} alt="Little Lemon restaurant Chef"></img>
            </section>  
    </article>
    );
}
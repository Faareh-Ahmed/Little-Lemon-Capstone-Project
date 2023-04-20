import SpecialCard from './SpecialCard';
import currysalann from '../images/currysalann.png';
import lemondesert from '../images/lemondessert.jpg';
import Greeksalad from '../images/greek salad.jpg';
export default function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>This weeks specials</h1>
                {/* <a className="action-button" href={require('../../../assets/menu.webp')} target="_blank" rel="noreferrer">Online Menu</a> */}
            </article>

            <section className="specials-cards">
                <SpecialCard image={currysalann} name="Chicken Manchurian" price="Rs 850" description="Boneless Chicken dipped in Tomato Ketchup sauce and topped with
                green chilli"/>
                <SpecialCard image={Greeksalad}name="Greek Salad" price="Rs 450" description="Fresh Ssalad Topped with Almond and Caramel"/>
                <SpecialCard image={lemondesert} name="Lemon Dessert" price="Rs 300" description="Fresh Baked Desert dipped in Lemon juice and served with Chocolate dip"/>
            </section>

            <section className="specials-carousel">
                {/* <Carousel /> */}
            </section>
        </section>
    );
}
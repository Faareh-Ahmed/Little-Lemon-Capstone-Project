import TestimonialCard from './TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>
                <p>This is the testimonial section</p>

            <section className="testimonials-cards">
                <TestimonialCard name="Farzan Saqib" description="This is the best  food that I've ever had!"/>
                <TestimonialCard name="Awais Nazir" description="Enjoyed my valuable time here "/>
                <TestimonialCard name="Salman Siddiq" description="It was an amazing experience having food here"/>
                <TestimonialCard name="Abdul Wahab" description="Great food, welcoming staff, cozy atmosphere."/>
                <TestimonialCard name="Sarmad Abbasi" description="The food here is really fresh and tasty"/>
                <TestimonialCard name="Haris Rehman" description="I came to Little Lemon after a 5 hours Travel from Gujranwala.
                 The food here tasted so delicious after the trip here."/>
                <TestimonialCard name="Umair Gosal" description="The best food experience in Chicago"/>
                <TestimonialCard name="Faiq Qazi" description="I really recommend this restaurant to all the people
                 residing in Chicago and nearby"/>
            </section>

            <section className="testimonials-carousel">
                {/* <Carousel /> */}
            </section>
        </section>
    );
}
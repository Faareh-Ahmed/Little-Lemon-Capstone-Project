import Header from '../Sections/Header';
import Specials from '../Sections/Specials';
import Testimonials from '../Sections/Testimonials';
import About from '../Sections/About';
export default function Homepage() {
  return (
    <>
      <Header/>
      <main>
        <Specials />
        <Testimonials />
        <About />
      </main>
    </>
  );
}

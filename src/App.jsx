import "../src/app.scss";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Nav/Navbar";
import Parallax from "./Components/Parallax/Parallax";
import Portfolio from "./Components/Projects/Portfolio";
import Services from "./Components/Services/Services";

const App = () => {
  console.log("object",);
  return (
    <>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="Services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="Portfolio" />
      </section>
      {/* <section id="Portfolio">Portfolio1</section> */}

      <Portfolio />

      <section id="Contact">
        <Contact />
      </section>
      {/* <section>Portfolio2</section>
  <section>Portfolio3</section> */}
      {/* <section id="About">Contact</section> */}
    </>
  );
};

export default App;

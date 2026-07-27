import "./Hero.css";
import Button from "./Button";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">
        <h1>Welcome to Our School</h1>
        <p>Empowering Students for a Bright Future</p>

        <div className="hero-buttons">
          <Button text="Explore Academics" link="/academics" />
          <Button text="Apply Now" link="/admissions" type="secondary" />
        </div>
      </div>

    </section>
  );
}

export default Hero;
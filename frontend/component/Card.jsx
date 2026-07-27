import "./Card.css";
import Button from "./Button"; // ✅ import reusable button

function Card({ title, description, image, link }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />

      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>

        {/* ✅ Reusable Button with dynamic link */}
        <Button text="Learn More →" link={link} />
      </div>
    </div>
  );
}

export default Card;
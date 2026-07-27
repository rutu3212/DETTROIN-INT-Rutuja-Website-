import "./Button.css";
import { useNavigate } from "react-router-dom";

function Button({ text, link, type = "primary" }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link); // ✅ navigate to page
    }
  };

  return (
    <button className={`btn ${type}`} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
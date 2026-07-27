import "./Home.css";
import { useState, useEffect } from "react"; // ✅ ADD
import Loader from "../component/Loader";     // ⚠️ CHECK FOLDER NAME
import Card from "../component/Card";
import Hero from "../component/Hero";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // simulate loading
  }, []);

  // ✅ SHOW LOADER FIRST
  if (loading) return <Loader />;

  return (
    <div className="home">

      {/* ✅ HERO */}
      <Hero />

      {/* 🎓 Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>

        <div className="feature-container">

          <Card
            title="Quality Education"
            description="Experienced faculty and modern curriculum."
            image="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=60"
            link="/academics"
          />

          <Card
            title="Campus Life"
            description="Beautiful campus with great facilities."
            image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=60"
            link="/Gallery"
          />

          <Card
            title="Career Support"
            description="Strong placement and career guidance."
            image="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=60"
            link="/Contact"
          />

        </div>
      </section>

    </div>
  );
}

export default Home;
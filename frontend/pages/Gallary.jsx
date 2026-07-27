import "../pages/Gallary.css";

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=800&q=60"
  ];

  return (
    <div className="gallery">
      <h1>Our Gallery</h1>

      <div className="gallery-container">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img 
              src={img} 
              alt={`gallery-${index}`}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/300";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
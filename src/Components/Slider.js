import image1 from "../Pictures/1.webp";
import image2 from "../Pictures/2.webp";
import image3 from "../Pictures/3.webp";
import "../Style/Slider.css";
// slider not work without   data-bs-slide="prev",  data-bs-target="#carouselExampleControls"
function Slider() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100 h-300" src={image1} alt="First slide" />
        </div>
        <div className="carousel-item ">
          <img
            className="d-block w-100 h-300"
            src={image2}
            alt="Second slide"
          />
        </div>
        <div className="carousel-item ">
          <img className="d-block w-100 h-300" src={image3} alt="Third slide" />
        </div>
      </div>
      <a
        data-bs-slide="prev"
        data-bs-target="#carouselExampleControls"
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Slider;

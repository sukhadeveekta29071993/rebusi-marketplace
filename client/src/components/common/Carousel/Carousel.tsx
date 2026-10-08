import { Link } from "react-router-dom";

export interface CarouselItem {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  id?: string;
  interval?: number;
}

function Carousel({
  items,
  id = "commonCarousel",
  interval = 5000,
}: CarouselProps) {
  if (!items.length) {
    return null;
  }

  return (
    <div
      id={id}
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval={interval}
    >
      {items.length > 1 && (
        <div className="carousel-indicators">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={index === 0 ? "active" : ""}
              data-bs-target={`#${id}`}
              data-bs-slide-to={index}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      <div className="carousel-inner rounded-4 overflow-hidden">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="img-fluid d-block w-100"
              style={{
                height: "450px",
                objectFit: "cover",
                filter: "brightness(0.5)",
              }}
            />

            <div className="carousel-caption top-1 bottom-1 d-flex align-items-center text-start">
              <div className="container w-75">
                <h5
                  className="fw-bold fs-4"
                  style={{
                    color: "var(--orange)",
                  }}
                >
                  {item.title}
                </h5>

                <h6 className="fw-bold mb-2 mt-2 fs-3 text-light">
                  {item.subTitle}
                </h6>

                <p className="mb-3 text-light fs-5">{item.description}</p>

                {item.buttonText && item.buttonLink && (
                  <Link to={item.buttonLink} className="btn btn-primary">
                    {item.buttonText}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />

            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />

            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}
    </div>
  );
}

export default Carousel;

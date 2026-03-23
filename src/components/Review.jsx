import "./Review.css";
import Nav from "./Nav";

import R1 from "../images/reviews/review1.png";
import R2 from "../images/reviews/review2.png";
import R3 from "../images/reviews/review3.png";
import R4 from "../images/reviews/review4.png";

export default function Review() {
  const reviews = [
    { id: 1, img: R1, alt: "Review 1" },
    { id: 2, img: R2, alt: "Review 2" },
    { id: 3, img: R3, alt: "Review 3" },
    { id: 4, img: R4, alt: "Review 4" },
  ];

  return (
    <div className="review-page">
      <Nav />

      {/* HEADER */}
      <header className="review-header">
        <div className="review-header-inner">
          <div className="review-title-wrap">
            <p className="review-pill">Customer Reviews</p>
            <h1 className="review-title">What Our Customers Say</h1>
          </div>

          <div className="review-order">
            <p className="order-now">ORDER NOW!</p>
            <div className="order-line" />
            <div className="order-phones">
              <a href="tel:09778003165" className="order-phone">📞 09 778003165</a>
              <a href="viber://chat?number=%2B959778003165" className="order-phone">💬 09 778003165</a>
            </div>
          </div>
        </div>
      </header>

      {/* REVIEWS GRID */}
      <main className="review-main">
        <div className="review-grid">
          {reviews.map((r) => (
            <a
              key={r.id}
              href={r.img}
              target="_blank"
              rel="noreferrer"
              className="review-card"
              aria-label={`Open ${r.alt}`}
            >
              <img src={r.img} alt={r.alt} className="review-img" />
            </a>
          ))}
        </div>
      </main>

      {/* FOOT NOTE */}
      <div className="review-bottom-leaf" />
    </div>
  );
}

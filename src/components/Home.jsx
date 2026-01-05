import "./Home.css";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Popular1 from "../images/products/Shrimptempura.png";

import { FaFacebookF, FaTiktok, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn, MdAccessTime } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";

function Home() {
  return (
    <div className="home-page">
      {/* HERO */}
      <section className="home-hero">
        <Nav />

        <div className="hero-inner">
          <div className="hero-content">
            <h1>Mom’s Kitchen</h1>
            <p className="hero-tagline">Homemade Kids Lunch Boxes in Mandalay</p>

            <p className="hero-sub">
              Order before <b>11:30 AM</b> • Delivery fee <b>1,500 kyat</b>
            </p>

            <div className="hero-buttons">
              <Link to="/products" className="btn primary">
                Order Now
              </Link>

              <a
                href="viber://chat?number=%2B959778003165"
                className="btn viber"
              >
                Viber
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT (paper background) */}
      <main className="home-content">
        {/* MOST POPULAR */}
        <section className="home-section">
          <h2 className="section-title">Most Popular</h2>

          <div className="popular-grid ">
            <Link to="/products" className="popular-card">
              <img src={Popular1} alt="Shrimp Tempura Lunch Box" />
              <div className="popular-info">
                <p className="popular-name">Shrimp Tempura Lunch Box</p>
                <p className="popular-price">5,000 kyat</p>
              </div>
            </Link>

            <Link to="/products" className="popular-card">
              <img src={Popular1} alt="Chicken Teriyaki Lunch Box" />
              <div className="popular-info">
                <p className="popular-name">Chicken Teriyaki Lunch Box</p>
                <p className="popular-price">4,500 kyat</p>
              </div>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="home-section">
          <h2 className="section-title">FAQ</h2>

          <div className="faq-grid">
            <details className="faq-item">
              <summary>Do you cook daily?</summary>
              <p>Yes, we cook fresh every morning for the day’s orders.</p>
            </details>

            <details className="faq-item">
              <summary>How can I place an order?</summary>
              <p>You can order from Products page, call us, or chat on Viber.</p>
            </details>

            <details className="faq-item">
              <summary>Do you offer delivery?</summary>
              <p>Yes, delivery fee is 1,500 kyat (Mandalay).</p>
            </details>

            <details className="faq-item">
              <summary>Do you accept bulk or party orders?</summary>
              <p>Yes, please order in advance (1 day+) for bulk/party orders.</p>
            </details>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-col">
            <h3>Contact Us</h3>
            <p><MdLocationOn /> Mandalay, Pyigyitagon Township</p>
            <p><FaPhoneAlt /> 09 778 003 165</p>
            <p><MdAccessTime /> 9:00 AM - 7:00 PM</p>
            <p><MdAccessTime /> Kitchen: 6:00 AM - 7:00 PM</p>
          </div>

          <div className="footer-col">
            <h3>Follow & Order From Us</h3>

            <div className="social-icons">
              <a
                className="social-circle"
                href="https://facebook.com/momkitchen11"
                target="_blank"
                rel="noreferrer"
                aria-label="Mom's Kitchen Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                className="social-circle"
                href="https://www.tiktok.com/@moms.kitchen345?_r=1"
                target="_blank"
                rel="noreferrer"
                aria-label="Mom's Kitchen TikTok"
              >
                <FaTiktok />
              </a>

              <a
                className="social-circle"
                href="sms:09778003165"
                aria-label="Message Mom's Kitchen"
              >
                <BsFillChatDotsFill />
              </a>
            </div>

            <div className="footer-buttons">
              <a className="btn ghost" href="tel:09778003165">
                Call Now
              </a>

              <a className="btn primary" href="viber://chat?number=%2B959778003165">
                Order on Viber
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;

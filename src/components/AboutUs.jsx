import "./AboutUs.css";
import Nav from "./Nav"
import { FaHeart, FaFacebookF, FaTiktok, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn, MdAccessTime, MdCleanHands } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { GiMeal } from "react-icons/gi";

import Lunchbox1 from "../images/lunchbox1.png";     // top right lunchbox
import Lunchbox2 from "../images/lunchbox2.png";  // story card lunchbox
import Lunchbox3 from "../images/lunchbox3.png";        // busy moms illustration

export default function AboutUs() {
  return (

    <div className="about-page">
      <Nav />
      <div className="about-shell">

        {/* HERO */}
        <section className="hero">
          <div className="hero-left">
            <h1 className="hero-title">Our Story</h1>

            <p className="hero-subtitle">
              Where every lunch box <FaHeart className="heart" /> <br />
              tastes like mommy&apos;s love
            </p>

            <a className="btn btn-primary"
              href="viber://chat?number=%2B959778003165">Order Mommy Food</a>
          </div>

          <div className="hero-right">
            <img className="hero-img" src={Lunchbox1} alt="Lunch box" />
          </div>
        </section>

        {/* STORY CARD */}
        <section className="story-card">
          <div className="story-left">
            <h2 className="story-title">
              <FaHeart className="heart" /> Mom&apos;s Kitchen was born from one simple feeling —{" "}
              <span>the love of a mother&apos;s cooking.</span>
            </h2>

            <div className="story-lines">
              <p>We believe that food is not just something to eat.</p>
              <p>It is a memory.</p>
              <p>It is comfort.</p>
              <p>It is love packed in a lunch box.</p>
            </div>

            <p className="story-paragraph">
              Every meal from Mom&apos;s Kitchen is cooked with the same care a mother gives to her own children.
              When you open our lunch box, we want you to feel happy, safe, and satisfied — eating{" "}
              <b>real mommy food</b>.
            </p>
          </div>

          <div className="story-right">
            <img className="story-img" src={Lunchbox2} alt="Lunch box" />
          </div>
        </section>

        {/* BUSY MOMS */}
        <section className="busy">
          <div className="busy-left">
            <img className="busy-img" src={Lunchbox3} alt="Mom and kid" />
          </div>

          <div className="busy-right">
            <h2 className="busy-title">For Busy Moms Who Want True Mommy Taste</h2>

            <p className="busy-text">
              We know not every mom has time to cook every day. If you&apos;re busy, let Mom&apos;s Kitchen help.
              We&apos;ll cook delicious meals for your kids, freshly cooked with love — just like you&apos;d make it.
            </p>

            <div className="feature-row">
              <div className="feature-card">
                <GiMeal className="feature-icon" />
                <div>
                  <p className="feature-title">Freshly cooked</p>
                  <p className="feature-sub">Tastes like mom&apos;s cooking</p>
                </div>
              </div>

              <div className="feature-card">
                <FaHeart className="feature-icon" />
                <div>
                  <p className="feature-title">Mommy taste</p>
                  <p className="feature-sub">Always fresh, never old</p>
                </div>
              </div>

              <div className="feature-card">
                <MdCleanHands className="feature-icon" />
                <div>
                  <p className="feature-title">Clean & careful</p>
                  <p className="feature-sub">Balanced & nutritious</p>
                </div>
              </div>

              <div className="feature-card">
                <FaHeart className="feature-icon" />
                <div>
                  <p className="feature-title">Cooked with Love</p>
                  <p className="feature-sub">Prepared with heart</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-col">
            <h3>Contact Us</h3>
            <p><MdLocationOn /> Mandalay, Pyigyitagon Township</p>
            <p><FaPhoneAlt /> 09 778 003 165</p>
            <p><MdAccessTime /> 9:00 AM - 7:00 PM</p>
            <p><MdAccessTime /> Kitchen: 6:00 AM - 7:00 PM</p>
          </div>

          <div className="footer-col footer-right">
            <h3>Follow & Order From Us</h3>

            <div className="social-icons">
              <a
                className="social-circle"
                href="https://facebook.com/momkitchen11"
                target="_blank"
                rel="noreferrer"
                aria-label="Mom's Kitchen Facebook"
              ><FaFacebookF /></a>

              <a
                className="social-circle"
                href="https://www.tiktok.com/@moms.kitchen345?_r=1"
                target="_blank"
                rel="noreferrer"
                aria-label="Mom's Kitchen TikTok"
              ><FaTiktok /></a>
              <a
                className="social-circle"
                href="sms:09778003165"
                aria-label="Message Mom's Kitchen"><BsFillChatDotsFill /></a>
            </div>

            <div className="footer-buttons">
              <a className="btn btn-ghost" href="tel:09778003165">
                Call Now
              </a>

              <a className="btn btn-primary" href="viber://chat?number=%2B959778003165">
                Order on Viber
              </a>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

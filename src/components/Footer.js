import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can usubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              className="footer-input"
              placeholder="Your email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About us</h2>
            <Link to="/sing-up">How it works</Link>
            <Link to="/">Testemonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Term of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact us</h2>

            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorship</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Video</h2>

            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>

            <Link to="/">Instagram</Link>
            <Link to="/">facebook</Link>
            <Link to="/">YourTube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TRVL <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <small className="website-rigths">TRVI ©2022</small>
          <div className="social-icons">
            <Link
              to="/"
              className="social-icon-link facebook"
              target="_blank"
              aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              to="/"
              className="social-icon-link instagram"
              target="_blank"
              aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              to="/"
              className="social-icon-link linkedin"
              target="_blank"
              aria-label="Linkedin">
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

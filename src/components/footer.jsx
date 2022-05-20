import "../styling/footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer id="footer">
      <div id="footer-container">
        <Link to="/">
          <img
            id="footer-logo"
            src={require("../images/infokidz-academy-logo-black.jpg")}
            alt="Infokidz Academy Logo"
          />
        </Link>

        <div id="footer-wrapper">
          <div id="phone-div">
            <a id="phone-number" href="tel:780-966-7700">
              780-966-7700
            </a>
          </div>

          <div id="social-medias">
            <a
              href="https://www.facebook.com/infokidzacademy/"
              id="fb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://twitter.com/InfokidzAcademy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>

          <div id="terms-div">
            <Link id="policies" to="policies">
              Terms of Service
            </Link>
          </div>
          <div id="privacy-div">
            <Link id="privacy" to="policies">
              Privacy Policy
            </Link>
          </div>
        </div>

        <h2 id="copyright">Copyright © 2022 Infokidz Academy Inc.</h2>
      </div>
    </footer>
  );
}

export default Footer;

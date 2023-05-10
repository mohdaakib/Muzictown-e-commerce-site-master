import React from "react";
import "../css/footer.css";
import footerImg from "../assets/shared/desktop/image-best-gear.jpg";
import { Link } from "react-router-dom";
import { ImFacebook2 } from "react-icons/im";
import { BsTwitter, BsInstagram } from "react-icons/bs";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div id="footerPart">
        <div className="companyDetails">
          <div className="footerImg">
            <img src={footerImg} alt="fImage" />
          </div>
          <div className="details">
            <p className="fp1">
              BRINGING YOU THE <span style={{ color: "coral" }}>BEST</span>{" "}
              AUDIO GEAR
            </p>
            <p className="fp2">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
        <div style={{ backgroundColor: "rgb(25,25,25)" }}>
          <div className="footer">
            <hr />
            <div className="f1">
              <p
                className="fLogo"
                style={{ fontFamily: `'PT Serif','serif'` }}
                onClick={scrollToTop}
              >
                <Link to={"/"} onClick={scrollToTop}>
                  MuzicTown
                </Link>
              </p>

              <div className="fList">
                <p className="home">
                  <Link
                    to="/"
                    style={{ textDecoration: "none" }}
                    onClick={scrollToTop}
                  >
                    home
                  </Link>
                </p>
                <p className="headphones">
                  <Link
                    to="/headphones"
                    style={{ textDecoration: "none" }}
                    onClick={scrollToTop}
                  >
                    headphones
                  </Link>
                </p>
                <p className="speakers">
                  <Link
                    to={"/speakers"}
                    style={{ textDecoration: "none" }}
                    onClick={scrollToTop}
                  >
                    speakers
                  </Link>
                </p>
                <p className="earphones">
                  <Link
                    to={"/earphones"}
                    style={{ textDecoration: "none" }}
                    onClick={scrollToTop}
                  >
                    earphones
                  </Link>
                </p>
              </div>
            </div>

            <div className="f2">
              <p className="fp3">
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility - we’re open 7 days a week.
              </p>
              <div className="socialIcons">
                <a
                  href={"https://www.facebook.com/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImFacebook2 className="fb" />
                </a>
                <a
                  href={"https://twitter.com/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsTwitter className="twitter" />
                </a>
                <a
                  href={"https://www.instagram.com/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram className="insta" />
                </a>
              </div>
            </div>

            <div className="f3">
              <p className="copyright">
                Copyright 2023. MuzicTown Private Limited. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

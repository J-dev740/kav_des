/* eslint-disable @next/next/no-img-element */
import React from "react";
import appData from '../../data/app.json'

const FooterArch = () => {
  return (
    <footer className="sub-bg">
      <div className="container">
        <div className="row">
        <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                {/* <img src={appData.lightLogo} alt="" /> */}
                KAVYAM-DESIGNS
              </div>
              <div className="social">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>

            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Offical Address</h6>
                    <p>POOVATHINGAL TOWER
                        KADAVIL LANE

                        CHEMBUKKAVU
                        THRISSUR, KERALA, INDIA
</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>josnaraphaelp@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>9744983398.04872332211</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Recent News</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <img src="/img/blog/1.jpg" alt="" />
                  </div>
                  <div className="sm-post">
                    <p>
                      The Start-Up Ultimate Guide to Make Your WordPress
                      Journal.
                    </p>
                    <span className="date main-color">14 sep 2022</span>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <img src="/img/blog/2.jpg" alt="" />
                  </div>
                  <div className="sm-post">
                    <p>
                      The Start-Up Ultimate Guide to Make Your WordPress
                      Journal.
                    </p>
                    <span className="date main-color">14 sep 2022</span>
                  </div>
                </li>

              </ul>
            </div>
          </div> */}

        </div>
      </div>
    </footer>
  );
};

export default FooterArch;

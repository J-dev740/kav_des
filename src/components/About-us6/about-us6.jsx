import React from 'react'
import Link from 'next/link'

const AboutUs6 = () => {
    return (
      <section id="about" className="about-ar section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 valign">
              <div className="img">
                <div
                  className="bg-img bg-fixed hero-bg"
                  style={{ backgroundImage: "url(/img/arch/hero.jpg)" }}
                ></div>
                <div className="exp valign text-center">
                  <div className="full-width">
                    <h2
                      className="bg-img bg-fixed"
                      style={{ backgroundImage: "url(/img/arch/hero.jpg)" }}
                    >
                      30
                    </h2>
                    <p>Years Of Experience</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 valign">
              <div className="content">
                <h6 className="sub-title main-color ls10 text-u">About Us</h6>
                <h3>Best Designers Architectures for You.</h3>
                <p>
                We believe that successful architecture is best achieved through
                effective partnerships of all project stakeholders with the common goal

                of optimizing functional and market viability through creative
                architectural design.


                We work together with our customers and function as a collaborative

                member of their project teams. We are dedicated to understanding our
                clients specific economic and functional goals. We adopt them as our

                own, and work together with them towards implementation.

                </p>

                <Link
                  // href={`/about/about-dark`}
                  href="#"
                >
                  <a className="butn bord mt-30">
                    <span>About Us</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default AboutUs6
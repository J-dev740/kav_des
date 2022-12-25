import React from 'react'
import Link from 'next/link'
// import { Head } from 'next/document';
import Collapsible from 'react-collapsible';

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

                <Collapsible trigger= 'About Us'
                 className="butn bord mt-30 text-center" 
                >
                                  <p>
                  KAVYAM DESIGNS was established in Thrissur, Kerala in 2002. In the
                  ensuing 16 years the firm has grown to serve an increasingly diverse and
                  extensive clientele in both the private and public sectors. Historically,
                  work focused on residential design and construction; Gradually, Public
                  Building design and construction came to represent the bulk of the
                  firms work; as a result, KAVYAM DESIGNS has designed numerous public buildings across the country.
                  </p>
                  <br/>
                  <p>
                  Kavyam Designs work is increasingly focused in the Kerala Region. The
                  area offers a positive high-tech and service sector economy, positive
                  residential growth . Kavyam now employs seventeen full-time staff and
                  continues to enjoy an increasing presence in the Region.
                  </p>
                  <br/>
                  <p>
                  The Firm now is the consultant architect to Ulccs which is the biggest
                  registered contracting society under Government of Kerala.
                  The bulk of the Firms work in the last few years has been varied but
                  predominantly focused on commercial office, retail, Public and the
                  industrial sectors; often with a focus on Construction Management and
                  Design/Build Project Delivery Methodologies.<br/>
                  </p>
                  <br/>
                  <p>
                  <br/>Most recently, and as the practise continues to grow, Its Increasing
                  participation in Public Sector Projects is a recent trend buoying Kavyam
                  Designs growth
                  Recent staff additions have allowed Kavyam Deigns to now offer clients
                  Interior Design and Office Space Planning services. As well as our
                  traditional architectural services, Kavyam can prepare pre-design
                  feasibility studies, cost analyses, and site location evaluations. Kavyam
                  Designs also assists Clients in preparing Design/ Build and/or
                  Construction Management Tender packages and providing them with
                  related construction administration


                </p>
                </Collapsible>
{/* 
                <Link
                  // href={`/about/about-dark`}
                  href="#"
                  
                >  */}
                  {/* <a href='#demor'  className="butn bord mt-30" data-bs-toggle="collapse">
                    <span>About Us</span>

                  </a> */}
                 {/* </Link> */}

              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default AboutUs6
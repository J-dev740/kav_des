import React from "react";
import Link from "next/link";

const Services6 = () => {
  return (
    <section className="serv-arch">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/s1.jpg)" }}
          >
            <h6 className="numb">01</h6>
            <h5>Architecture</h5>
            <p>
            The rich Heritage Architecture of Kerala lends us an
            opportunity to be a part of Conservation Activities as
            Kavyam Design provides architectural

            well .
            conservation
            rehabilitation, restoration and reconstruction

            services
            including
            preservation,

            </p>
            {/* <Link href="/about/about-dark">
              <a className="custom-font more main-color">Read More</a>
            </Link> */}
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/s2.jpg)" }}
          >
            <h6 className="numb">02</h6>
            <h5>Interior Design</h5>
            <p>
            Kavyam Designs views interior design as an integral
            part of our design process in terms of aesthetic
            appeal, program functionality, and budget analysis.

            Recent staff additions have allowed the firm to
            successfully provide this service to clients on small,
            medium and large scale projects

            </p>
            {/* <Link href="/about/about-dark">
              <a className="custom-font more main-color">Read More</a>
            </Link> */}
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/s3.jpg)" }}
          >
            <h6 className="numb">03</h6>
            <h5>MasterPlanning</h5>
            <p>
            Building(s) design usually commences with the Site
              Plan Process. Design Development continues
              primarily through three-dimensional imaging and
              rendering software ensuring consistency, accuracy,
              and flexibility throughout the process and assures a

              smooth transition into working drawings
              preparation. It also allows the client to visualize the
              building accurately at all stages of the project. This
              comprehensive design evolution towards innovation

              excellence and building performance is the basis of
              the Firm's design philosophy. Kavyam Design ensures
              that the integrity of the design is maintained by
              rigorously monitoring of the construction process.

            </p>
            {/* <Link href="/about/about-dark">
              <a className="custom-font more main-color">Read More</a>
            </Link> */}
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/s4.jpg)" }}
          >
            <h6 className="numb">04</h6>
            <h5>Furniture Design</h5>
            <p>
              We provide all equipment and services, etc and ensure a safe and
              secure project site.
            </p>
            {/* <Link href="/about/about-dark">
              <a className="custom-font more main-color">Read More</a>
            </Link> */}
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/s5.jpg)" }}
          >
            <h6 className="numb">05</h6>
            <h5>Site Planning</h5>
            <p>
            Site plans are prepared from initial concept through

to the finished product. Building(s) locations are

carefully monitored throughout the design process to
optimize vehicular and pedestrian traffic patterns

while balancing and enhancing urban design aspects
such as landscaped and open space opportunities. An
understanding and appreciation of site context

working in conjunction with client and Municipal
needs and programmes is consistent in all of our site
plans.

            </p>
            {/* <Link href="/about/about-dark">
              <a className="custom-font more main-color">Read More</a>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services6;

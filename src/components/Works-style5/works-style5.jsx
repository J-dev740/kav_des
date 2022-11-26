/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksStyle5 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  const zoom=(e)=>{
    var initial=e.target.width;
    e.target.width=(initial+100)+"px";

  }
  return (
    <section className="portfolio po-arch section-padding pb-70" id="po-arch">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h2 className="wow fadeIn" data-wow-delay=".3s">
                Projects
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter custom-font wow fadeIn" data-wow-delay=".5s">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".brand">Interior</span>
              <span data-filter=".web">Architecture</span>
              <span data-filter=".graphic">Residential</span>
              <span data-filter=".graphic1">transports</span>
              <span data-filter=".graphic2">resort</span>
            </div>
          </div>

          <div className="gallery full-width">
            <div
              className="col-md-4 items graphic lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/19.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>SHAHEER HOUSE</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items graphic lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/20.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>NADEERA HOUSE</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items graphic lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/21.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>PRIVATE HOUSE</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items graphic lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/22.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>JOJU HOUSE</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items graphic lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/23.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>JISAR HOUSE</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items graphic lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/24.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>PRIVATE HOUSE</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>
            {/* <div
              className="col-md-4 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/arch/work/2.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>The Concept</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div> */}

            <div
              className="col-md-4 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/26.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>Private House</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/27.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>HAMLET PUTHUKADD</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/28.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>CAFE EXTERIOR DESIGN</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/29.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>NS AYURVEDA HOSP.</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/30.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>COMPLEX EXTERIOR</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>

            <div
              className="col-md-4 items  graphic wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/25.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>PRIVATE HOUSE</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>


            <div
              className="col-md-4 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <span 
                className="imago wow"
                // onClick={zoom}
                >
                  <img src="/img/arch/work/2.jpg" alt="image" />
                </span>
                {/* <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow" >
                    <img src="/img/arch/work/2.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link> */}
              </div>
              <div className="cont">
                <h5>DINNING</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>

            <div
              className="col-md-4 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/3.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>SITTING INTERIOR</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/4.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>BED ROOM</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/5.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>COUCH AREA</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/6.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>HALL AREA</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/7.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>SITTING SPACE</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>
      
            {/* //extra experimental stuff */}
            <div
              className="col-md-4 items graphic1 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/14.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>KUNNAMKULAM BUS TERMINAL</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items graphic1 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/15.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>KUNNAMKULAM BUS TERMINAL</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items graphic1 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/16.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>KUNNAMKULAM BUS TERMINAL</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items graphic1 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/17.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>ROUND WALKOVER</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items graphic1 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/18.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>TRIPRAYAR HUB</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items graphic2 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/8.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>RIVULET</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items graphic2 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/9.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>RIVULET SITE</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items graphic2 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/10.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>BLANKET EXTERIOR</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items graphic2 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/11.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>MADAVOORPARA RESTAURANT</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items graphic2 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/12.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>BLANKET POOL</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items graphic2 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/12.1.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>BLANKET PRESIDENTIAL</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items graphic2 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/12.2.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>CAMELLIA INTERIOR</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items graphic2 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="#po-arch">
                  <a className="imago wow">
                    <img src="/img/arch/work/13.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>RIVULET LOCATION</h5>
                <span className="tags main-color custom-font">
Kavyam-Designs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle5;

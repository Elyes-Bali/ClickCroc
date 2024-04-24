import React from "react";

const About = () => {
  const isAdmin = localStorage.getItem("isAdmin");
  const token = localStorage.getItem("token");
  return (
    <div>
      <section>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img src="/images/gamer.jpg" alt="About" className="w-75 mt-5" />
            </div>
            <div className="col-md-6">
              <br />
              <br />
              <br />
              <br />
              <h3 className="fs-5">Product Of The Year</h3>
              <h1 className="display-6">
                <b>PC Gamer RAPTOR</b>
              </h1>
              <hr />
              <p className="lead mb-4">
                Processeur - AMD Ryzen 3 3200G ram Barrette mémoire 8 Go ssd SSD
                HP EX900 PCIe3.0x4 NVMe 1.3 250Go gpu Radeon Vega 7 Graphics
              </p>
              {/* <a
                href={`#${id1}`}
                className="btn btn-primary rounded-pill px-4 py-2"
              >
                Our Services
              </a> */}
              {!isAdmin && token && (
                <a
                  href="/market"
                  className="btn btn-dark rounded-pill px-4 py-2 ms-2"
                >
                  Explore Now
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;

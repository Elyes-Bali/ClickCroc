import React from "react";
import Slider from "../slider/Slider";
import "./Home.css";
import About from "../about/About";
import Contact from "../contact/Contact";
import Services from "../services/Services";

import Banner from "../slider/Banner";
import BannerBottom from "../slider/BannerBottom";
import Sale from "../screens/Sale/Sale";
import Footer from "../screens/Footer/Footer";

const Home = () => {
  const isAdmin = localStorage.getItem("isAdmin");
  const token = localStorage.getItem("token");
  return (
    <div className="home ">
  <section>
    <div className="div1 row ">
      <div className="div2 col-md-6 ">
        <div className="container txte justify-content-center leadder">
          <h1 className="lead text-center fs-1 mb-5 text-black ">
            {" "}
            BEST SHOPPING WEBSITE{" "}
          </h1>
          <h2>
            <strong>
              Everything in your hands to experience a new way of shopping{" "}
            </strong>
          </h2>
          <a className="btn btn-info mb-4 mt-5" href="/market">
            View More
          </a>
        </div>
      </div>
      <div className="div3 col-md-6"></div>
    </div>
    <div className="w-full mx-auto">
      <Banner/>
      <BannerBottom/>
    </div>
    <Sale/>
    <div className=" about">
      <About id="contact" id1="services" />
    </div>
    <div className="contact">
      {!isAdmin && token && <Contact id="contact" />}
    </div>
  </section>
  <div className="homeft">
  <Footer />
  </div>
</div>

  );
};

export default Home;

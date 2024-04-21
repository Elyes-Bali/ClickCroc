import React from "react";
import { Link } from "react-router-dom";
import {
  saleImgOne,
  saleImgTwo,
  saleImgThree,
} from "../../../assets/images/index";
import Image from "../../designLayouts/Image";
import ShopNow from "../../designLayouts/buttons/ShopNow";
import "./Sale.css";
const Sale = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      
      <section className="first">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
            <div className="aspect-w-4 aspect-h-3 w-full mb-4">
          <Image className="h-full w-full object-cover" imgSrc={saleImgOne} />
        </div>
            </div>
            <div className="col-md-6">
            <div className="mx-8">
            <h1 className="title1 md:text-5xl lg:text-5xl mb-6"><b>
              Imprimante sales
              </b>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6">
              Up to{" "}
              <span className="text-4xl md:text-5xl lg:text-5xl font-bold">
                30%
              </span>{" "}
              sales for all impriamnte{" "}
            </p>
            <div className="mb-8">
              <a className="btn btn-dark " href="/market">Explore</a>
            </div>
          </div>
            </div>
          </div>
        </div>
      </section>

      <section className="second">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <div className="w-full md:w-1/2 h-auto">
                <Link to="/market">
                  <Image
                    className="h-full w-full object-cover"
                    imgSrc={saleImgThree}
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-6">
             
              <div className="w-full md:w-1/2 h-auto">
                <Link to="/market">
                  <Image
                    className="h-full w-full object-cover"
                    imgSrc={saleImgTwo}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row  md:w-2/3 lg:w-1/2 gap-4 lg:gap-10"></div>
    </div>
  );
};

export default Sale;

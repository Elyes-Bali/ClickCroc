import React from "react";
import "./Banner.css"
const BannerBottom = () => {
  return (
    <div className="steps py-5 bg-white">
      <div className="container px-3">
        <div className="row">
          <div className="col-12 col-md-4 d-flex align-items-begin my-4 my-md-2">
            <div className="iclg">
              <img className="mr-4" src="./images/simple.jpg"></img>
            </div>
            &nbsp;
            <div>
              <h3 className="display-9 h5 font-weight-semibold text-dark">
                Simple
              </h3>
              <p className="m-0">
                Easy to find everything
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4 d-flex align-items-begin my-4 my-md-2">
            <div className="iclg">
              <img className="mr-4" src="./images/rapide.jpg"></img>
            </div>
            &nbsp;
            <div>
              <h3 className="display-9 h5 font-weight-semibold text-dark">
                Fast
              </h3>
              <p className="m-0">
                In a matter of minutes, you'll have a dozen Choices.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex align-items-begin my-4 my-md-2">
            <div className="iclg2">
              <img width={80} className="mr-4" src="./images/free.jpg"></img>
            </div>
            &nbsp;
            <div>
              <h3 className="display-9 h5 font-weight-semibold text-dark">
                Free
              </h3>
              <p className="m-0">
                Choose the ideal Product for yourself, without obligation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;

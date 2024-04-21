import React from "react";



const Services = ({id1}) => {
  return (
    <div id={id1}>
      <section >
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fd-5 text-center mb-0">Our Services</h3>
              <h1 className="display-6 text-center mb-4">
                Our <b>Awesome</b> Services
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3">
                
                <div className="card-body text-center">
                <i class="fa fa-plus-circle fa-4x mb-4 text-primary" aria-hidden="true"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Medical Advices</h5>
                  <p className="card-text lead">
                  We provide the best professional medical advice to help take care of your child
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                
                <div className="card-body text-center">
                <i class="fa fa-clock-o fa-4x mb-4 text-primary" aria-hidden="true"></i>
                  
                  <h5 className="card-title mb-3 fs-4 fw-bold">Injection Time</h5>
                  <p className="card-text lead">
                  We will remind you when to inject your child
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                
                <div className="card-body text-center">
                <i class="fa fa-ambulance fa-4x mb-4 text-primary" aria-hidden="true"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Medical Care</h5>
                  <p className="card-text lead">
                  Provide you with Medical Care anytime you need 
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 3 down */}

        

        </div>
      </section>
      
    </div>
  );
};

export default Services;

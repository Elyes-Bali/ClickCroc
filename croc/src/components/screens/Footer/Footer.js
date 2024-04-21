import React from 'react';

const Footer = () => {
  return (
    <div>
     
      <footer id="footer-jsx" className="mt-5 pt-4 pb-4 bg-light">
        
        <div className="container">
          
          <div className="row">
          <hr/>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4 mb-lg-0">
              <h4 className="footer_title"><b>More about C&C Shop</b></h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint ab ullam, numquam nesciunt in.
              </p>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 mb-4 mb-lg-0 mt-5">
              <h4 className="footer_title"><b>Shop</b></h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Accessories</a>
                </li>
                <li>
                  <a href="#">Clothes</a>
                </li>
                <li>
                  <a href="#">Electronics</a>
                </li>
                <li>
                  <a href="#">Home appliances</a>
                </li>
                <li>
                  <a href="#">New Arrivals</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 mb-4 mb-lg-0 mt-4">
              <h4 className="footer_title"><b>Your account</b></h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Profile</a>
                </li>
                <li>
                  <a href="#">Orders</a>
                </li>
                <li>
                  <a href="#">Addresses</a>
                </li>
                <li>
                  <a href="#">Account Details</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 mt-5">
              <h4 className="footer_title mt-3"><b>Subscribe to our newsletter</b></h4>
              <p>
                A at pellentesque et mattis porta enim elementum.
              </p>
              <div className="subscribe_form">
                <input
                  type="email"
                  className="email_input form-control mb-2"
                  placeholder="Insert your email..."
                />
                <button type="button" className="btn btn-primary">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-lg-6 col-md-6 col-sm-6 text-center">
              <div className="payment_method">
                {/* <img
                  className="img-fluid d-inline-block"
                  src="/images/payment.png"
                  alt="Paypal"
                /> */}
              </div>
              <div className="text-center mt-3">
                © 2024 C&C Shop. All rights reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

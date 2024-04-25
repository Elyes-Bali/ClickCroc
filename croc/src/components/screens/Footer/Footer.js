import React from 'react';
import { NavLink } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
     
      <footer id="footer-jsx" className="mt-5 pt-4 pb-4 bg-light">
        
        <div className="container">
          
          <div className="row">
          <hr/>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4 mb-lg-0 mt-2">
              <h4 className="footer_title"><b>More about C&C Shop</b></h4>
              <p>
              “Clic & Croc” invites you to explore a world of flavors and discoveries.

              </p>
              <ul className="list-unstyled d-flex mt-3">
                <li className="ms-3">
                  <NavLink className="" target="_blank" href="https://www.facebook.com">
                    <i className="fa fa-facebook fa-2x"></i>
                  </NavLink>
                </li>
                <li className="ms-3">
                  <NavLink className="" target="_blank" href="https://www.instagram.com">
                    <i className="fa fa-instagram fa-2x"></i>
                  </NavLink>
                </li>
                <li className="ms-3">
                  <NavLink className="" target="_blank" href="https://www.twitter.com">
                    <i className="fa fa-twitter fa-2x"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
            
            <div className="col-lg-2 col-md-6 col-sm-6 mb-4 mb-lg-0 mt-4">
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
            <div className="col-lg-2 col-md-6 col-sm-6 mb-4 mb-lg-0 ">
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
            <div className="col-lg-4 col-md-6 col-sm-6 mt-4">
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
                <button type="button" className="btn btn-dark">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="row justify-content-center ">
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

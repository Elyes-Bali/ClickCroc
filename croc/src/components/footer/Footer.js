import React from "react";
import { NavLink } from "react-bootstrap";
import "./Footer.css"
const Footer = () => {
  return (
    <div>
      <footer className="footer text-black">
        <div className=" ftt">
          <footer className="py-1">
            <div className="">
              <div className="col-3">
                <h4>CLIC & CROC ÉQUIPE</h4>
              </div>
              
             
              
            </div>
            <div className="d-flex justify-content-between pt-1 mt-1 border-top">
              <p>© 2024 Company, Inc. Tous droits réservés.</p>
              <ul className="list-unstyled d-flex">
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
          </footer>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

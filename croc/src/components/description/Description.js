import React from "react";
import Footer from "../screens/Footer/Footer";

const Description = () => {
  return (
    <div>
      <section>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img src="/images/img111.jpg" alt="About" className="w-75 mt-5" />
            </div>
            <div className="col-md-6">
              <h3 className="fs-5">About Us</h3>
              <h1 className="display-6">
                Who <b>We</b> Are
              </h1>
              <hr />
              <p className="lead mb-4">
                “Clic & Croc” invites you to explore a world of flavors and
                discoveries. Thanks to our collaborative approach, each user can
                actively contribute to enriching our platform, thus promoting a
                personalized and enriching experience for everyone. Prepare to
                experience an unprecedented gastronomic adventure with “Clic &
                Croc”.
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Description;

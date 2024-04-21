import React from "react";
import "./Info.css";
import Footer from "../footer/Footer";

const Info = () => {
  return (
    <div className="infodiv mdd">
      <section>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="container  shadow col-md-4">
              <div className="free ctr">
                <h6 className="display-5 h5 fint-weight-semibold mb-2 text-black">
                  Learn about vaccine
                </h6>
                <p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p>
              </div>
              <img src="/images/inject1.jpg" />
              <p>&nbsp;</p>  <p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p><img src="/images/shield.jpeg" />
            </div>
            <div className="col-md-8 pl-5">
              <div className="col-md-4 col-lg-9">
                <div className="flex  row">
                  <h1><b> ALL VACCINES</b></h1>
                  <h2>Baby birth vaccine</h2>
                  <p>
                    <strong>Tuberculosis vaccine:</strong> 1 single dose as soon
                    as possible possible after birth. Are no longer indicated in
                    the following this 1st injection nor the practice of IDR
                    with tuberculin nor the BCG booster
                  </p>
                  <p>
                    <strong>Hepatitis B vaccine:</strong> administered during
                    the 24 hours following birth regardless of the result of the
                    maternal hepatitis B serology
                  </p>
                  <h2>2nd month baby vaccine</h2>
                  <p>
                    1st injection of Pentavalent vaccine which includes
                    hepatitis vaccine B, DTP (diphtheria, tetanus, pertussis
                    vaccine) and Hib vaccine
                  </p>
                  <p>1st dose of poliomyelitis vaccine (injectable)</p>
                  <p>
                    1st dose of the pneumococcal vaccine (Prevenar 13 or
                    synflorix): this new vaccine adding to the list can prevent
                    certain viral inflammations and inflammations causing otitis
                    in the Babe. It reduces the consumption of antibiotics,
                    therefore, it fights against increased sensitivity to
                    antibiotics.
                  </p>
                  <h2>3rd month baby vaccine</h2>
                  <div className="pl-5">
                  <p>&nbsp;</p>
                    <ul>
                      <li>2nd dose of the pentavalent vaccine</li>
                      <li>2nd dose of poliomyelitis vaccine (injectable)</li>
                    </ul>
                    <h2>Vaccine in the 4th month of baby</h2>
                    <ul>
                      <li>
                        2nd dose of pneumococcal vaccine
                        <strong>(Prevenar 13 or synflorix)</strong>
                      </li>
                    </ul>
                    <h2>6 month baby vaccine</h2>
                    <ul>
                      <li>3rd dose of the pentavalent vaccine</li>
                      <li>3rd dose of the poliomyelitis vaccine (oral)</li>
                    </ul>
                    <h2>Vaccine at the 11th month of baby</h2>
                    <ul>
                      <li>
                        3rd dose of the pneumococcal vaccine (Prevenar 13 or
                        synflorix)
                      </li>
                    </ul>
                    <h2>Vaccine at the 12th month of baby</h2>
                    <ul>
                      <li>1st dose of combined measles-rubella vaccine</li>
                    </ul>
                    <h2>Vaccine at the 18th month of baby</h2>
                    <ul>
                      <li>Booster with DTP vaccines</li>
                      <li>Booster vaccine against poliomyelitis (oral)</li>
                      <li>Booster vaccine against measles and rubella</li>
                    </ul>
                  </div>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>
                    <b>Pourquoi vacciner votre enfant?</b>
                  </p>

                  <b>Pour éviter des risques importants</b>
                  <br />

                  <p>
                    Certaines maladies peuvent provoquer des complications et
                    des séquelles, certaines peuvent même entraîner la mort.
                    Alors que ces maladies peuvent être évitées grâce à la
                    vaccination.
                  </p>

                  <p> on devait donner quelques exemples :</p>

                  <p>
                    <b> La varicelle</b> : c’est une maladie qui est assez
                    fréquente. Elle est très contagieuse et se répand
                    facilement. Elle est en général sans danger, mais dans
                    certains cas, elle peut déboucher sur des complications
                    comme les otites et les pneumonies.
                  </p>
                  <p>
                    <b> méningite</b> : c’est une maladie grave qui peut
                    entraîner des dommages permanents au cerveau, et la mort
                    dans 10 % à 15 % des cas.
                  </p>
                  <p>
                    <b> rougeole</b> : c’est également une maladie très
                    contagieuse qui peut être assez bénigne. Mais dans certains
                    cas, elle peut être beaucoup plus grave et peut conduire à
                    des complications surtout chez certaines catégories de la
                    population : femmes enceintes, les très jeunes enfants ou
                    les personnes ayant un système immunitaire affaibli.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Info;

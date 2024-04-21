import React from "react";
import "./Advices.css";
import Footer from "../footer/Footer";

const Advices = () => {
  return (
    <div className="mdd">
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white"></h1>

              <h1 className="lead para text-center display-4 mb-3  text-white">
                Here is some Advices to help take care of a baby
              </h1>

              <div className="buttons d-flex justify-content-center">
                <div className="App"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h1 className="display-6 text-center mb-4">
                Our <b>Advice</b> center
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                    Help your child follow an object
                  </h5>
                  <p className="card-text lead">
                    When he sees it, move it slowly from side to side and up and
                    down.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                  &nbsp; &nbsp; &nbsp; Do skin to skin contact
                  </h5>
                  <p className="card-text lead">
                  Feeling, hearing and smelling your presence should provide your baby with a sense of calm and security.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                    Gently soothe, stroke and hold your child
                  </h5>
                  <p className="card-text lead">
                    You will see your baby comforted, happy to be held and
                    cuddled.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3 down */}
          <div className="row mt-5">
            <div className="col-12">
            <hr className="w-25 mx-auto" />
              <h1 className="display-6 text-center mb-4 mt-3">
                <b>Did you know?</b> 
              </h1>
              <h1 className="display-4 text-center mb-3">Within a few days, babies can start smiling when people smile at them.</h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                    Talk to your baby in soft tones and ‘baby talk’
                  </h5>
                  <p className="card-text lead">
                    Both the father, mother and other caregivers should
                    communicate with the newborn.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                    Look into your baby’s eyes and smile in response to his
                    smiles
                  </h5>
                  <p className="card-text lead">
                    You should see your baby react positively to your facial
                    expressions, movements and gestures
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                    {" "}
                    Provide ways for your baby to see, hear, move freely and
                    touch you
                  </h5>
                  <p className="card-text lead">
                    Slowly your baby will learn how to control her movements.
                  </p>
                </div>
              </div>
            </div>
          </div>


            {/* 3 down */}
            <div className="row mt-5">
            <div className="col-12">
            <hr className="w-25 mx-auto" />
              <h1 className="display-6 text-center mb-4 mt-3">
                <b>Did you know?</b> 
              </h1>
              <h1 className="display-5 text-center mb-3">1-3 month old babies see things best when they are between 20-30 cm away. By 3 months, babies have a greater range of vision.</h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>

            <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                  Smile and laugh with your child
                  </h5>
                  <p className="card-text lead">
                  You should soon see your baby smile in return.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                  Encourage your child to reach for a safe object
                  </h5>
                  <p className="card-text lead">
                  Try something like a plastic cup. You should see her try to grab or touch it.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                    {" "}
                    Play a game with your baby
                  </h5>
                  <p className="card-text lead">
                  Place her on her stomach and slowly walk your fingers toward her, make your fingers creep slowly or quickly
                  </p>
                </div>
              </div>
            </div>
          </div>

            {/* 3 down */}
            <div className="row mt-5">
            <div className="col-12">
            <hr className="w-25 mx-auto" />
              <h1 className="display-6 text-center mb-4 mt-3">
                <b>Did you know?</b> 
              </h1>
              <h1 className="display-5 text-center mb-3">At 6 months, your baby can eat anything except honey which should not be given until she is a year old.</h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>

            <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                  Say your baby’s name as much as possible
                  </h5>
                  <p className="card-text lead">
                  She will look to see who is saying it and will try to reach out to the person.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                  Never speak or sing too loudly in front of the baby
                  </h5>
                  <p className="card-text lead">
                  as this may scare babies, or make them cry .
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                    {" "}
                    Give your child clean, safe and colourful things
                  </h5>
                  <p className="card-text lead">
                  such as a wooden spoon or plastic bowl, to reach for and touch, or bang and drop
                  </p>
                </div>
              </div>
            </div>
          </div>

            {/* 3 down */}
            <div className="row mt-5">
            <div className="col-12">
            <hr className="w-25 mx-auto" />
              <h1 className="display-6 text-center mb-4 mt-3">
                <b>Did you know?</b> 
              </h1>
              <h1 className="display-5 text-center mb-3">To increase infants’ self-esteem and confidence, always take a positive approach to your child’s learning process. Try to say “yes”, “good”, “well done” more often.</h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>

            <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                  Tell your infant the names of things and people
                  </h5>
                  <p className="card-text lead">
                  She should show interest and soon will try to make relationships between words and objects or people
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                  Show your child how to say things with hands, like “bye bye”
                  </h5>
                  <p className="card-text lead">
                  Soon your child should try to imitate you and wave “bye-bye” on his own.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                    {" "}
                    Point to the eyes, nose and mouth on a doll.
                  </h5>
                  <p className="card-text lead">
                  After showing one part on the doll, touch the same part on yourself and on your baby.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="foter">
        <Footer />
      </div>
    </div>
  );
};

export default Advices;

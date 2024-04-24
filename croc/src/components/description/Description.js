import React from 'react'
import Footer from '../screens/Footer/Footer'

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
              First and foremost, we would like to welcome you to our website.
              We provide all of our clients with the opportunity to have the
              Products they want by our Multiple Sellers.
            </p>
          
          </div>
        </div>
        <Footer/>
      </div>
    </section>
    
  </div>
  )
}

export default Description
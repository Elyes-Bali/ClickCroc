import React from 'react'
import "./Dash.css";
const ManuDash = () => {
  return (
    <div className="mdd ">
    <div className="content-wrapper ">
      <section className="content pt-4">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box">
                <span className="info-box-icon bg-info elevation-1">
                  <i className="fas fa-user-plus" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">All Users</span>
                  <span className="info-box-number"></span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
            
            <div className="info-box">
                <span className="info-box-icon bg-danger elevation-1">
                  <i className="fas fa-database" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">All Offers</span>
                  <span className="info-box-number"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="">
              <div className=" ">
                <div className="card-header border-transparent">
                  {/* <h3 className="card-title mb-3">All Users</h3> */}
                  <div className="card-tools"></div>
                </div>
                {/* modification here */}

                <div className="card-body p-0">
                  <div className="table-responsive">
                   
                    <table className="table" id="table-to-xls">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Role</th>
                          <th>Email</th>
                        </tr>
                      </thead>
                      <tbody>
                      
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  )
}

export default ManuDash
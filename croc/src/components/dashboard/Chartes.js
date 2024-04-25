import React, { useEffect, useState } from "react";
import { Chart as ChartJs, Tooltip, Title, ArcElement,CategoryScale,
  LinearScale,
  PointElement,
  LineElement, Legend } from "chart.js";
import { GetAllClt, GetAllSel, GetAllUsers } from "../../apis/UserApi";
import "./Dash.css"
import { Doughnut, Line } from "react-chartjs-2";
import { GetAllOff } from "../../apis/OfferApi";
import SideBar from "./SideBar";


ChartJs.register(Tooltip, Title, ArcElement,CategoryScale,
  LinearScale,
  PointElement,
  LineElement, Legend);

const Chartes = () => {
  const [allusers, setAllusers] = useState([]);

  const [allclt, setAllclt] = useState([]);
  const [alldev, setAlldev] = useState([]);
  const [chart, setChart] = useState([]);

  const isOffer = async () => {
    const oflg = await GetAllOff();
    setChart(oflg);
  };

  const isUsers = async () => {
    const uslg = await GetAllUsers();
    setAllusers(uslg);
   
  };
  const isClt = async () => {
    const uslg = await GetAllClt();
    setAllclt(uslg);
  };
  const isDevs = async () => {
    const uslg = await GetAllSel();
    setAlldev(uslg);
  };

 

  const clt = ()=>{
    var nbr = 0;
    
    allclt.filter((el)=>{
        if (el.isAdmin!=true) {
          nbr +=1
        }
      })
  return nbr
  }
  const nbrclt= clt()


  const dev = ()=>{
    var nbr = 0;
    
    alldev.filter((el)=>{
        if (el.isAdmin!=true) {
          nbr +=1
        }
      })
  return nbr
  }
  const nbrdev= dev()


  const Count = ()=>{
    var nbr = 0;
    
    allusers.filter((el)=>{
        if (el.isAdmin!=true) {
          nbr +=1
        }
      })
  return nbr
  }
  const nbruser= Count()




  console.log(nbruser);
  useEffect(() => {
    isUsers();
    isClt();
    isDevs();
    isOffer();
  }, [allusers.length]);
  console.log(allusers);
  console.log(allclt);
  console.log(alldev);
  console.log(chart);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "All Users",
      },
    },
  };

  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "All Offers",
      },
    },
  };

  const data = {
    labels: ["Clients", "Sellers"],
    datasets: [
      {
        label: `${nbruser} Users Available`,
        data: [nbrclt, nbrdev],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const info = {
    labels: ["Not Injected", "Injected"],
    datasets: [
      {
        label: `${nbruser} Babies Available`,
        data: [nbrclt, nbrdev],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const offers = {
    labels: chart?.map((x) => x.prjectname.substring(0,11)),
    datasets: [
      {
        label: `${chart?.length} Offers Available`,
        data: chart.map((x) => x.budget),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  console.log(allusers);
  return (
    
      <div className="scrumban offset-md-2 col-md-10">
        <SideBar />
        <div className="card col-md-4 w-hover-shadow">
          <div className="card-header">
             <h5 className="card-title">Users</h5>
            {/*  <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fas fa-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <i className="fas fa-times" />
                </button>
              </div> */}
          </div>
          <div className="card-body">
            <div className="">
              <Doughnut data={data} options={options} />
             
            </div>
          </div>
        </div>
        {/* <div className="card col-md-4 w3-hover-shadow">
          <div className="card-header">
             <h5 className="card-title">Offers</h5>
             <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fas fa-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <i className="fas fa-times" />
                </button>
              </div>
          </div>
          <div className="card-body">
            <div className="">
              
              <Doughnut data={info} options={options} />
            </div>
          </div>
        </div> */}

        <div className=" cadre">
        <div className="card cdr w3-hover-shadow">
          <div className="card-header">
            <h5 className="card-title">
                Offers and Budgets
            </h5>
            <div className="card-tools">
              
            </div>
          </div>
          <div className="card-body mb-5">
          <div className="cht ">
            <Line data={offers}  options={options1} />
          </div>
          </div>
        </div>
      </div>


      </div>
    
  );
};

export default Chartes;

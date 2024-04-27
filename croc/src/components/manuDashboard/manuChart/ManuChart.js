import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { GetAllOff } from "../../../apis/OfferApi";
import { CurrentUser, GetAllSel } from "../../../apis/UserApi";
import SideBar from "../../dashboard/SideBar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ManuChart = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allsel, setAllSel] = useState([]);
  const [user, setUser] = useState({});

  const isSell = async () => {
    const uslg = await GetAllSel();
    setAllSel(uslg);
  };
  const isLoggedIn = async () => {
    const userLg = await CurrentUser();
    setUser(userLg.data.user);
  };

  const isOffers = async () => {
    const uslg = await GetAllOff();
    setOffers(uslg);
    setLoading(false);
  };

  const calculateAverageRating = (offer) => {
    if (!offer || !offer.rating || !Array.isArray(offer.rating) || offer.rating.length === 0) {
      return 0; // Return 0 if the offer or its rating array is invalid or empty
    }
  
    // Calculate the sum of all ratings
    const totalRating = offer.rating.reduce((sum, rating) => sum + rating.rate, 0);
  
    // Calculate the average rating
    const averageRating = totalRating / offer.rating.length;
    return averageRating;
  };
  

  console.log(user)
console.log(allsel)
  useEffect(() => {
    isOffers();
    isSell();
    isLoggedIn();
  }, []);

  if (loading) {
    return <div>Loading...</div>;  
  }

  const filteredOffers = offers.filter((offer) => {
    const matches = allsel.some((sel) => {
      const match = sel._id === offer.createdbyId && user?.company?.toLowerCase() === offer?.brand?.toLowerCase();
      // console.log("Offer:", offer, "Sel:", sel, "Match:", match);
      return match;
    });
    console.log("Filtered:", offer, "Matches:", matches);
    return matches;
  });

  console.log(filteredOffers)
  const data = {
    labels: filteredOffers.map((offer) => offer.prjectname.substring(0, 10)),
    datasets: [
      {
        label: "Average Rating",
        data: filteredOffers.map((offer) => calculateAverageRating(offer)),
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };
  

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Average Rating of Offers",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
        },
      },
    },
    indexAxis: "x",
  };

  return (
    <div className="mdd">
        <SideBar/>
      <div className="">
        <div className="content-wrapper cadre mt-4">
          <div className="card cdr w3-hover-shadow">
            <div className="card-header">
              <h5 className="card-title mt-4">My Produts Rates</h5>
              <div className="card-tools"></div>
            </div>
            <div className="card-body">
              <div className="cht">
                <Line data={data} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManuChart;

import Sidebar from "./components/sidebar/Sidebar";
// import Topbar from "./components/topbar/Topbar";
import "./Dashboard.css";
// import { Routes, Route } from "react-router-dom";
import NavbarDashboard from "../../components/navbarfordashboard/navbardashboard";
import FeaturedInfo from "../Dashboard/components/featuredInfo/FeaturedInfo";
import Ongoing from "../Dashboard/components/ongoingDeals/ongoingDeals";
import Cancelled from "../Dashboard/components/cancelledDeals/cancelledDeals";
import Completed from "../Dashboard/components/completedDeals/completedDeals";

function Dashboard() {
  return (
    <>
      <NavbarDashboard />

      {/* <Topbar /> */}

      <div className="container">
        <Sidebar />

        <div className="home">
          <FeaturedInfo />

          <div className="homeWidgets">
            <Ongoing />
          </div>

          <div className="homeWidgets">
            <Completed />
          </div>

          <div className="homeWidgets">
            <Cancelled />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

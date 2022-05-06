import "./completedDeals.css";
import { Link } from "react-router-dom";

export default function Completed() {
  return (
    <div className="cancelledDeals">
      <h3 className="cancelledDealsHeading">Completed Deals</h3>
      <table className="cancelledDealsTable">
        <tr className="cancelledDealsTr">
          {/* <div className="widgetLg">
      <h3 className="widgetLgHeading">Ongoing Deals</h3>
      <table className="widgetLgTable">
        
        <tr className="widgetLgTr"> */}

          <th className="cancelledDealsTh">Deal Id</th>
          <th className="cancelledDealsTh">Date</th>
          <th className="cancelledDealsTh">Title</th>
          <th className="cancelledDealsTh">Amount</th>
        </tr>

        <tr className="cancelledDealsTr">
          <td className="cancelledDealsUser">
            <span className="cancelledDealsName">1</span>
          </td>
          <td className="cancelledDealsDate">10 Jun 2021</td>
          <td className="cancelledDealsTitle"> globalvox</td>
          <td className="cancelledDealsAmount">$122.00</td>
          <td className="cancelledDealsStatus"></td>
        </tr>
        <tr className="cancelledDealsTr">
          <td className="cancelledDealsUser">
            <span className="cancelledDealsName">2</span>
          </td>

          <td className="cancelledDealsDate">2 Jun 2021</td>
          <td className="cancelledDealsTitle"> globalvox1</td>
          <td className="cancelledDealsAmount">$122.00</td>
          <td className="cancelledDealsStatus"></td>
        </tr>
        <tr className="cancelledDealsLgTr">
          <td className="cancelledDealsUser">
            <span className="cancelledDealsLgName">3</span>
          </td>

          <td className="cancelledDealsDate">8 Jun 2021</td>
          <td className="cancelledDealsTitle"> globalvox2</td>
          <td className="cancelledDealsAmount">$122.00</td>
          <td className="cancelledDealsStatus"></td>
        </tr>
        <tr className="cancelledDealsTr">
          <td className="cancelledDealsUser">
            <span className="cancelledDealsName">4</span>
          </td>

          <td className="cancelledDealsDate">6 Jun 2021</td>
          <td className="cancelledDealsTitle"> globalvox3</td>
          <td className="cancelledDealsAmount">$122.00</td>
          <td className="cancelledDealsStatus"></td>
        </tr>
      </table>
      <div className="CompletedNavBtn" id="escrowButton">
        <Link className="CompletedNavBtnLink" to="/">
          View All
        </Link>
      </div>
    </div>
  );
}

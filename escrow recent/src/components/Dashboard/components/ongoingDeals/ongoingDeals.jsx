import "./ongoingDeals.css";
import { Link } from "react-router-dom";

export default function Ongoing() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgHeading">Ongoing Deals</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Deal Id</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Title</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">1</span>
          </td>

          <td className="widgetLgDate">10 Jun 2021</td>
          <td className="widgetLgTitle"> globalvox</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Terminate" to="/">
              {" "}
              Terminate
            </Button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">2</span>
          </td>

          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgTitle"> globalvox1</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Terminate"> Terminate</Button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">3</span>
          </td>

          <td className="widgetLgDate">8 Jun 2021</td>
          <td className="widgetLgTitle"> globalvox2</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Terminate"> Terminate</Button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">4</span>
          </td>

          <td className="widgetLgDate">6 Jun 2021</td>
          <td className="widgetLgTitle"> globalvox3</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Terminate"> Terminate</Button>
          </td>
        </tr>
      </table>
      <div className="OnNavBtn" id="escrowButton">
        <Link className="OnNavBtnLink" to="/">
          View All
        </Link>
      </div>
    </div>
  );
}

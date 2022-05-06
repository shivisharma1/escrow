import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbardashboard.css";
import Web3 from "web3";

var web3 = new Web3(window.ethereum);

const NavbarDashboard = () => {
  const [userAddress, setUserAddress] = useState("");
  const [networkname, setNetworkName] = useState("");
  const [escrowtitle, setEscrowTitle] = useState("");
  const [dashboardtitle, setDashboardtitle] = useState("");

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      async function checkStatus() {
        const accounts = await web3.eth.getAccounts();
        const networkId = await web3.eth.net.getId();
        if (accounts.length > 0) {
          setUserAddress(
            accounts[0].substring(0, 5) +
              "..." +
              accounts[0].substring(accounts[0].length - 5)
          );
          setNetworkName(getNetworkName(networkId));
          setEscrowTitle("Escrow");
          setDashboardtitle("Dashboard");
        } else {
        }
      }
      checkStatus();
    } else {
      console.log("MetaMask is not installed!");
    }
  }, []);

  try {
    window.ethereum.on("accountsChanged", () => window.location.reload(false));
    window.ethereum.on("chainChanged", () => window.location.reload(false));
  } catch (error) {
    console.log(error);
  }
  function getNetworkName(chainID) {
    const networks = {
      1: "Mainnet",
      3: "Ropsten",
      4: "Rinkeby",
      5: "Goerli",
      42: "Kovan",
      56: "BSC",
      97: "BSC Testnet",
      137: "Polygon",
      43114: "Avalanche",
    };
    return networks[chainID];
  }

  return (
    <>
      <div className="NavDash">
        <div className="NavbarContainerDash">
          <Link className="dashboard" id="dashboardtitle" to="/dashboard">
            {dashboardtitle}
          </Link>
        </div>
        <div className="NavbarContainer1Dash">
          <Link className="NavLogoDash" id="escrowtitle" to="/">
            {escrowtitle}
          </Link>
        </div>

        <div className="NetworkNavDash" id="networkname">
          {networkname}
        </div>

        <div className="AddressNavDash" id="useraddress">
          {userAddress}
        </div>

        <div className="NavBtnCreateDash" id="">
          <Link className="NavBtnLinkCreateDash" to="/escrowmoney">
            Create New Deal
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarDashboard;

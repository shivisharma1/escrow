import React, { useEffect, useState } from "react";
import pic from "../../assets/images/metamask.png";
import Web3 from "web3";
import axios from "axios";

import { LOGIN_API } from '../../components/helper/constent'
// import Video from '../../assets/videos/video.mp4'
// import BackgroundImg from '../../assets/images/mainBg.jpeg'
import { Button } from "../ButtonElement";
import "./connect.css";
import { ArrowForward, ArrowRight } from "../ButtonElement";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/navbar";

var web3 = new Web3(window.ethereum);

const FirstPage = () => {

  
  var navigate = useNavigate();

  const [isConnected, setConnected] = useState(false);

  const [walletAddress, setWalletAddress] = useState("");

  const [connectivity, setconnectivity] = useState("");

  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      async function checkStatus() {
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
              axios.post(LOGIN_API,{wallet:accounts[0]})
              .then((res)=>{
                localStorage.setItem('authtoken', res.data.token);
                console.log(res.data.token);
              })
              .catch(error=>{
                  console.log(error);
              })
          setConnected(true);
          setWalletAddress("You are logged in with wallet " + accounts[0].substring(0, 5) + "..." + accounts[0].substring(accounts[0].length - 5));
        } else {
          setConnected(false);
          setWalletAddress("Connect to MetaMask to access Escrow.");
        }
      }
      checkStatus();
    } else {
      console.log("MetaMask is not installed!");
      setWalletAddress("Kindly install MetaMask to proceed further.");
    }
  }, [data]);
  

  try {
    if (typeof window.ethereum !== "undefined") {
      window.ethereum.on("accountsChanged", () => checkAccountChange());
      async function checkAccountChange() {
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          let accountbalance = await web3.eth.getBalance(accounts[0]);
          accountbalance = web3.utils.fromWei(accountbalance, "ether");
          setdata({
            address: accounts,
            Balance: accountbalance,
          });
        } else {
          setdata({
            address: "",
            Balance: null,
          });
          localStorage.removeItem('authtoken');
          window.location.reload();
        }
      }
    } else {
      console.log("MetaMask is not installed!");
    }
  } catch (error) {
    console.log(error);
  }

  async function walletConnection() {
    // Asking if metamask is already present or not
    try {
      if (typeof window.ethereum !== "undefined") {
        if (window.ethereum && window.ethereum.isMetaMask) {
          let accounts = await window.ethereum.request({
            method: "eth_accounts",
          });
          
          if (accounts && accounts.length > 0) {
            console.log("You are already connected");
          } else {
            try {
              accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
              });
              setWalletAddress(
                "You are logged in with wallet " +
                (
                  accounts[0].substring(0,5)+"..."+accounts[0].substring(accounts[0].length- 5)
                )
              );
              console.log(accounts[0]);
              let accountbalance = await web3.eth.getBalance(accounts[0]);
              accountbalance = web3.utils.fromWei(accountbalance, "ether");
              const networkId = await web3.eth.net.getId();
              console.log(networkId);
              setConnected(true);
              setdata({
                address: accounts,
                Balance: accountbalance,
              });
              /* axios.post(LOGIN_API,{wallet:accounts[0]})
              .then((res)=>{
                localStorage.setItem('authtoken', res.data.token);
                console.log(res.data.token);
              })
              .catch(error=>{
                  console.log(error);
              }) */
              setconnectivity.hidden = true;
              if (networkId !== 97) {
                try {
                  await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: "0x61" }],
                  });
                } catch (switchError) {
                  // This error code indicates that the chain has not been added to MetaMask.
                  if (switchError.code === 4902) {
                    try {
                      await window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [
                          {
                            chainId: "0x61",
                            chainName: "Binance Smart Chain Test Network",
                            rpcUrls: ["https://bsc-dataseed.binance.org/"],
                            nativeCurrency: {
                              name: "Binance Coin",
                              symbol: "BNB",
                              decimals: 18,
                            },
                            blockExplorerUrls: ["https://testnet.bscscan.com/"],
                          },
                        ],
                      });
                    } catch (error) {
                      console.log(error);
                    }
                  }
                }
              }
            } catch (error) {
              console.log(error);
            }
            
          }
          window.location.reload();
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  function RedirectMetaMask() {
    window.location.assign(
      "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
    );
  }

  function dashboardButton() {
    if (typeof window.ethereum === "undefined") {
      return (
        <>
          <Button
            to=""
            onClick={RedirectMetaMask}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Install MetaMask {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </>
      );
    } else if (isConnected === true) {
      return (
        <>
          <Button
            to=""
            onClick={() => {
              navigate("/dashboard");
            }}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Go To Escrow Dashboard {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </>
      );
    } else if (isConnected === false) {
      return (
        <>
          <Button
            to=""
            onClick={walletConnection}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Connect To MetaMask {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>{" "}
          <br></br>
        </>
      );
    }
  }

  return (
    <>
      <Navbar />
      <div className="HeroContainer" id="home">
        <div className="HeroBg">
          {/* <video className='VideoBg' autoPlay loop muted src={Video} type='video/mp4'/>  */}
        </div>

        <div className="HeroContent">
          <img src={pic} width="150" height="150" alt="" />
          {/* <HeroH1>Enter Title here</HeroH1> */}
          <div className="HeroP" id="walletAddress">
            {walletAddress}
          </div>
          {/* <div className='HeroP'>
                {installMetamask}
               </div> */}
          <div className="HeroBtnWrapper">
            <p
              className="info-text alert alert-danger "
              id="connectivity"
              hidden
            >
              {connectivity}
            </p>
            {dashboardButton()}
          </div>{" "}
          <br />
        </div>
      </div>
    </>
  );
};

export default FirstPage;

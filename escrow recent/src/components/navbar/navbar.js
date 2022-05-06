import React from 'react'
/* import { useEffect, useState} from 'react'; */
import { Link } from 'react-router-dom'
import "./NavbarElements.css"
/* import hamburger from "../../assets/images/icon-hamburger.svg"; */
/* import Web3 from 'web3'; */

const Navbar = ({toggle}) => {
    /* const [isConnected, setConnected] = useState(false) */

    /* useEffect(() => {
        if (typeof window.ethereum !== 'undefined') {
            const web3 = new Web3(window.ethereum);
            async function checkStatus(){
            const accounts = await web3.eth.getAccounts();
                if (accounts.length > 0){
                    setConnected(true) 
                    document.getElementById("escrowButton").hidden = false
                }
                else{
                    setConnected(false) 
                    document.getElementById("escrowButton").hidden = true
                }
            }
            checkStatus()
        }        
    },[isConnected]) */
  
  return (
    <>
        <div className="Nav">
                
                    <Link className='NavLogo' to='/'>Escrow</Link>
                    {/* <div className='MobileIcon' onClick={toggle}></div> */}
            
                {/* <div className='NavMenu'>
                    <div className='NavItem'>
                        <Link className='NavLinks' to="about">About</Link>
                    </div>

                    <div className='NavItem'>
                        <Link className='NavLinks' to="discover">Discover</Link>
                    </div>
                        
                    <div className='NavItem'>
                        <Link className='NavLinks' to="services">Services</Link>
                    </div>

                    <div className='NavItem'>
                        <Link className='NavLinks' to="signup">Sign Up</Link>
                    </div>
                </div> */}
                
                {/* <div className='NavBtn' id="escrowButton" hidden>
                    <Link className='NavBtnLink' to="/escrowmoney">
                        Escrow
                    </Link>
                </div> */}

                {/* <img src={hamburger} className='MobileIcon' onClick={toggle} alt=" " ></img> */}
        </div>
    </>
  )
}

export default Navbar

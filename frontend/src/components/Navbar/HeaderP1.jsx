import React from "react";
import OneMgLogo from "../../assets/Icons/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import CartICon from "../../assets/Icons/cart.svg";

import{HiddenHead,Li} from "./styles/Navigation.styled"

const HeaderP1 = () => {
  const params = useParams();
 
 
 
  const[del,setdel]=React.useState(false)
  
  const navigate = useNavigate()
  console.log()
  return (
    <div className="header_1Con" >
      <div className="firstPart">
        <div className="logoCon" onMouseEnter ={()=>setdel(false)}>
          <img onClick={()=>navigate("/")} src={OneMgLogo} alt="" />
        </div>
        <ul className="tabList" >
          <li>
            <Link to="#">MEDICINES</Link>
          </li>
          <li>
            <Link to="#">LAB TESTS</Link>
            <span className="badge">SAFE</span>
          </li>
          <li>
            <Link to="#">CONSULT DOCTORS</Link>
          </li>
          <li>
            <Link to="#">COVID-19</Link>
          </li>
          <li>
            <Link to="#">AYURVEDA</Link>
          </li>
          <li>
            <Link to="#">CARE PLAN</Link>
            <span className="badge">SAVE MORE</span>
          </li>
        </ul>
      </div>
      <div className="secondPart" >
        <ul className="list">
          <Li >
              <Link className="linkref1" to={"/login"}>Login | Signup</Link>
              <Link className="linkref2" to={"#"} onMouseEnter ={()=>setdel(!del)}>hello</Link>
              <HiddenHead val={del} onMouseLeave={()=>setdel(false)}>
                <ul>
                  <li>Hi,There</li>
                  <hr style={{color:"grey",marginTop:"-10%"}}/>
                </ul>
                <ul>
                  <li>View profile</li>
                </ul>
                <ul>
                  <li>My orders</li>
                </ul>
                <ul>
                  <li>Manage Payments</li>
                </ul>
                <ul>
                  <li>My lab test</li>
                </ul>
                <ul>
                  <li onClick={()=>{
                    
                    localStorage.clear();
                  }}>Logout</li>
                </ul>
              </HiddenHead> 
          </Li>
          <li onMouseEnter ={()=>setdel(false)}>
            <Link to={"/offer"} >Offers</Link>
          </li>
          <li>
            <Link to={"/cart"}>
              <img width={"24px"} src={CartICon} alt="" />
            </Link>
          </li>
          <li>
            <Link to={"#"}>Need Help?</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderP1;






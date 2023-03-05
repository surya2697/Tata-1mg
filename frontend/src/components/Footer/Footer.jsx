import React, { useState } from "react";
import { FooterWrapper } from "./Footer.styled";

import { Link } from "react-router-dom";

import FacebookIcon from "../../assets/Icons/socials/facebook.svg";
import LinkedINIcon from "../../assets/Icons/socials/linkedin.svg";
import MediumIcon from "../../assets/Icons/socials/medium.svg";
import TwitterIcom from "../../assets/Icons/socials/twitter.svg";
import YoutubeIcon from "../../assets/Icons/socials/youtube.svg";
import GetItGoogle from "../../assets/Icons/google-play-badge.png";
import GetAppStore from "../../assets/Icons/appstore.png";
import RealiableIcon from "../../assets/Icons/realiable.svg";
import SecureIcon from "../../assets/Icons/lock.svg";
import AffordableIcon from "../../assets/Icons/affordable.svg";
import Certificate1 from "../../assets/Icons/certificate.png";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import CardsImg from "../../assets/Icons/cards.png";

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sendLinkB1 = {
    bg: "#ff6f61",
    text: "Send Link",
    width: "110px",
    br: "3px",

    color: "#ffffff",
    height: "38px",
    fontSize: "14px",
  };

  const signUpB2 = {
    bg: "#ff6f61",
    text: "SIGN UP",
    width: "97px",
    br: "3px",
    fontWeight: "Bold",
    color: "#ffffff",
    height: "40px",
    fontSize: "14px",
  };

  return (
    <FooterWrapper>
      {/* Part - 1 */}
      <div className="footerP1Con">
        <div className="heading">
          <p>INDIA’S LARGEST HEALTHCARE PLATFORM</p>
        </div>
        <div className="downloads">
          <span>
            <strong className="strong">260m+</strong>
            <p>Visitors</p>
          </span>
          <span>
            <strong className="strong">31m+</strong>
            <p>Orders delivered</p>
          </span>
          <span>
            <strong className="strong">1800+</strong>
            <p>Cities</p>
          </span>
        </div>
        <div className="divider"></div>
        <div className="mailToUse">
          <p>Get the link to download App</p>
          <div className="emailInput">
            <input type="number" id="phone" placeholder="Enter Phone Number" />
           
          </div>
        </div>
      </div>
      {/* Part - 2 */}
      <div className="footerP2Con">
        {/* Sub part -1 */}
        <div className="links">
          {/* 1st List */}
          <div className="listContainer">
            <p>Know Us</p>
            <ul>
              <li>
                <Link to={"/about"}>About Us</Link>
              </li>
              <li>
                <Link to={"#"}>Contact Us</Link>
              </li>
              <li>
                <Link to={"#"}>Press Coverage</Link>
              </li>
              <li>
                <Link to={"#"}>Careers</Link>
              </li>
              <li>
                <Link to={"#"}>Business Partership</Link>
              </li>
              <li>
                <Link to={"#"}>Became a Health Partner</Link>
              </li>
              <li>
                <Link to={"#"}>Corporate Governance</Link>
              </li>
            </ul>
          </div>

          {/* 2nd List */}
          <div className="listContainer">
            <p>Our Policies</p>
            <ul>
              <li>
                <Link to={"#"}>Privecy Policy</Link>
              </li>
              <li>
                <Link to={"#"}>Terms ans Conditions</Link>
              </li>
              <li>
                <Link to={"#"}>Editorial Policy</Link>
              </li>
              <li>
                <Link to={"#"}>Return Policy</Link>
              </li>
              <li>
                <Link to={"#"}>IP Policy</Link>
              </li>
              <li>
                <Link to={"#"}>Grivance Redressal Policy</Link>
              </li>
            </ul>
          </div>
          {/* 3rd List */}
          <div className="listContainer">
            <p>Our Services</p>
            <ul>
              <li>
                <Link to={"#"}>Order Medicines</Link>
              </li>
              <li>
                <Link to={"#"}>Book Lab Test</Link>
              </li>
              <li>
                <Link to={"#"}>Consult a Doctor</Link>
              </li>
              <li>
                <Link to={"#"}>Ayurveda Articles</Link>
              </li>
              <li>
                <Link to={"#"}>Hindi Articles</Link>
              </li>
              <li>
                <Link to={"#"}>Care Plan</Link>
              </li>
            </ul>
          </div>
          {/* 4th List */}
          <div className="connectContainer">
            <p>Connect</p>
            <ul>
              <li>
                <Link to={"#"}>Social Links</Link>
              </li>
              <li className="socials">
                <span>
                  <a
                    target={"_blank"}
                    href="https://www.facebook.com/1mgOfficial"
                  >
                    <img src={FacebookIcon} alt="" />
                  </a>
                </span>
                <span>
                  <a target={"_blank"} href="https://twitter.com/1mgofficial">
                    <img src={TwitterIcom} alt="" />
                  </a>
                </span>
                <span>
                  <a
                    target={"_blank"}
                    href="https://www.youtube.com/c/1mgofficial"
                  >
                    <img src={YoutubeIcon} alt="" />
                  </a>
                </span>
                <span>
                  <a
                    target={"_blank"}
                    href="https://www.linkedin.com/company/1mg"
                  >
                    <img src={LinkedINIcon} alt="" />
                  </a>
                </span>
                <span>
                  <a target={"_blank"} href="https://medium.com/1mgofficial">
                    <img src={MediumIcon} alt="" />
                  </a>
                </span>
              </li>
              <li>
                <Link to={"#"}>Want daily dose of health?</Link>
              </li>
              <li>
                <Link to={"#"}>
                  
                </Link>
              </li>
            </ul>
          </div>
          {/* 5th List */}
          <div className="getAppContainer">
            <h5>Download App</h5>
            <ul>
              <li className="getAppIcons">
                <a
                  href={
                    "https://play.google.com/store/apps/details?id=com.aranoah.healthkart.plus"
                  }
                  target={"_blank"}
                >
                  <img src={GetItGoogle} alt="" />
                </a>
              </li>
              <li className="getAppIcons">
                <a
                  href={"https://itunes.apple.com/in/app/1mg/id554578419?mt=8"}
                  target={"_blank"}
                >
                  <img src={GetAppStore} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Sub part -2 */}
        <div className="footerP3Con">
          {/* First div */}
          <div className="innierDiv">
            <span>
              <img src={RealiableIcon} alt="" />
            </span>
            <div className="desc">
              <h5>Reliable</h5>
              <p>
                All products displayed on Tata 1mg are procured from verified
                and licensed pharmacies. All labs listed on the platform are
                accredited
              </p>
            </div>
          </div>
          {/* Second Div */}

          <div className="innierDiv">
            <span>
              <img src={SecureIcon} alt="" />
            </span>
            <div className="desc">
              <h5>Secure</h5>
              <p>
                Tata 1mg uses Secure Sockets Layer (SSL) 128-bit encryption and
                is Payment Card Industry Data Security Standard (PCI DSS)
                compliant
              </p>
            </div>
          </div>
          {/* Third div */}

          <div className="innierDiv">
            <span>
              <img src={AffordableIcon} alt="" />
            </span>
            <div className="desc">
              <h5>Affordable</h5>
              <p>
                Find affordable medicine substitutes, save up to 50% on health
                products, up to 80% off on lab tests and free doctor
                consultations.
              </p>
            </div>
          </div>
        </div>
        {/* Sub Part - 3 */}
        <div className="certificatesCon">
          <span>
            <img src={Certificate1} alt="" />
          </span>
          <p>
            India's only LegitScript and ISO/ IEC 27001 certified online
            healthcare platform
          </p>
        </div>
        {/* Sub Part - 4 */}
        <div className="subPart4" onClick={() => setIsOpen(!isOpen)}>
          <h2>Know more about Tata 1mg</h2>
          <span>{isOpen ? <BsChevronUp /> : <BsChevronDown />}</span>
        </div>
        {isOpen && (
          <div className="perentSubPart4">
            <div>
              <h2>Access medical and health information</h2>
              <p>
                Tata 1mg provides you with medical information which is curated,
                written and verified by experts, accurate and trustworthy. Our
                experts create high-quality content about medicines, diseases,
                lab investigations, Over-The-Counter (OTC) health products,
                Ayurvedic herbs/ingredients, and alternative remedies.
              </p>
            </div>
            <div>
              <h2>Order medicines online</h2>
              <p>
                Get free medicine home delivery in over 1800 cities across
                India. You can also order Ayurvedic, Homeopathic and other
                Over-The-Counter (OTC) health products. Your safety is our top
                priority. All products displayed on Tata 1mg are procured from
                verified and licensed pharmacies.
              </p>
            </div>
            <div>
              <h2>Book lab tests</h2>
              <p>
                Book any lab tests and preventive health packages from certified
                labs and get tested from the comfort of your home. Enjoy free
                home sample collection, view reports online and consult a doctor
                online for free.
              </p>
            </div>
            <div>
              <h2>Consult a doctor online</h2>
              <p>
                Got a health query? Consult doctors online from the comfort of
                your home for free. Chat privately with our registered medical
                specialists to connect directly with verified doctors. Your
                privacy is guaranteed.
              </p>
            </div>
          </div>
        )}

        {/* Part - 5 */}
        <div className="copytightCon">
          <p>
            © 2022 Tata 1mg. All rights reserved. In compliance with Drugs and
            Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945, we don't
            process requests for Schedule X and other habit forming drugs
          </p>
          <span>
            <img src={CardsImg} alt="" />
          </span>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

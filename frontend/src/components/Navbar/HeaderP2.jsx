import React, { useEffect, useState } from "react";
import { ImLocation } from "react-icons/im";
import { IoMdLocate } from "react-icons/io";
import { BiSearch } from "react-icons/bi";

import FireIcon from "../../assets/Icons/lightningIcon.svg";

const HeaderP2 = () => {
  const [location, setLocation] = useState("");
  console.log(location);
  const styles = {
    bg: "#ff6f61",
    text: "Quick Order",
    width: "140px",
    br: "3px",

    color: "#ffffff",
    height: "100%",
    fontSize: "16px",
  };
  let city;
  // const getL = () => {
  //   navigator.geolocation.getCurrentPosition(showLocation);
  // };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(data) {
      // console.log(data.coords);
      let lat = data.coords.latitude;
      let long = data.coords.longitude;

      showDataByGeoLocation(lat, long);
    });
  }, []);

  // const showLocation = async (pos) => {
  //   let { lattitude, longitude } = pos.coords;
  //   console.log(pos);
  //   showDataByGeoLocation(pos.coords.latitude, pos.coords.longitude);
  // };

  const showDataByGeoLocation = async (lattitude, longitude) => {
    let url1 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lattitude}&lon=${longitude}&exclude={part}&appid=85f990cdfc2094625437070b3f3b2977&units=metric`;
    let res1 = await fetch(url1); //here i am getting daily data by adding lat and lon into one call API
    let data1 = await res1.json();

    let res = await fetch(
      `https://us1.locationiq.com/v1/reverse.php?key=pk.456518217705258731c8c7089e3a45d0&lat=${lattitude}&lon=${longitude}&format=json`
    );
    let loc = await res.json();
    let pin = loc.address.city;
    if (pin) setLocation(city);
    // console.log(loc);

    let dayArray = data1.daily;
  };
  return (
    <div className="header_2Con">
      <div className="firstCon">
        <div className="container">
          {/* Location */}
          <div className="locationCon">
            <span>
              <ImLocation />
            </span>
            <input
              type="text"
              className="location"
              value={location || "New Delhi"}
              onChange={(e) => setLocation(e.target.value)}
            />
            <span style={{ cursor: "pointer" }}>
              <IoMdLocate />
            </span>
          </div>
          {/*Search bar */}
          <div className="searchbarCon">
            <input
              type="text"
              className="searchbar"
              placeholder="Search for Medicines and Health Products"
            />
            <span>
              <BiSearch />
            </span>
          </div>
        </div>
      </div>
      <div className="secondCon">
        <div className="container">
          <span>
            <img src={FireIcon} alt="" />
          </span>
          <p>QUICK BUY! Get 25% off on medicines*</p>
          
        </div>
      </div>
    </div>
  );
};

export default HeaderP2;

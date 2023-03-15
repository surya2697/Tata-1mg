import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductsCard from "../Homepage/Reusesable/ProductsCard";
import About from "./Reuseable/About";
import { topSellingProducts } from "./Reuseable/CartConstants";
import CouponCard from "./Reuseable/CouponCard";
import ItemsCard from "./Reuseable/ItemsCard";
import TaxCard from "./Reuseable/TaxCard";

const Cartpage = () => {
  const data = JSON.parse(localStorage.getItem("cartItems")) || [];

  const getTotal = data.reduce((acc, ele) => acc + ele.price, 0);
  // console.log(getTotal, "totoal");
  const navigate = useNavigate();
  const [trigger, settrigger] = useState(false);
  
  const isAuth= localStorage.getItem("isAuth")||false;
 
  const handleNavigate = () => {
   
      navigate("/cart/address-page");
   
    
  };
  
  return (
    <Box bg="#f8f8f8" p={{ lg: "2rem", md: "1rem" }} px={{ lg: "5rem" }}>
      {/* this box will have cards  */}
      <Box
        display={"flex"}
        flexDirection={{ lg: "row", md: "column", sm: "column" }}
        justifyContent="space-between"
        m="auto"
      >
        {/* this one will have cart items and products  */}
        <Box w={{ lg: "60%", md: "100%", sm: "100%" }}>
          {data.length > 0 &&
            data.map((e,i) => (
              <ItemsCard
                key={i}
                productsData={e}
                settrigger={settrigger}
                price={e.price}
              />
            ))}

          <br />
          <Text
            mb="1rem"
            pl="2rem"
            fontWeight={"400"}
            lineHeight={"26px"}
            fontSize={"22px"}
          >
            Popular Categories
          </Text>
          <ProductsCard something={topSellingProducts} prodVal={3} />
        </Box>

        {/* thi sone will have total coupons etc  */}
        <Box w={{ lg: "35%", md: "100%" }}>
          <CouponCard />
          <br />
          <TaxCard getTotal={getTotal} handleNavigate={handleNavigate} />
        </Box>
      </Box>
      <Box w="100%" m="auto">
        <About />
      </Box>
    </Box>
  );
};

export default Cartpage;

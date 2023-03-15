import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { RiCoupon3Line } from "react-icons/ri";
import { FaGreaterThan } from "react-icons/fa";

const CouponCard = () => {
  return (
    <Box
      bg="white"
      p="2rem"
      borderRadius={"5px"}
      boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
    >
      <Image src="https://onemg.gumlet.io/image/upload/v1625657833/ekjkxafxcqqg0oinr3fu.png" />
      <Text
        fontWeight={"700"}
        fontSize="18px"
        lineHeight={"23px"}
        color="#208376"
      >
        You can save extra ₹78 on this order
      </Text>
      <Text fontWeight={"600"}>Become a member</Text>
      <Text>
        Care plan membership ₹165
        <span style={{ textDecoration: "line-through" }}>₹549</span> / 3 months
      </Text>
      <br />
      <Box display={"flex"} justifyContent="space-between">
        <Button
          color="#ff6f61"
          bg="white"
          _hover={{ bg: "white" }}
          border="1px solid #ff6f61"
        >
          Know More
        </Button>
        <Button color="white" bg="#ff6f61" _hover={{ bg: "#ff6f61" }}>
          Add to Cart
        </Button>
      </Box>
      <br />
      <Box
        p="1rem"
        display={"flex"}
        justifyContent="space-between"
        border="1px solid lightgrey"
      >
        <Text fontSize={"22px"} fontWeight="500" display={"flex"} gap="10px">
          <RiCoupon3Line /> <span>Apply Coupon</span>
        </Text>
        <Button bg="white" _hover={{ bg: "white" }}>
          <FaGreaterThan />
        </Button>
      </Box>
    </Box>
  );
};

export default CouponCard;

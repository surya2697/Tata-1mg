import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const TaxCard = ({ btn = "CHECKOUT", getTotal, handleNavigate }) => {
  let price = 0;
  if (getTotal !== 0) {
    price = getTotal - 40;
  }
  return (
    <Box
      bg="white"
      p="1rem"
      mb="20rem"
      boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
    >
      {/* 1 */}
      <Box display={"flex"} justifyContent="space-between" mb="1rem">
        <Text>Item Total(MRP)</Text>
        <Text>₹{getTotal}</Text>
      </Box>

      {/* 2 */}
      <Box
        display={"flex"}
        justifyContent="space-between"
        mb="1rem"
        borderBottom={"1px solid lightgrey"}
      >
        <Text>Price Discount</Text>
        <Text mb="1rem">-₹40</Text>
      </Box>
      {/* 3 */}
      <Box
        display={"flex"}
        justifyContent="space-between"
        mb="1rem"
        borderBottom={"1px solid lightgrey"}
      >
        <Text>Shipping Fee</Text>
        <Text mb="1rem">₹0</Text>
      </Box>
      {/* 3.5 */}
      <Box
        fontSize={"20px"}
        fontWeight="500"
        display={"flex"}
        justifyContent="space-between"
        mb="1rem"
      >
        <Text>To be paid</Text>
        <Text>₹{price}</Text>
      </Box>
      {/* 4 */}
      <Box
        h="3rem"
        display={"flex"}
        p="0.5rem"
        justifyContent="space-between"
        mb="1rem"
        bg="green.100"
      >
        <Text>Total Savings</Text>
        <Text color={"green.500"} fontWeight="600">
          ₹40
        </Text>
      </Box>
      {/* 5 */}
      <Box h="4rem">
        <Button
          onClick={handleNavigate}
          fontSize={"1rem"}
          color="white"
          bg="#ff6f61"
          _hover={{ bg: "#ff6f61" }}
          w="100%"
          h="100%"
        >
          {btn}
        </Button>
      </Box>
    </Box>
  );
};

export default TaxCard;

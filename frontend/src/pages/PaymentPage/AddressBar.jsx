import { Box, Text } from "@chakra-ui/react";
import React from "react";

const AddressBar = () => {
  const addressData = JSON.parse(localStorage.getItem("address")) || [];

  return (
    <Box
      p="1rem"
      bg="white"
      boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
    >
      <Text fontWeight={"600"}>{addressData.delivery}</Text>
      <Text>{addressData.customer}</Text>
      <Text>{addressData.mobileno}</Text>
      <Text>{addressData.building}</Text>
      <Text>{(addressData.state, addressData.pinCode)}</Text>
    </Box>
  );
};

export default AddressBar;

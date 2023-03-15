import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSucessfull = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 3000);
  return (
    <Box w="70%" m="auto" mb="2rem">
      <Image
        w="100%"
        src="https://cdn.dribbble.com/users/583807/screenshots/5187139/media/c636e78d4bc2b563741ad5417f038c15.gif"
      />
    </Box>
  );
};

export default PaymentSucessfull;

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/success");
  };
  return (
    <Box p="2rem">
      <Text fontWeight={"500"} fontSize="20px">
        Credit & Debit Cards
      </Text>
      <br />
      <Text>Add New Card For Payment</Text>
      <br />
      <br />
      <FormControl>
        <Text>Card Number</Text>
        <br />
        <Input
          border={"1px solid white"}
          borderBottom="1px solid grey"
          placeholder="XXXX XXXX XXXX XXXX"
        />

        <Stack direction={"row"} justifyContent="space-between">
          <Box>
            <br />
            <Text>Expiry Date (MM/YY)</Text>
            <Input
              border={"1px solid white"}
              borderBottom="1px solid grey"
              placeholder="MM / YY"
            />
          </Box>
          <Box>
            <br />
            <Text>Security code</Text>
            <Input
              border={"1px solid white"}
              borderBottom="1px solid grey"
              placeholder="CVV"
            />
          </Box>
        </Stack>
        <br />
        <br />
        <Input placeholder="Name on Card" />

        <br />
        <br />
        <Checkbox colorScheme={"orange"}></Checkbox>
        <Text>
          Your card details will be saved securely for future transactions,
          based on the industry standards.
        </Text>
        <br />
        <br />
        <Box display={"flex"} justifyContent="right">
          <Button
            onClick={handleClick}
            h="3rem"
            bg="#ff6f61"
            _hover={{ bg: "#ff6f61" }}
            w="10rem"
            color="white"
          >
            MAKE PAYMENT
          </Button>
        </Box>
      </FormControl>
      <br />
      <br />
      <br />
      <Box w="80%" m="auto">
        <Text>
          We support domestic credit and debit cards of following brands
        </Text>
        <Stack direction={"row"} spacing={6}>
          <Image
            h="2rem"
            w="3rem"
            src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530098811/marketing/szfylmvspyj5ccvhesnp.png"
          />
          <Image
            h="2rem"
            w="3rem"
            src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1532957968/marketing/j9kc0uquxwrcbyoeomfw.png"
          />
          <Image
            h="2rem"
            w="3rem"
            src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530098792/marketing/vujtyvkwxchd16egv0wt.png"
          />
          <Image
            h="2rem"
            w="3rem"
            src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530098898/marketing/rv6lj5fubobesvsomlzr.png"
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Card;

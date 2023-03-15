import {
  Box,
  Button,
  FormControl,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import About from "../CartPage/Reuseable/About";

const AdressPage = () => {
  const [radio, setRadio] = useState("Home");
  const [add, setadd] = useState({
    landmark: "",
    building: "",
    mobileno: "",
    pincode: "",
    locality: "",
    city: "",
    customer: "",
    state: "",
    delivery: radio,
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setadd({ ...add, [name]: value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("address", JSON.stringify(add));
    setadd({
      landmark: "",
      building: "",
      mobileno: "",
      pincode: "",
      locality: "",
      city: "",
      customer: "",
      state: "",
      delivery: radio,
    });

    navigate("/cart/payment/all/card");
  };

  const handleCancel = () => {
    setadd({
      landmark: "",
      building: "",
      mobileno: "",
      pincode: "",
      locality: "",
      city: "",
      customer: "",
      state: "",
      delivery: "",
    });
  };
  return (
    <Box
      bg="#f8f8f8"
      p={{ lg: "4rem", md: "2rem", sm: "0.5rem" }}
      pr={{ lg: "5rem" }}
    >
      <Text fontSize={"25px"} fontWeight="500">
        Add New Address
      </Text>
      <br />
      <Box bg="white" w={{ lg: "50%", sm: "100%", md: "100%" }} p="1rem">
        <FormControl>
          <Input
            name="building"
            onChange={handleOnChange}
            h="5rem"
            placeholder="Flat Number Building Name , Street/Locality"
            type="text"
            value={add.building}
          />
          <br />
          <br />

          <Input
            name="landmark"
            onChange={handleOnChange}
            placeholder="Landmark (Optional)"
            type="text"
            value={add.landmark}
          />
          <br />
          <br />

          <Input
            name="pincode"
            onChange={handleOnChange}
            placeholder="Pincode"
            type="text"
            value={add.pincode}
          />
          <br />
          <br />

          <Input
            name="locality"
            onChange={handleOnChange}
            placeholder="Locality"
            type="text"
            value={add.locality}
          />
          <br />
          <br />

          <Input
            name="city"
            onChange={handleOnChange}
            placeholder="City"
            type="text"
            value={add.city}
          />
          <br />
          <br />

          <Input
            name="state"
            onChange={handleOnChange}
            placeholder="State"
            type="text"
            value={add.state}
          />
          <br />
          <br />

          <Input
            name="customer"
            onChange={handleOnChange}
            placeholder="Customer Name"
            type="text"
            value={add.customer}
          />
          <br />
          <br />

          <Input
            name="mobileno"
            onChange={handleOnChange}
            placeholder="10 Digit Mobile Number"
            type="text"
            value={add.mobileno}
          />
          <br />
          <br />

          <RadioGroup defaultValue={"Home"} onChange={setRadio}>
            <Stack direction="row" spacing={5}>
              <Radio value="Home" colorScheme={"orange"}>
                HOME
              </Radio>
              <Radio value="Office" colorScheme={"orange"}>
                OFFICE
              </Radio>
              <Radio value="Other" colorScheme={"orange"}>
                OTHER
              </Radio>
            </Stack>
          </RadioGroup>
          <br />
          <br />
          <Stack direction="row" spacing={5} justifyContent="right">
            <Button
              onClick={handleCancel}
              color="#ff6f61"
              fontSize={"22px"}
              bg="White"
              _hover={{ bg: "white" }}
            >
              CANCEL
            </Button>
            <Button
              onClick={handleSubmit}
              color="white"
              fontSize={"22px"}
              bg="#ff6f61"
              _hover={{ bg: "#ff6f61" }}
            >
              SAVE
            </Button>
          </Stack>
        </FormControl>
      </Box>

      <Box w={{ lg: "50%" }} fontSize={"12px"}>
        <About />
      </Box>
    </Box>
  );
};

export default AdressPage;

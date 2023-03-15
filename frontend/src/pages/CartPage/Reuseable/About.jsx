import { Box, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Box p="2rem" display={"flex"} gap="2rem" mt={{ sm: "-1rem", md: "-1rem" }}>
      <Box borderTop="1px solid grey">
        <br />
        <Text>
          Tata 1mg is a technology platform to facilitate transaction of
          business. The products and services are offered for sale by the
          sellers. The user authorizes the delivery personel to be his agent for
          delivery of the goods. For details read terms and conditions.
        </Text>
      </Box>

      <Box borderTop="1px solid grey">
        <br />
        <Text>
          *NeuCoins will be credited 7 days after your complete order is
          delivered in case of Products and in case of Lab Services NeuCoins
          will be credited within 24 hours from the time of generation of test
          report. NeuCoins will not be credited in case a return request is
          initiated for the order.
        </Text>
        <br />
        <Text>
          **Coupon Discount value may change if the total order value changes.
        </Text>
        <br />
        <Text>
          ***Items in your cart will always reflect the most recent price as
          compared to the prices in their product detail page.
        </Text>
      </Box>
    </Box>
  );
};

export default About;

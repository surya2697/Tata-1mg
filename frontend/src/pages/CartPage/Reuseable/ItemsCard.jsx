import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BsTrash } from "react-icons/bs";
import { IoIosAddCircle } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { updateCartCount } from "../../../actions/cart.actions";

const ItemsCard = ({ productsData, settrigger }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  let cartProduct = cartItems.find((el) => el._id === productsData._id);

  const handleIncreaseCartProudct = (newProduct) => {
    
    newProduct.productCount = newProduct.productCount + 1;
    let res =
      (newProduct.price * newProduct.productCount) /
      (newProduct.productCount * (newProduct.productCount - 1));

    newProduct.price += Math.round(res);
    
    dispatch(updateCartCount(cartItems));
    settrigger((prev) => !prev);
  };

  const handleDecreaseCartProudct = (newProduct) => {
    newProduct.productCount = newProduct.productCount - 1;

    let res = newProduct.price / (newProduct.productCount + 1);

    // console.log(res)
    newProduct.price -= Math.round(res);

    dispatch(updateCartCount(cartItems));
    settrigger((prev) => !prev);
  };

  const handleRemovefromCart = (newProduct) => {
    let newCart = cartItems.filter((el) => el._id !== newProduct._id);
    // console.log("newCart", newCart);
    dispatch(updateCartCount(newCart));
    settrigger((prev) => !prev);
  };
  return (
    <Box
      key={productsData._id}
      bg="white"
      display={"flex"}
      justifyContent="space-between"
      p="1rem"
      boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
    >
      {/* 1 */}
      <Box>
        <Flex gap={1}>
          <Image src={productsData.imageUrl} h="30px" w="30px" />
          <Text fontWeight={"600"}>{productsData.productName}</Text>
        </Flex>
        <br />
        <Text>{productsData.shortDesc}</Text>
        <br />
        <Button
          onClick={() => handleRemovefromCart(cartProduct)}
          bg={"white"}
          _hover={{ bg: "white" }}
          mt="0.2rem"
        >
          <BsTrash /> Remove
        </Button>
      </Box>
      {/* 2 */}
      <Box textAlign={"right"}>
        <Text>₹ {productsData.price}</Text>
        <br />
        <Text>
          MRP{" "}
          <span style={{ textDecoration: "line-through" }}>
            ₹{productsData.strikedPrice}
          </span>
        </Text>
        <br />
        <Box display={"flex"} mt="0.2rem">
          <Button
            disabled={productsData.productCount === 1}
            onClick={() => handleDecreaseCartProudct(cartProduct)}
            bg={"white"}
            _hover={{ bg: "white" }}
            borderRadius="90%"
          >
            <GrSubtractCircle fontSize="2rem" />
          </Button>
          <Text>{productsData.productCount}</Text>
          <Button
            disabled={productsData.productCount === 5}
            onClick={() => handleIncreaseCartProudct(cartProduct)}
            bg={"white"}
            _hover={{ bg: "white" }}
            borderRadius="90%"
          >
            <IoIosAddCircle fontSize="2rem" color="#ff6f61" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ItemsCard;

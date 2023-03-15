import {
  Box,
  Button,
  Flex,
  Image,
  Spinner,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { BiRupee } from "react-icons/bi";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, updateCartCount } from "../actions/cart.actions";
import { GrSubtractCircle } from "react-icons/gr";
import { IoIosAddCircle } from "react-icons/io";

const AllProduct = ({ product }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const itemIdsFromCart = cartItems.map((el) => el._id);
  const itemIdandCount = cartItems.map((el) => [el._id, el.count]);
  let cartProduct = cartItems.find((el) => el._id == product._id);

  const handleAddToCart = (newProduct) => {
    newProduct.productCount = 1;
    let newCart = [...cartItems, newProduct];
    dispatch(addItemToCart(newCart));
  };

  const handleIncreaseCartProudct = (newProduct) => {
    cartItems.find((el) => el._id == newProduct._id).productCount =
      newProduct.productCount + 1;

    dispatch(updateCartCount(cartItems));
  };

  const handleDecreaseCartProudct = (newProduct) => {
    if (newProduct.productCount == 1) {
      let newCart = cartItems.filter((el) => el._id != newProduct._id);
      dispatch(updateCartCount(newCart));
    } else {
      cartItems.find((el) => el._id == newProduct._id).productCount =
        newProduct.productCount - 1;

      dispatch(updateCartCount(cartItems));
    }
  };

  return (
    <Box
      border={"1px solid #eee"}
      transition={".3s"}
      rounded={4}
      bg={"white"}
      _hover={{
        transition: ".6s",
        boxShadow: "0 0 9px 0 rgb(0 0 0 / 30%)",
      }}
      position={"relative"}
      p={"10px"}
    >
      <Box
        width="100%"
        margin="auto"
        p={"20px 20px"}
        bg={"white"}
        rounded={4}
        position={"relative"}
      >
        <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
          <Image
            src={product?.imageUrl}
            h="150px"
            bg={"#f9f9f9"}
            display="block"
            m={"auto"}
          />
        </Link>
      </Box>
      <Box
        h={"42px"}
        // border={"1px solid blue"}
        fontSize="14px"
        fontWeight={"400"}
        lineHeight="20px"
        color={"#212121"}
        // textOverflow={"ellipsis"}
        textOverflow={"..."}
        overflow="hidden"
        mt="10px"
      >
        {product.productName}
      </Box>
      <Text
        fontSize="12px"
        fontWeight={"400"}
        lineHeight="17px"
        color={"#757575"}
      >
        {product.shortDesc}
      </Text>

      <Flex
        mt={"5px"}
        left="0"
        flexDirection={"row"}
        justifyContent="flex-start"
        alignItems={"center"}
      >
        <Box
          paddingLeft={"5px"}
          flexDirection={"row"}
          justifyContent="flex-start"
          alignItems={"center"}
          borderRadius={"2px"}
          bg={"#1aab2a"}
          color={"white"}
          fontWeight={"bold"}
          fontSize="12px"
          pr={"5px"}
        >
          {product.ratings}{" "}
          {/* <StarIcon marginTop={"-3px"} color={"white"} fontSize="10px" /> */}
        </Box>
        <Text marginLeft={3} fontSize="12px">
          {product.numberOfRatings}
        </Text>
      </Flex>
      <Flex
        mt={"5px"}
        paddingLeft={"2px"}
        flexDirection={"row"}
        justifyContent="flex-start"
        alignItems={"center"}
        borderRadius={"2px"}
        fontSize="14px"
        mb={"30px"}
        // border={"1px solid red"}
      >
        <Text
          fontSize="12px"
          fontWeight={"400"}
          lineHeight="17px"
          color={"#757575"}
        >
          MRP
          <Text as={"span"} textDecoration={"line-through"}>
            {product.strikedPrice}
          </Text>
        </Text>
        <Text
          pl={"10px"}
          color="#5ac265"
          fontSize="12px"
          fontWeight={600}
          lineHeight="16px"
        >
          {product.discount}% off
        </Text>
      </Flex>
      <Box>
        <Flex
          position={"absolute"}
          bottom={1}
          left={0}
          right={0}
          marginLeft="10px"
          marginRight="10px"
          height={"40px"}
          // paddingBottom={"5px"}
          flexDirection={"row"}
          justifyContent="space-between"
          alignItems={"center"}
          borderRadius={"2px"}
          fontWeight={"bold"}
          fontSize="14px"
        >
          <Flex justifyContent="flex-start" alignItems={"center"}>
            {/* <BiRupee fontSize={"16px"} /> */}

            <Text fontSize={"16px"}> {product.price}</Text>
          </Flex>
          <Stack>
            {!itemIdsFromCart.includes(product._id) ? (
              <AddToCartBtn
                key={product._id}
                onClick={() => handleAddToCart(product)}
              >
                <Flex>
                  <CartPlusIcon className="fa-solid fa-cart-plus"></CartPlusIcon>
                  ADD
                </Flex>
              </AddToCartBtn>
            ) : (
              <Flex>
                <Button
                  // disabled={cartProduct.productCount === 1}
                  bg={"white"}
                  _hover={{ bg: "white" }}
                  borderRadius="90%"
                  onClick={() => handleDecreaseCartProudct(cartProduct)}
                >
                  <GrSubtractCircle fontSize="1.5rem" cursor={"pointer"} />
                </Button>
                <Text mt={"10px"}>{cartProduct.productCount}</Text>

                <Button
                  disabled={cartProduct.productCount === 5}
                  bg={"white"}
                  _hover={{ bg: "white" }}
                  borderRadius="90%"
                  onClick={() => handleIncreaseCartProudct(cartProduct)}
                >
                  <IoIosAddCircle
                    fontSize="1.5rem"
                    color="#ff6f61"
                    cursor={"pointer"}
                  />
                </Button>
              </Flex>
            )}
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};

export default AllProduct;

const AddToCartBtn = styled.button`
  border-radius: 15px;
  background-color: #fff;
  color: #ff6f61;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  padding: 6px 16px;
  outline: 0;
  border: 1px solid #ff6f61;
  min-width: 80px;
  &:hover {
    background-color: #ff6f61;
    color: #fff;
  }
`;

const CartPlusIcon = styled.i`
  margin-right: 5px;
`;

const CartDec = styled.button`
  background-color: #fff;
  outline: 0;
  font-size: 10px;
  padding: 5px 7px 4px 9px;
  color: #ff6f61;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  border: 1px solid #ff6f61;
  &:hover {
    background-color: #ff6f61;
    color: #fff;
  }
`;

const CartInc = styled.button`
  background-color: #fff;
  outline: 0;
  font-size: 10px;
  padding: 5px 9px 4px 7px;
  color: #ff6f61;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  border: 1px solid #ff6f61;
  &:hover {
    background-color: #ff6f61;
    color: #fff;
  }
`;

const CardCount = styled.div`
  width: 30px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  padding-top: 4px;
  text-align: center;
`;

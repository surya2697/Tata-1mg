import React from 'react'
import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Image,
  Select,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { BiRupee } from "react-icons/bi";
import { useEffect } from 'react';
import { getSingleProduct } from '../../Redux/Products/actions'
import { useSelector,useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom';



const SingleProducts = () => {
   const {singleProduct}=useSelector((state)=>state.singleProduct)
    const dispatch=useDispatch()
    const {id}=useParams()
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

    useEffect(()=>{
        dispatch(getSingleProduct(id))
    },[dispatch,id])
    const productAvailableInCart = (
        (el) => el._id == singleProduct._id
      );
    return (
        <>
        {
          
            
                <div>
          <Flex key={singleProduct._id}
            direction={isLargerThan768 ? "row" : "column"}
            position={"relative"}
            bg={"white"}
            left="0"
            justifyContent="space-between"
            alignItems={"center"}
            

          >
            <Flex
              bg={"white"}
              h={"400px"}
              w={"400px"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Image
                src={singleProduct.imageUrl}
                h={"400px"}
                w={"300px"}
                p="50"
                m={"50"}
              ></Image>
            </Flex>
            <Box bg={"white"} h={"400px"} w={"400px"}>
              <Text
                marginTop={"30px"}
                marginLeft={"10px"}
                fontSize="20px"
                fontWeight={"bold"}
                lineheight="22px"
                color={"#212121"}
              >
                {singleProduct.productName}
              </Text>
              <Text
                marginTop={"10px"}
                marginLeft={"10px"}
                fontSize="12px"
                fontWeight={"400"}
                lineheight="17px"
                color={"#ff6f61"}
              >
                {singleProduct.brand}
              </Text>
              <Flex
                marginTop={"10px"}
                left="0"
                flexDirection={"row"}
                justifyContent="flex-start"
                alignItems={"center"}
              >
                <Box
                  marginLeft={"10px"}
                  paddingLeft={"2px"}
                  flexDirection={"row"}
                  justifyContent="flex-start"
                  alignItems={"center"}
                  borderRadius={"2px"}
                  bg={"#1aab2a"}
                  color={"white"}
                  fontWeight={"bold"}
                  fontSize="14px"
                >
                  {singleProduct.ratings}
                  <StarIcon marginTop={"-3px"} color={"white"} fontSize="12px" />
                </Box>
                <Text marginLeft={3} fontSize="12px" color={"#1aab2a"}>
                  {singleProduct.numberOfRatings}
                </Text>
              </Flex>
              <Box>
                <Text
                  marginTop={"10px"}
                  marginLeft={"10px"}
                  fontSize="18px"
                  fontWeight={"bold"}
                  lineheight="22px"
                  color={"#212121"}
                >
                  Product highlights
                </Text>
                {singleProduct.prodHighlights?.split("\n").map((ele, i) => {
                  return (
                    <Text
                      marginTop={"10px"}
                      key={i}
                      color="#212121"
                      lineheight={"20px"}
                      fontWeight="400"
                      fontSize={"14px"}
                    >
                      {ele}
                    </Text>
                    
                  );
                })}
               
                
              </Box>
            </Box>
            <Box
              bg={"white"}
              h={"300px"}
              w={"350px"}
              mr={"5px"}
              borderRadius={"10px"}
              boxShadow="0 1px 2px 1px rgb(0 0 0 / 30%)"
            >
              <Flex
                bg={"#edf9ee"}
                w={"100%"}
                h={"40px"}
                alignItems={"center"}
                borderTopLeftRadius={"10px"}
                borderTopRightRadius={"10px"}
              >
                <Image
                  src="https://www.1mg.com/images/social_cue.svg"
                  ml={"10px"}
                  w={"20px"}
                  h={"10px"}
                ></Image>
                <Text
                  ml={"10px"}
                  fontSize={"12px"}
                  fontWeight={"400"}
                  lineheight={"17px"}
                >
                  385 people bought this recently
                </Text>
              </Flex>
              <Flex
                justifyContent={"flex-start"}
                alignItems={"center"}
                fontFamily={"Clear Sans"}
                mt={"10px"}
              >
                <input
                  style={{ marginLeft: "15px", height: "20px", width: "20px" }}
                  name="pcheck"
                  defaultChecked={true}
                  value={singleProduct.price}
                  type="radio"
                />
                <BiRupee
                  color={"#3b3b3b"}
                  fontWeight={"500"}
                  lineheight={"33px"}
                  fontSize={"23px"}
                  ml={"10px"}
                />
                <Text
                  color={"#3b3b3b"}
                  fontWeight={"500"}
                  lineheight={"33px"}
                  fontSize={"23px"}
                >
                  {singleProduct.price}
                </Text>
                <Text
                  color={"#666666"}
                  textDecoration={"line-through"}
                  fontWeight={"400"}
                  lineheight={"23px"}
                  fontSize={"16px"}
                  ml={"10px"}
                >
                  {singleProduct.strikedPrice}
                </Text>
                <Text
                  bg={"#edf9ee"}
                  color={"#1aab2a"}
                  fontWeight={"400"}
                  lineheight={"23px"}
                  fontSize={"16px"}
                  ml={"10px"}
                >
                  {singleProduct.discount}% off
                </Text>
              </Flex>
              <Flex
                justifyContent={"flex-start"}
                alignItems={"center"}
                fontFamily={"Clear Sans"}
                mt={"10px"}
              >
                <Box>
                  <input
                    style={{ marginLeft: "15px", height: "20px", width: "20px" }}
                    type="radio"
                    name="pcheck"
                    value={singleProduct.price}
                  />
                </Box>
                <Box>
                  <Flex
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    fontFamily={"Clear Sans"}
                    mt={"10px"}
                  >
                    <BiRupee
                      color={"#3b3b3b"}
                      fontWeight={"500"}
                      lineheight={"33px"}
                      fontSize={"23px"}
                      ml={"10px"}
                    />
                    <Text
                      color={"#3b3b3b"}
                      fontWeight={"500"}
                      lineheight={"33px"}
                      fontSize={"23px"}
                    >
                      {singleProduct.price}
                    </Text>
                    <Text
                      color={"#666666"}
                      fontWeight={"400"}
                      lineheight={"23px"}
                      fontSize={"16px"}
                      ml={"10px"}
                    >
                      {" "}
                      + free shipping and 5% Extra
                    </Text>
                  </Flex>
                  <Flex>
                    <Text
                      color={"#666666"}
                      fontWeight={"400"}
                      lineheight={"23px"}
                      fontSize={"16px"}
                      ml={"10px"}
                    >
                      cashback with
                    </Text>
                    <Image
                      h={"18px"}
                      src="https://res.cloudinary.com/du8msdgbj/image/upload/v1613645053/marketing/phb2bz61etrdmuurfdoq.png"
                    ></Image>
                    <Image src="https://img.1mg.com/images/info_icon.svg"></Image>
                  </Flex>
                </Box>
              </Flex>
              <Text
                mt={"20px"}
                color={"#666666"}
                fontWeight={"400"}
                lineheight={"17px"}
                fontSize={"12px"}
                ml={"20px"}
                fontFamily={"Helvetica, Arial"}
              >
                Inclusive of all taxes
              </Text>
              <Flex justifyContent={"center"} alignItems={"center"}>
            <Button
              key={singleProduct?.id}
             
            
              bottom={"20"}
              position={"absolute"}
              w={"18%"}
              background={"#ff6f61"}
              color={"white"}
              _hover={{ backgroundColor: "#fa5344" }}
              _active={{ backgroundColor: "#fa5344" }}
              loadingText="ADDING..."
            >
              {productAvailableInCart
                ? "Product Present In Cart"
                : "ADD TO CART"}
            </Button>
          </Flex>
            </Box>
          </Flex>
          <Box>
                <Text
                  marginTop={"10px"}
                  marginLeft={"20px"}
                  fontSize="18px"
                  fontWeight={"bold"}
                  lineheight="22px"
                  color={"#212121"}
                >
                  Product Description
                </Text>
                {singleProduct.longDesc?.split("\n").map((ele, i) => {
                  return (
                    <Text
                      marginTop={"10px"}
                      marginLeft={"30px"}
                      width={"80%"}
                      key={i}
                      color="#212121"
                      lineheight={"20px"}
                      fontWeight="400"
                      fontSize={"14px"}
                    >
                      {ele}
                    </Text>
                    
                  );
                })}
               
                
              </Box>
        </div>
            
        }
        </>
      );
}

export default SingleProducts

import {
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Select,
    Spinner,
    Text,
    Image,
    CartPlusIcon
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { getProducts } from "../../Redux/Products/actions";
  import { Link, useParams } from "react-router-dom";
  import { BiRupee } from "react-icons/bi";
  const ProductList = ({products}) => {
    const dispatch = useDispatch();
   
    useEffect(() => {
      dispatch(getProducts());
    }, [dispatch]);
    return (
      <div style={{ width: "100%" }}>
        <Flex>
          <Box>
            <Flex
              flexDirection={"column"}
              width={{ md: "180px" }}
              display={{ base: "none", sm: "block" }}
            >
              <div
                style={{
                  padding: "15px",
                  borderBottom: "1px solid silver",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                FILTER
              </div>
  
              <div style={{ padding: "15px", borderBottom: "1px solid silver" }}>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  BRANDS
                </div>
                
                
                    <div
                      
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontSize: "12px",
                        paddingTop: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <input
                          type="checkbox"
                          style={{ width: "15px", height: "15px" }}
                        />
                        <p style={{ paddingLeft: "10px" }}></p>
                      </div>
                      <p></p>
                    </div>
             
                
              </div>
  
              <div style={{ padding: "15px" }}>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  DISCOUNTS
                </div>
  
                
               
                    <div
                      
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontSize: "12px",
                        paddingTop: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <input
                          type="radio"
                          name="discount"
                          
                          style={{ width: "15px", height: "15px" }}
                        />
                        <p style={{ paddingLeft: "10px" }}> % and above</p>
                      </div>
                    </div>
                 
                
              </div>
              <Button >Reset Filters</Button>
            </Flex>
          </Box>
          <Box>
            <Flex
              justifyContent="space-evenly"
              padding="1rem"
              alignItems="center"
            >
              <Flex gap="1rem" alignItems="center" justifyContent="center">
                <Text margin="auto" width="100%">
                  Sort By
                </Text>
                <Select  width="100%">
                  <option value="rel">Relevance</option>
                  <option value="plth">Price: Low to High</option>
                  <option value="phtl">Price: High to Low</option>
                  <option value="rlth">Rating: Low to High</option>
                  <option value="rhtl">Rating: High to Low</option>
                </Select>
              </Flex>
            </Flex>
              <Grid
                width={"100%"}
                templateColumns={[
                  "repeat(1, 1fr)",
                  "repeat(3, 1fr)",
                  "repeat(4, 1fr)",
                ]}
                gap={4}
              >
                {
                    products &&
                    products.map((ele)=>(
                        <Box key={ele._id}
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
                          <Link to={`/products/${ele._id}`} style={{ textDecoration: "none" }}>
                            <Image
                              src={ele.imageUrl}
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
                          {ele.productName}
                        </Box>
                        <Text
                          fontSize="12px"
                          fontWeight={"400"}
                          lineHeight="17px"
                          color={"#757575"}
                        >
                          {ele.shortDesc}
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
                            {ele.ratings}{" "}
                            {/* <StarIcon marginTop={"-3px"} color={"white"} fontSize="10px" /> */}
                          </Box>
                          <Text marginLeft={3} fontSize="12px">
                            {ele.numberOfRatings}
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
                              {ele.strikedPrice}
                            </Text>
                          </Text>
                          <Text
                            pl={"10px"}
                            color="#5ac265"
                            fontSize="12px"
                            fontWeight={600}
                            lineHeight="16px"
                          >
                            {ele.discount}% off
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
                              <BiRupee
                              color={"#3b3b3b"}
                              fontWeight={"500"}
                              lineheight={"33px"}
                              fontSize={"23px"}
                              ml={"10px"}
                            />
                              <Text fontSize={"16px"}
                              > {ele.price}</Text>
                            </Flex>
                            
                                  <Flex>
                                   
                                    ADD
                                  </Flex>
                               
                             
                                
                                </Flex>
                              
                          
                         
                        </Box>
                      </Box>
                    ))
                }
                            
                </Grid>     
          </Box>
        </Flex>
      </div>
    );
  };
  
  export default ProductList;
  
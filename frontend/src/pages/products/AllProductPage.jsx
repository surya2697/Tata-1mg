import {
  Box,
  Button,
  Flex,
  Grid,
  Select,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByBrandAPI,
  getAllProductsAPI,
  getDiscountProductAPI,
  sortItems,
} from "../../actions/product.actions";
import { AllBrands } from "../../constants/function.constants.js/function.constants";
import AllProduct from "../../Components/allProductCart";

const AllProductPage = () => {
  const { productList } = useSelector((state) => state);
  const { loading, products, filteredProducts } = productList;
  
  const [arr, setArr] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState([]);
  const dispatch = useDispatch();
  const brands = AllBrands(products);

  const discountValues = [10, 15, 20, 25];

  useEffect(() => {
    dispatch(getAllProductsAPI());
  }, [dispatch]);

  const filterByBrand = () => {
    let newProductArr = [];
    if (arr.length) {
      for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if (products[i]["brand"] == arr[j]) {
            newProductArr.push(products[i]);
          }
        }
      }
      dispatch(filterByBrandAPI(newProductArr));
    } else {
      dispatch(filterByBrandAPI(products));
    }
  };

  useEffect(() => {
    setFilteredProductList(filteredProducts);
  }, [productList]);

  useEffect(() => {
    filterByBrand();
  }, [arr]);

  const filterByBrandHandler = (e) => {
    if (e.target.checked) {
      setArr([...arr, e.target.value]);
    } else {
      let temp = arr.filter((el) => el !== e.target.value);
      setArr(temp);
    }
  };

  const onDicountFilterHanlde = (e) => {
    dispatch(getDiscountProductAPI(Number(e.target.value - 1)));
  };

  const handleSort = (e) => {
    dispatch(sortItems(e.target.value));
  };

  const handleResetFilters = (e) => {
    dispatch(getDiscountProductAPI(0));
  };

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
              {brands.map((el, i) => {
                return (
                  <div
                    key={i}
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
                        value={el.name}
                        onChange={filterByBrandHandler}
                        style={{ width: "15px", height: "15px" }}
                      />
                      <p style={{ paddingLeft: "10px" }}>{el.name}</p>
                    </div>
                    <p>{el.count}</p>
                  </div>
                );
              })}
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

              {discountValues.map((el, index) => {
                return (
                  <div
                    key={index}
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
                        value={el}
                        onChange={onDicountFilterHanlde}
                        style={{ width: "15px", height: "15px" }}
                      />
                      <p style={{ paddingLeft: "10px" }}>{el} % and above</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <Button onClick={() => handleResetFilters()}>Reset Filters</Button>
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
              <Select onChange={handleSort} width="100%">
                <option value="rel">Relevance</option>
                <option value="plth">Price: Low to High</option>
                <option value="phtl">Price: High to Low</option>
                <option value="rlth">Rating: Low to High</option>
                <option value="rhtl">Rating: High to Low</option>
              </Select>
            </Flex>
          </Flex>

          {loading ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
              marginLeft="100%"
              marginTop="50%"
            />
          ) : (
            <Grid
              width={"100%"}
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              gap={4}
            >
              {filteredProductList.map((el, i) => (
                <AllProduct product={el} key={i} />
              ))}
            </Grid>
          )}
        </Box>
      </Flex>
    </div>
  );
};

export default AllProductPage;

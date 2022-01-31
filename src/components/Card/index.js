import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { getProductImagesAsync } from "../../redux/productImages/productImagesSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

let filtered=[];
function Card({item}) {

  const dispatch = useDispatch();
  const productImages = useSelector((state) => state.productImages.productImages);
  const property = {
    imageUrl: "https://picsum.photos/200/300",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 3,
  };

  filtered = productImages;
  if (item.id !== 0) {
    filtered = productImages.filter(
      (productImage) => productImage.product.id===item.id
    );
  }

  console.log(item)
  console.log(filtered)


  return (
    
    <div>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p="5"
      >
        <Link to={`/product/${item.id}`}>
        <img className='align-middle  ' src='https://cdn.dsmcdn.com/ty175/product/media/images/20210915/17/130231322/236341564/1/1_org.jpg'></img>
        </Link>

        <Box p="3">
          <Box d="flex" fontWeight="bold" alignItems="baseline" className=" h5  row justify-content-md-left">
          {item.productName}
          </Box>
          <Box mt="1" fontWeight="semiBold" as="h4" lineHeight="tight" className="   row justify-content-md-left">
            {item.description}
          </Box>
          <Box mt="1" fontWeight="Bold" as="h4" lineHeight="tight" className=" h5  row justify-content-md-left">
            {item.unitPrice} TL
          </Box>
          {/* <Button colorScheme="teal" size="xs">
            Add To Cart
          </Button> */}
        </Box>
      </Box>
    </div>
    
  );
}

export default Card;

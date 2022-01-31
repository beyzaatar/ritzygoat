import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAsync } from "../../redux/products/productsSlice";
import { useEffect } from "react";
import { getProductImagesAsync } from "../../redux/productImages/productImagesSlice";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Size from "../../components/Size/index"
import Color from "../../components/Color/index";
import Gender from "../../components/Gender";

let filtered = [];
let prices = []

function Products() {
  const dispatch = useDispatch();
  const productImages = useSelector((state) => state.productImages.productImages);

  function compareNumbers(a, b) {
    return a - b;
  }

  const currentCategory = useSelector(
    (state) => state.products.currentCategory1
  );
  // const currentSize = useSelector(
  //   (state) => state.products.currentSize
  // );
  const products = useSelector((state) => state.products.products);
  // filtered = productImages;
  // if (product.id !== 0) {
  //   filtered = productImages.filter(
  //     (productImage) => productImage.product.id===item.id
  //   );
  // }

  filtered = products;
  if (currentCategory !== 0) {
    filtered = products.filter(
      (item) => item.categoryLevel1.id === currentCategory
    );
  }

  // if (c !== 0) {
  //   filtered = products.filter(
  //     (item) => item.categoryLevel1.id === currentCategory
  //   );
  // }


  //console.log(currentSize)


  //console.log(products.filter((product)=>product.size.sizeName==="XS"));

  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProductImagesAsync());
  }, [dispatch]);

  const handleClick = () => {
    products.map((item) => prices.push(item.unitPrice))
    console.log(prices.sort(compareNumbers))
  }



  return (

    <div className='container '>
      <div className='row d-flex flex-wrap w-100'>
        <div className='ms-3 mb-3 d-block shadow p-1 mb-5 bg-body rounded '>
          <div className="container">
            <div className="d-flex justify-content-between position-relative  align-items-center">
              <div className="bg-dark text-white  ">
                <button className=" d-flex position-relative  align-items-center text-left border ps-5 pe-5 pt-3 pb-3 " data-bs-toggle="modal" data-bs-target="#exampleModal">Filters</button>
                <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg ">
                    <div className="modal-content ">
                      <div className="modal-header">
                        <p className="modal-title h5 text-dark" id="exampleModalLabel">FILTERS</p>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body ">
                        <Tabs size='md' variant='enclosed'>
                          <TabList className="bg-white">
                            <Tab _selected={{ bg: 'gray.100' }} className="text-dark h6">PRODUCT GROUP</Tab>
                            <Tab _selected={{ bg: 'gray.100' }} className="text-dark h6">BRAND</Tab>
                            <Tab _selected={{ bg: 'gray.100' }} className="text-dark h6">TYPE OF PRODUCT</Tab>
                            <Tab _selected={{ bg: 'gray.100' }} className="text-dark h6">SIZE</Tab>
                            <Tab _selected={{ bg: 'gray.100' }} className="text-dark h6">COLOR</Tab>
                            <Tab _selected={{ bg: 'gray.100' }} className="text-dark h6">GENDER</Tab>
                          </TabList>
                          <TabPanels className="bg-light">
                            <TabPanel className="text-dark">
                              <div className="container">
                                <div className="row g-3">
                                  <div className="col-4">
                                    <div className="p-3 ">
                                      <div className=" form-check  mt-2 mb-2">
                                        <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="h6 form-check-label d-flex align-items-center d-flex position-relative" for="flexCheckDefault">
                                          HandBags
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <div className="p-3 ">
                                      <div className="form-check  mt-2 mb-2">
                                        <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="h6 form-check-label d-flex align-items-center d-flex position-relative" for="flexCheckDefault">
                                          Shoes
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <div className="p-3 ">
                                      <div className="form-check  mt-2 mb-2">
                                        <input className="form-check-input  " type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="h6 form-check-label d-flex align-items-center d-flex position-relative" for="flexCheckDefault">
                                          Clothing
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <div className="p-3 ">
                                      <div className="form-check mb-2 mt-2">
                                        <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="h6 form-check-label d-flex align-items-center d-flex position-relative" for="flexCheckDefault">
                                          Accessories
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </TabPanel>
                            <TabPanel className="text-dark">
                              <div className="container">
                                <div className="row g-3">
                                  <div className="col-4">
                                    <div className="p-3 ">
                                      <div className=" form-check  mt-2 mb-2">
                                        <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="h6 form-check-label d-flex align-items-center d-flex position-relative" for="flexCheckDefault">
                                          Zara
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <div className="p-3 ">
                                      <div className="form-check  mt-2 mb-2">
                                        <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="h6 form-check-label d-flex align-items-center d-flex position-relative" for="flexCheckDefault">
                                          Mango
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <div className="p-3 ">
                                      <div className="form-check mt-2 mb-2">
                                        <input className="form-check-input  " type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="h6 form-check-label d-flex align-items-center d-flex position-relative" for="flexCheckDefault">
                                          H&M
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <div className="p-3 ">
                                      <div className="form-check mb-2 mt-2">
                                        <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="h6 mt-1 form-check-label d-flex align-items-center d-flex position-relative" for="flexCheckDefault">
                                          Calvin Klein
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </TabPanel>
                            <TabPanel className="text-dark">
                              <div className="container">
                                <div className="row g-3">
                                  <div className="col-4">
                                    <div className="p-3 ">
                                      <div className=" form-check  mt-2 mb-2">
                                        <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="h6 form-check-label d-flex align-items-center d-flex position-relative" for="flexCheckDefault">
                                          CrossBody Bags
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <div className="p-3 ">
                                      <div className="form-check  mt-2 mb-2">
                                        <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="h6 form-check-label d-flex align-items-center d-flex position-relative" for="flexCheckDefault">
                                          Shoulder Bags
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <div className="p-3 ">
                                      <div className="form-check  mt-2 mb-2">
                                        <input className="form-check-input  " type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="h6 form-check-label d-flex align-items-center d-flex position-relative" for="flexCheckDefault">
                                          Heels
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <div className="p-3 ">
                                      <div className="form-check mb-2 mt-2">
                                        <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="h6 mt-1 form-check-label d-flex align-items-center d-flex position-relative" for="flexCheckDefault">
                                          Sneakers
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </TabPanel>
                            <TabPanel className="text-dark">
                              <Size />
                            </TabPanel>
                            <TabPanel className="text-dark">
                              <Color />
                            </TabPanel>
                            <TabPanel className="text-dark">
                              <Gender />
                            </TabPanel>
                          </TabPanels>
                        </Tabs>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-dark " data-bs-dismiss="modal">Apply Filter</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-block w-100">
                <p className="h2 text-center w-100">Woman</p>
                <div className="d-block">
                  <ol className="d-inline-block overflow-hidden d-flex flex-row flex-wrap position-relative justify-content-center list-unstyled text-nowrap">
                    <li className="d-inline-block list-unstyled text-nowrap">
                      <a className="text-decoration-none text-nowrap ">
                        <span className="text-nowrap">Home Page/</span>
                      </a>
                    </li>
                    <li className="text-secondary text-nowrap list-unstyled">
                      <span className="text-nowrap">Woman</span>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="d-block w-25" >
                <select className="form-select bg-dark text-white ps-3 pe-2 pt-3 pb-3" aria-label="Default select example" > 
                  <option selected>Smart Sorting</option>
                  <option value="1">New Products</option>
                  <option value="2">Increasing by Price</option>
                  <option value="3">Descending by Price</option>
                </select>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row d-flex flex-wrap mt-2'>
        <div className='d-flex flex-wrap'></div>
        {products.map((product) => (
          <div className='d-flex d-block col-sm-4 col-md-4 col-lg-4 ' key={product.id}>
            <div className='me-2 mb-3 ms-2'>
              <div className='position-relative d-block'>
                <div className='position-relative d-block'>
                  <a href={`/product/${product.id}`} className='text-decoration-none'>
                    <img className='d-block' src="https://cdn.beymen.com/mnresize/381/530/productimages/zeqtaqou.1oi_IMG_02_2110083577905.jpg"></img>
                  </a>
                </div>
                <div className='position-relative overflow-hidden p-1 d-block bg-light'>
                  <a className='text-decoration-none'>
                    <p className='h3'>{product.productName}</p>
                  </a>
                  <a className='text-decoration-none'>
                    <span className='d-block d-flex align-items-center'>
                      {product.description}
                    </span>
                  </a>
                  <a className='text-decoration-none'>
                    <p className='h3'>{product.unitPrice} TL</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    // <div className="container">
    //   <div className="row justify-content-md-center mt-3 ">
    //     <div className="col-20 col-md-20 col-lg-20 bg-light mt-3 me-4 p-5 border">
    //       <Filters />
    //       <Divider />

    //       <Grid templateColumns="repeat(3, 1fr)" gap={3}>
    //         {products.map((product) => (
    //           <div
    //             className="col-20 col-md-20 col-lg-20 bg-white mt-5 me-4 p-5 border"
    //             key={product.id}
    //           >
    //             <Card item={product} />
    //           </div>
    //         ))}
    //       </Grid>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Products;

import React from "react";
import { useBasket } from "../../contexts/BasketContext";
import { Image, Divider, Grid, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function CartSummary() {
  const user = JSON.parse(localStorage.getItem("user"));

  const { items } = useBasket();
  const total = items.reduce((acc, obj) => acc + obj.data.unitPrice, 0);

  return (
    <div className=" col mt-5">
            <div className="bg-light p-5 border">
              <div className="d-flex justify-content-between border-bottom pb-2 pt-1">
                <p className="h5">SHOPPING SUMMARY</p>
              </div>
              <div className="border-bottom pt-2 pb-1 mb-3">
                <div className="overflow-auto h-25" style={{ "max-width": "280px" }}>
                {items.map((item, index) => (
                  <div key={index} className="d-flex mb-1">
                    <figure className="figure overflow-hidden  d-block mh-50 flex-shrink-0 w-25">
                      <img src="https://cdn.dsmcdn.com/ty175/product/media/images/20210915/17/130231322/236341564/1/1_org.jpg" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                    <div className="d-flex flex-wrap align-content-space-between pt-1 pb-1 ps-1">
                      <div className="d-flex flex-column ms-2">
                        <strong className="mb-1 ">{item.data.productName}</strong>
                        <span>{item.data.description}</span>
                      </div>
                      <div className="d-flex flex-column justify-content-space-between w-100">
                        <ul className="d-flex list-unstyled mb-1 ms-2">
                          <li className="border-end text-center">
                            Size:
                            <span className="me-2 ms-2">{item.data.size.sizeName}</span>
                          </li>
                          <li className=" ms-2 text-center">
                            Number:
                            <span>1</span>
                          </li>
                        </ul>
                        <div className="ms-2 mt-2 h6">{item.data.unitPrice} TL</div>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
              </div>
              <div>
                <ul>
                  <li className="d-flex justify-content-between">
                    <span>TOTAL AMOUNT (INCLUDING VAT)</span>
                    <span>
                      <strong>{total} TL</strong>
                    </span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Total Discount Amount</span>
                    <span>
                      <strong>0 TL</strong>
                    </span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Shipping cost</span>
                    <span>
                      <strong>0 TL</strong>
                    </span>
                  </li>
                  <br></br>
                  <hr className=" container row justify-content-center hr-text" />
                  <li className="d-flex justify-content-between mt-2">
                    <span>Amount to be paid</span>
                    <span>
                      <strong>{total}</strong>
                    </span>
                  </li>                  
                </ul>
              </div>
            </div>
          </div>
  );
}

export default CartSummary;

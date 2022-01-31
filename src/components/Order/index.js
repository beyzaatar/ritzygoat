import React from 'react'
import { Box } from "@chakra-ui/react"
import CustomerProfile from "../../components/CustomerProfile"

function Order() {
    return (
        <div className='container'>
            <CustomerProfile/>
            <div className=' p-4 container mt-5'>
                <div className='border-bottom  d-flex justify-content-between'>
                    <div className='d-flex flex-column'>
                        Order Date
                        <b>1 Ocak 2022 - 20:13</b>
                    </div>
                    <div className='d-flex flex-column'>
                        Order Summary
                        <b>1 Delivery, 2 Items</b>
                    </div>
                    <div className='d-flex flex-column'>
                        Buyer
                        <b>Beyza ATAR</b>
                    </div>
                    <div className='d-flex flex-column'>
                        Amount
                        <b>185,86 TL</b>
                    </div>
                    <a className='d-flex flex-column' href='/order/detail'>
                        <button type="button" class="btn btn-dark">Order Detail</button>
                    </a>
                </div>
                <div className='border border-dark p-3 mt-5 container d-flex justify-content-between'>
                    <div className='d-flex flex-column'>
                        <span className='text-success'>Was delivered</span>
                        <span><b>11 products were delivered on January 1st.</b></span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <a className='border w-25 m-2 d-flex justify-content-center align-items-center'>
                            <img src='https://cdn.dsmcdn.com/ty162/product/media/images/20210823/17/121637593/171128315/1/1_org.jpg'></img>
                        </a>
                        <a className='border w-25  d-flex justify-content-center align-items-center'>
                            <img src='https://cdn.dsmcdn.com/ty175/product/media/images/20210915/17/130231322/236341564/1/1_org.jpg'></img>
                        </a>
                        <span className='d-flex align-items-center w-25 m-3 text-secondary'>+3 products</span>
                    </div>
                </div>
            </div>

            <div className=' p-4 container'>
                <div className='border-bottom  d-flex justify-content-between'>
                    <div className='d-flex flex-column'>
                        Order Date
                        <b>1 Ocak 2022 - 20:13</b>
                    </div>
                    <div className='d-flex flex-column'>
                        Order Summary
                        <b>1 Delivery, 2 Items</b>
                    </div>
                    <div className='d-flex flex-column'>
                        Buyer
                        <b>Beyza ATAR</b>
                    </div>
                    <div className='d-flex flex-column'>
                        Amount
                        <b>185,86 TL</b>
                    </div>
                    <a className='d-flex flex-column'>
                        <button type="button" class="btn btn-dark">Order Detail</button>
                    </a>
                </div>
                <div className='border border-dark p-3 mt-5 container d-flex justify-content-between'>
                    <div className='d-flex flex-column'>
                        <span className='text-success'>Was delivered</span>
                        <span><b>11 products were delivered on January 1st.</b></span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <a className='border w-25 m-2 d-flex justify-content-center align-items-center'>
                            <img src='https://cdn.dsmcdn.com/ty162/product/media/images/20210823/17/121637593/171128315/1/1_org.jpg'></img>
                        </a>
                        <a className='border w-25  d-flex justify-content-center align-items-center'>
                            <img src='https://cdn.dsmcdn.com/ty175/product/media/images/20210915/17/130231322/236341564/1/1_org.jpg'></img>
                        </a>
                        <span className='d-flex align-items-center w-25 m-3 text-secondary'>+3 products</span>
                    </div>
                </div>              
            </div>

            <div className=' p-4 container'>
                <div className='border-bottom  d-flex justify-content-between'>
                    <div className='d-flex flex-column'>
                        Order Date
                        <b>1 Ocak 2022 - 20:13</b>
                    </div>
                    <div className='d-flex flex-column'>
                        Order Summary
                        <b>1 Delivery, 2 Items</b>
                    </div>
                    <div className='d-flex flex-column'>
                        Buyer
                        <b>Beyza ATAR</b>
                    </div>
                    <div className='d-flex flex-column'>
                        Amount
                        <b>185,86 TL</b>
                    </div>
                    <a className='d-flex flex-column'>
                        <button type="button" class="btn btn-dark">Order Detail</button>
                    </a>
                </div>
                <div className='border border-dark p-3 mt-5 container d-flex justify-content-between'>
                    <div className='d-flex flex-column'>
                        <span className='text-success'>Was delivered</span>
                        <span><b>11 products were delivered on January 1st.</b></span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <a className='border w-25 m-2 d-flex justify-content-center align-items-center'>
                            <img src='https://cdn.dsmcdn.com/ty162/product/media/images/20210823/17/121637593/171128315/1/1_org.jpg'></img>
                        </a>
                        <a className='border w-25  d-flex justify-content-center align-items-center'>
                            <img src='https://cdn.dsmcdn.com/ty175/product/media/images/20210915/17/130231322/236341564/1/1_org.jpg'></img>
                        </a>
                        <span className='d-flex align-items-center w-25 m-3 text-secondary'>+3 products</span>
                    </div>
                </div>

                
            </div>
<br></br>

        </div>
    )
}

export default Order

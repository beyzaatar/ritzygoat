import React from 'react'

function OrderDetail() {
    return (
        <div className='container'>
            <div className='border-bottom  d-flex justify-content-around'>
                <div className='d-flex flex-column'>
                    Order Date
                    <b>1 Ocak 2022 - 20:13</b>
                </div>
                <div className='d-flex flex-column'>
                    Order Summary
                    <b>1 Delivery, 2 Items</b>
                </div>
                <div className='d-flex flex-column'>
                    Order Number
                    <b>997665899</b>
                </div>
                <div className='d-flex flex-column text-success'>
                    <span>11 Delivery</span>

                </div>
            </div>
            <div className=' p-3 mt-3 d-flex flex-row justify-content-between'>
                <div className='border w-50 m-3'>
                    <div className='border-bottom p-3 bg-light'>
                        <span className='h6'>Delivery Information</span>
                    </div>
                    <div className="container d-flex flex-column">
                        <span className='m-3'>beyza atar</span>
                        <span className='m-3'>Kazım Karabekir Mah Kazım Karabekir, Genç Osman Cd. No:82 daire:11</span>
                        <span className='m-3'>Darıca 41000 / Kocaeli</span>
                        <a className='text-secondary m-3'>Update My Order Address</a>
                    </div>
                </div>
                <div className='border  w-50 m-3 '>
                    <div className='border-bottom p-3 bg-light'>
                        <span className='h6'>Payment information</span>
                    </div>
                    <div className="container d-flex flex-column ">
                        <div className='d-flex flex-row justify-content-between mt-3'>
                            <span>Total Price</span>
                            <span className='h6'>231,40 TL</span>
                        </div>
                        <div className='d-flex flex-row justify-content-between mt-3'>
                            <span>Shipping Amount</span>
                            <span className='h6'>4,99 TL</span>
                        </div>
                        <div className='d-flex flex-row justify-content-between mt-3'>
                            <span>Launch Exclusive Discount</span>
                            <span className='h6 text-danger'>-30 TL</span>
                        </div>
                        <div className='d-flex flex-row justify-content-between mt-3'>
                            <span className='h5'>Total</span>
                            <span className='h6 text-success'>206,39 TL</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='border m-3'>
                    <div className='border-bottom bg-light p-3 '>
                        <div className='d-flex'>
                            <div className='d-flex flex-column flex-wrap'>
                                <div className='d-flex align-items-center'>
                                    <span className='h6'>Seller: </span>
                                    <div className='d-flex'>
                                        <span className='text-success h6'> Aziz AVCI</span>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <span className='text-secondary'>Delivery Number: </span>
                                    <span className='text-secondary'>#1380037868</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-3'>
                        <div className='d-flex flex-row justify-content-between'>
                            <div className='d-flex align-items-center'>
                                <span className='text-success h6 mt-2 p-3'>Was delivered</span>
                            </div>
                        </div>
                        <div className='d-flex flex-row justify-content-between align-items-center p-3'>
                            <span>The following 11 items were delivered on Saturday, January 1st. </span>
                        </div>
                        <div className='d-flex flex-row justify-content-between flex-wrap'>
                            <div className='border d-flex flex-row m-3 p-3 '>
                                <div className=' border d-flex justify-content-center align-items-center flex-shrink-0 w-25'>
                                    <img className='align-middle  ' src='https://cdn.dsmcdn.com/ty175/product/media/images/20210915/17/130231322/236341564/1/1_org.jpg'></img>
                                </div>
                                <div className='m-3 d-flex flex-column justify-content-between overflow-hidden'>
                                    <a className='text-decoration-none'>
                                        <span className='h6'>Zara</span>
                                    </a>
                                    <div className='d-flex flex-column flex-wrap'>
                                        <span className=''>Colorful sweater</span>
                                        <span className=''>Size:M</span>
                                    </div>
                                    <span className='h5 text-success'>200 TL</span>
                                </div>
                            </div>

                            <div className='border d-flex flex-row m-3 p-3 '>
                                <div className=' border d-flex justify-content-center align-items-center flex-shrink-0 w-25'>
                                    <img className='align-middle  ' src='https://cdn.dsmcdn.com/ty162/product/media/images/20210823/17/121637593/171128315/1/1_org.jpg'></img>
                                </div>
                                <div className='m-3 d-flex flex-column justify-content-between overflow-hidden'>
                                    <a className='text-decoration-none'>
                                        <span className='h6'>H&M</span>
                                    </a>
                                    <div className='d-flex flex-column flex-wrap'>
                                        <span className=''>Yellow sweater</span>
                                        <span className=''>Size:M</span>
                                    </div>
                                    <span className='h5 text-success'>200 TL</span>
                                </div>
                            </div>

                            <div className='border d-flex flex-row m-3 p-3 '>
                                <div className=' border d-flex justify-content-center align-items-center flex-shrink-0 w-25'>
                                    <img className='align-middle  ' src='https://cdn.dsmcdn.com/ty175/product/media/images/20210915/17/130231322/236341564/1/1_org.jpg'></img>
                                </div>
                                <div className='m-3 d-flex flex-column justify-content-between overflow-hidden'>
                                    <a className='text-decoration-none'>
                                        <span className='h6'>Koton</span>
                                    </a>
                                    <div className='d-flex flex-column flex-wrap'>
                                        <span className=''>White sweater</span>
                                        <span className=''>Size:M</span>
                                    </div>
                                    <span className='h5 text-success'>200 TL</span>
                                </div>
                            </div>
                            <div className='border d-flex flex-row m-3 p-3 '>
                                <div className=' border d-flex justify-content-center align-items-center flex-shrink-0 w-25'>
                                    <img className='align-middle  ' src='https://cdn.dsmcdn.com/ty162/product/media/images/20210823/17/121637593/171128315/1/1_org.jpg'></img>
                                </div>
                                <div className='m-3 d-flex flex-column justify-content-between overflow-hidden'>
                                    <a className='text-decoration-none'>
                                        <span className='h6'>Mango</span>
                                    </a>
                                    <div className='d-flex flex-column flex-wrap'>
                                        <span className=''>Black sweater</span>
                                        <span className=''>Size:M</span>
                                    </div>
                                    <span className='h5 text-success'>200 TL</span>
                                </div>
                            </div>
                            <div className='border d-flex flex-row m-3 p-3 '>
                                <div className=' border d-flex justify-content-center align-items-center flex-shrink-0 w-25'>
                                    <img className='align-middle  ' src='https://cdn.dsmcdn.com/ty175/product/media/images/20210915/17/130231322/236341564/1/1_org.jpg'></img>
                                </div>
                                <div className='m-3 d-flex flex-column justify-content-between overflow-hidden'>
                                    <a className='text-decoration-none'>
                                        <span className='h6'>Mavi</span>
                                    </a>
                                    <div className='d-flex flex-column flex-wrap'>
                                        <span className=''>Blue sweater</span>
                                        <span className=''>Size:M</span>
                                    </div>
                                    <span className='h5 text-success'>200 TL</span>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>
            </div>

        </div>
    )
}

export default OrderDetail

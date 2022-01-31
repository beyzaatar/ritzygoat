import React from 'react'
import { GiConfirmed } from 'react-icons/gi';
import { useBasket } from "../../contexts/BasketContext";

function OrderCreated() {
    const { items } = useBasket();
    const total = items.reduce((acc, obj) => acc + obj.data.unitPrice, 0);
    const orderNumber=(Math.floor(Math.random() * 700000) + 1);
    return (
        <div className='container'>
            <div className=' p-4 container'>
                <div className='border border-success bg-light w-50 mt-5 container d-flex justify-content-center'>
                    <div className='d-flex align-items-center justify-content-center'>
                        <div className=' w-100  h-100 p-5 m-2 d-flex justify-content-center align-items-center'>
                            <div className='d-flex flex-column text-center'>
                                <span className='text-success d-flex justify-content-center h5'><GiConfirmed size={75} /></span>
                                <span className='mt-3'><b className=' h4'>Your Order Received</b></span>
                                <div className='mt-3'>
                                    <span><b className=' text-secondary h4 m-2'>Order Number:</b></span>
                                    <span><b className=' h4'>{orderNumber}</b></span>
                                </div>
                                <div className='mt-3'>
                                    <span><b className=' text-secondary h4 m-2'>Total amount:</b></span>
                                    <span><b className=' h4'>{total} TL</b></span>
                                </div>
                                <div className='mt-3'>
                                    <span><b className=' text-secondary h4 m-2'>Delivery address:</b></span>
                                    <span><b className=' h4'>Güney cad./Darıca/Kocaeli</b></span>
                                </div>
                                <a href='/order' className='text-primary text-decoration-none h4 mt-3 text-center'>See my order information</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderCreated

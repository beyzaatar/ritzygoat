import React from 'react';

function PendingProducts() {
    return (
        <div className='container'>
            <div className=' pb-4  mt-5 border rounded '>
                <div className='border-bottom  d-flex justify-content-between border-0 rounded bg-light p-3'>
                    <div className='d-flex flex-column'>
                        Creation Date
                        <b>25 January 2022 - 16:20</b>
                    </div>
                    <div className='d-flex flex-column'>
                        Number of Product
                        <b> 3 Items</b>
                    </div>
                    <div className='d-flex flex-column'>
                        Seller
                        <b>Beyza ATAR</b>
                    </div>
                    <a className='d-flex flex-column mt-1' href='/pendingProducts/detail'>
                        <button type="button" class="btn btn-dark">Sale Detail</button>
                    </a>
                </div>
                <div className=' d-flex justify-content-between border-0 rounded mt-3'>
                    <div className='d-flex flex-column align-items-center mt-5 ms-2'>
                        <p className=' align-baseline d-flex align-items-center text-warning h5 mt-3'>Waiting for approval...</p>
                    </div>
                    <div className='d-flex flex-column'>
                        <div className='border-0 d-flex flex-row '>
                        <div className=' border d-flex justify-content-center align-items-center flex-shrink-0 w-25 me-3'>
                            <img className='align-middle  ' src='https://static.zara.net/photos///2022/V/0/1/p/4786/349/705/2/w/250/4786349705_2_4_1.jpg?ts=1642605118143'></img>
                        </div>
                        <span className='d-flex align-items-center w-25 ms-2 text-secondary'>+2 products</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PendingProducts;


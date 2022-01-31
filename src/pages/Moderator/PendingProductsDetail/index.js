import React from 'react';

function PendingProductDetail() {
    return (
        <div className='container'>
            <div className='border m-3'>
                <div className='border-bottom bg-light p-3 '>
                    <div className='d-flex'>
                        <div className='d-flex flex-column flex-wrap'>
                            <div className='d-flex align-items-center'>
                                <span className='h5'>Seller Information: </span>
                            </div>
                            <div className="container d-flex flex-column">
                                <span className='m-2 text-success'> Beyza ATAR</span>
                            </div>
                            <div className="container d-flex flex-column">
                                <span className='m-2 '>beyza@gmail.com</span>
                            </div>
                            <div className="container d-flex flex-column">
                                <span className='m-2 '>+905789632145</span>
                            </div>
                            <div className="container d-flex flex-column">
                                <span className='m-2 '>Kazım Karabekir Mah Kazım Karabekir, Genç Osman Cd. No:82 daire:11</span>
                                <span className='m-2 '>Darıca 41000 / Kocaeli</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-3'>

                    <div className='d-flex flex-row justify-content-between border-bottom'>
                        <div className='border-0 d-flex flex-row m-3 p-3 '>
                            <div className=' border  w-25'>
                                <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">
                                    <div className="carousel-inner ">
                                        <div className="carousel-item active ">
                                            <img src="https://static.zara.net/photos///2022/V/0/1/p/4786/349/705/2/w/750/4786349705_2_4_1.jpg?ts=1642605118143" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item ">
                                            <img src="https://static.zara.net/photos///2022/V/0/1/p/4786/349/705/2/w/750/4786349705_2_2_1.jpg?ts=1642605182794" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://static.zara.net/photos///2022/V/0/1/p/4786/349/705/2/w/750/4786349705_2_3_1.jpg?ts=1642605149018" className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <div className='ms-5 d-flex flex-column justify-content-between overflow-hidden'>
                                <a className='text-decoration-none'>
                                    <span className='h4'>Zara</span>
                                </a>
                                <div className='d-flex align-items-center'>
                                    <span className='h6'>Category: </span>
                                    <div className='d-flex'>
                                        <span className=' mb-2'>Women/Clothing/Jackets</span>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <span className='h6'>Color: </span>
                                    <div className='d-flex'>
                                        <span className='mb-2 '>Brown</span>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <span className='h6'>Size: </span>
                                    <div className='d-flex'>
                                        <span className=' mb-2'>M</span>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <span className='h6'>Material: </span>
                                    <div className='d-flex'>
                                        <span className=' mb-2'>Cotton</span>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <span className='h6'>Detailed Information: </span>
                                    <div className='d-flex'>
                                        <span className=' mb-2'>Crop blazer with padded, long sleeves and
                                            a lapel collar. Pleated front, matching color lining and
                                            double-breasted concealed press-studs.</span>
                                    </div>
                                </div>
                            </div>
                            <div className='ms-5 d-flex flex-column justify-content-between overflow-hidden'>
                                <div className='d-flex align-items-center'>
                                    <div className='d-flex'>
                                        <span className='text-warning h6 mt-2 p-3'>Waiting for approval...</span>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <div className='d-flex'>
                                        <button type="button" class="ms-2 btn btn-dark w-100 d-flex flex-column ">APPROVE</button>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <div className='d-flex'>
                                        <a href='/newProduct' >
                                            <button type="button" class="ms-2 btn btn-dark w-100 d-flex flex-column ">EDIT</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-row justify-content-between border-bottom'>
                        <div className='border-0 d-flex flex-row m-3 p-3 '>
                            <div className=' border  w-25'>
                                <div id="carouselExampleFade2" className="carousel slide carousel-fade " data-bs-ride="carousel">
                                    <div className="carousel-inner ">
                                        <div className="carousel-item active ">
                                            <img src="https://static.zara.net/photos///2022/V/0/1/p/4661/325/500/12/w/750/4661325500_1_1_1.jpg?ts=1643019520187" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item ">
                                            <img src="https://static.zara.net/photos///2022/V/0/1/p/4661/325/500/12/w/750/4661325500_2_2_1.jpg?ts=1643019513570" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://static.zara.net/photos///2022/V/0/1/p/4661/325/500/12/w/750/4661325500_2_3_1.jpg?ts=1643019527883" className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade2" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade2" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <div className='ms-5 d-flex flex-column justify-content-between overflow-hidden'>
                                <a className='text-decoration-none'>
                                    <span className='h4'>H&M</span>
                                </a>
                                <div className='d-flex align-items-center'>
                                    <span className='h6'>Category: </span>
                                    <div className='d-flex'>
                                        <span className=' mb-2'>Women/Clothing/Dresses</span>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <span className='h6'>Color: </span>
                                    <div className='d-flex'>
                                        <span className='mb-2 '>Green</span>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <span className='h6'>Size: </span>
                                    <div className='d-flex'>
                                        <span className=' mb-2'>M</span>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <span className='h6'>Material: </span>
                                    <div className='d-flex'>
                                        <span className=' mb-2'>Cotton</span>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <span className='h6'>Detailed Information: </span>
                                    <div className='d-flex'>
                                        <span className=' mb-2'>Square neck dress with padded long sleeves.
                                            Buttons on the front with decorative sparkly stones. Concealed side zipper.</span>
                                    </div>
                                </div>
                            </div>
                            <div className='ms-5 d-flex flex-column justify-content-between overflow-hidden'>
                                <div className='d-flex align-items-center'>
                                    <div className='d-flex'>
                                        <span className='text-success h6 mt-2 p-3'>Product approved</span>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <div className='d-flex'>
                                        <button type="button" class="ms-2 btn btn-dark w-100 d-flex flex-column ">APPROVE</button>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <div className='d-flex'>
                                        <a href='/newProduct' >
                                            <button type="button" class="ms-2 btn btn-dark w-100 d-flex flex-column ">EDIT</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-row justify-content-between border-bottom'>
                        <div className='border-0 d-flex flex-row m-3 p-3 '>
                            <div className=' border  w-25'>
                                <div id="carouselExampleFade3" className="carousel slide carousel-fade " data-bs-ride="carousel">
                                    <div className="carousel-inner ">
                                        <div className="carousel-item active ">
                                            <img src="https://static.zara.net/photos///2022/V/1/1/p/3002/910/040/2/w/750/3002910040_1_1_1.jpg?ts=1643025857571" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item ">
                                            <img src="https://static.zara.net/photos///2022/V/1/1/p/3009/910/202/2/w/750/3009910202_2_6_1.jpg?ts=1643025562094" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://static.zara.net/photos///2022/V/1/1/p/3009/910/202/2/w/750/3009910202_6_4_1.jpg?ts=1642535251746" className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade3" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade3" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <div className='ms-5 d-flex flex-column justify-content-between overflow-hidden'>
                                <a className='text-decoration-none'>
                                    <span className='h4'>Mango</span>
                                </a>
                                <div className='d-flex align-items-center'>
                                    <span className='h6'>Category: </span>
                                    <div className='d-flex'>
                                        <span className=' mb-2'>Women/Shoes/Boot</span>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <span className='h6'>Color: </span>
                                    <div className='d-flex'>
                                        <span className='mb-2 '>Black</span>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <span className='h6'>Size: </span>
                                    <div className='d-flex'>
                                        <span className=' mb-2'>38</span>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <span className='h6'>Material: </span>
                                    <div className='d-flex'>
                                        <span className=' mb-2'>Cotton</span>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <span className='h6'>Detailed Information: </span>
                                    <div className='d-flex'>
                                        <span className=' mb-2'>Contrast colored leather cowboy boots with a pointed toe.
                                            AIRFIT®. Flexible technical synthetic rubber foam insole designed for added comfort.
                                            Heel height 7 cm.</span>
                                    </div>
                                </div>
                            </div>
                            <div className='ms-5 d-flex flex-column justify-content-between overflow-hidden'>
                                <div className='d-flex align-items-left'>
                                    <div className='d-flex'>
                                        <span className='text-danger h6 mt-2 p-3'>Product not approved</span>
                                    </div>
                                </div>
                                <div className='d-flex align-items-left'>
                                    <div className='d-flex'>
                                        <button type="button" class="ms-2 btn btn-dark w-100 d-flex flex-column ">APPROVE</button>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <div className='d-flex'>
                                        <a href='/newProduct' >
                                            <button type="button" class="ms-2 btn btn-dark w-100 d-flex flex-column ">EDIT</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PendingProductDetail;

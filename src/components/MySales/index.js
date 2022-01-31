import React, { useEffect } from 'react'
import commissionsSlice, { getCommissionsAsync } from "../../redux/commissions/commissionsSlice"
import salesSlice, { getSalesAsync } from '../../redux/sales/salesSlice';
import { useSelector, useDispatch } from "react-redux";
import CustomerProfile from "../../components/CustomerProfile"

let filteredCommission = {};
let filteredSale = [];
let amount = 0;
function MySales() {
    const user = JSON.parse(localStorage.getItem("user"))
    const dispatch = useDispatch();
    const commissions = useSelector((state) => state.commissions.commissions);
    const sales = useSelector((state) => state.sales.sales);

    if (user) {
        filteredCommission = commissions.filter(
            (item) => item.user.id === user.id
        );
    }

    if (user) {
        filteredSale = sales.filter(
            (item) => item.user.id === user.id
        );
    }
    useEffect(() => {
        dispatch(getCommissionsAsync());
       
    }, [dispatch]);

    useEffect(() => {
        dispatch(getSalesAsync());
    }, [dispatch]);

  
        const totalSalesAmount = Object(filteredSale[0]).totalSalesAmount;
        const commissionRating = Object(filteredCommission[0]).commissionRating;
        const totalPaid = ((totalSalesAmount * commissionRating) / 100);
        return (
            <div className='container'>
                <CustomerProfile/>
                <div className=' p-4 container'>
                    <div className='border border-dark p-5 mt-5 container d-flex justify-content-center'>
                        <div className='d-flex align-items-center justify-content-center'>
                            <div className='border w-100 bg-light h-100 p-5 m-2 d-flex justify-content-center align-items-center'>
                                <div className='d-flex flex-column'>
                                    <span className='text-success text-center h5'>% {commissionRating}</span>
                                    <span><b className='text-center h6'>Commission Rate</b></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border p-5 mt-5 container d-flex justify-content-center bg-light'>
                        <div className='d-flex align-items-center justify-content-center'>
                            <div className='d-flex align-items-center'>
                                <div className='border-end p-5  d-flex justify-content-center align-items-center'>
                                    <div className='d-flex flex-column'>
                                        <span className='text-success text-center h5'>{totalPaid} TL</span>
                                        <span><b className='text-center h6'>Commission fee to be paid</b></span>
                                    </div>
                                </div>
                                <div className='border border-light p-5  d-flex justify-content-center align-items-center'>
                                    <div className='d-flex flex-column'>
                                        <span className='text-success text-center h5'>{totalSalesAmount} TL</span>
                                        <span><b className='text-center h6'>Total sales fee</b></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default MySales

    // < div >
    // <div className="card text-center" style={{ width: "50rem", justifyContent: "center" }}>
    //     <div className="card-body">
    //         <BsBagFill size="50" />
    //         <h5 className="card-title">YOU DO NOT HAVE FOR SALE YET</h5>
    //         <p className="card-text">Start consigning to view your sales..</p>
    //         <br></br>
    //         <Link href="#" className="btn btn-dark">START SELLING NOW </Link>
    //     </div>
    // </div>
    //     </div >
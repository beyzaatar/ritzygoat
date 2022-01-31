import React from 'react'
import { Route, Switch } from "react-router-dom";
import AddressBook from '../AddressBook';


function CustomerProfile() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <ul className="nav justify-content-center d-flex justify-content-around ">
                        <li className="nav-item  "><a href="/profile" title="Siparişlerim" id="orderBtn">
                            MY PERSONAL INFORMATIONS</a></li>
                        <li className="nav-item "><a href="/addressBook" title="Adreslerim" id="addressBtn">
                            MY ADDRESSES</a></li>
                        <li className="nav-item "><a href="/mySales" title="Adreslerim" id="addressBtn">
                            MY SALES</a></li>
                        <li className="nav-item "><a href="/order" title="Adreslerim" id="addressBtn">
                            MY ORDERS</a></li>
                        <br></br>
                        <hr className="container color-light" />
                    </ul>
                </div>
            </div>
            <div>
                <Switch>
                    <Route exact path={"/address"} component={AddressBook} />
                </Switch>
            </div>
        </div>
    )
}

export default CustomerProfile

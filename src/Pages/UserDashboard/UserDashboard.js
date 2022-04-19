import React from 'react';
import { useState } from 'react';
import { MdApi } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useEffect } from 'react';
import { Switch, Route, useRouteMatch } from "react-router-dom";

import "./UserDashboard.css";
import AddReview from './AddReview/AddReview';
import ManageReview from './ManageReview/ManageReview';

const UserDashboard = () => {
    let { path, url } = useRouteMatch();
    return (




        <div>
            <div className="d-flex" id="wrapper">


                <div className="bg-admin" id="sidebar-wrapper">
                    <div className="sidebar-heading text-center py-4 primary-text fs-5 fw-bold text-uppercase border-bottom">Dashboard</div>
                    <div className="list-group list-group-flush my-3">
                        <Link to="/home" className="list-group-item list-group-item-action bg-transparent second-text active"><MdApi fa-spin className=' fa-spin me-2' />Home</Link>
                        <Link to={`${url}/addReview`} className="list-group-item list-group-item-action bg-transparent second-text active"><MdApi fa-spin className=' fa-spin me-2' />Add Review</Link>
                        <Link to={`${url}/manageReview`} className="list-group-item list-group-item-action bg-transparent second-text active"><MdApi fa-spin className=' fa-spin me-2' />Manage Review</Link>


                    </div>
                </div>



                <div id="page-content-wrapper">


                    <div className='container-fluid'>
                        <Switch>


                            <Route exact path={`${path}/addReview`}>
                                <AddReview></AddReview>
                            </Route>
                            <Route exact path={`${path}/manageReview`}>
                                <ManageReview></ManageReview>
                            </Route>


                            /            </Switch>
                        {/* <h1>Welcome Dzine BD Admin home</h1> */}

                    </div>
                </div>

            </div>

        </div>
    );
};

export default UserDashboard;
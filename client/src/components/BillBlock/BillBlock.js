import React from "react";
import './BillBlock.css';
import { Link } from "react-router-dom";


const BillBlock = (props) => (
    <div>
        <div className="container">
            <div className="row justify-content-md-center border">
                <div className="col md-1">
                    <h3 className="panel-title"><strong><center>Find Congressional Bills That Interest You</center></strong></h3>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-5">
                    <select>
                        <option>Select Topic</option>
                        <option value="Armed Forces and National Security">Armed Forces and National Security</option>
                        <option value="Commerce">Commerce</option>
                        <option value="Energy">Energy</option>
                        <option value="Finance and Financial Sector">Finance and Financial Sector</option>
                        <option value="Government Operations and Politics">Government Operations and Politics</option>
                        <option value="International Affairs">International Affairs</option>
                        <option value="Labor and Employment">Labor and Employment</option>
                    </select>
                </div>
                <div className="col-3">
                    <div className="form-group">
                        <select id="filter-plan">
                            <option>Select Type</option>
                            <option value="Upcoming">Upcoming</option>
                            <option value="Old">Old</option>
                            <option value="Passed">Passed</option>
                            <option value="Fail">Fail</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="card bill">BILL NAME</div>
                    <Link to='/pages/billdetail' ClassName="active">Bill Detail</Link>
                </div>
                <div className="col-4">
                    <div className="card bill">BILL NAME</div>
                </div>
                <div className="col-4">
                    <div className="card bill">BILL NAME</div>
                </div>
            </div>
        </div>
    </div>
);

export default BillBlock;
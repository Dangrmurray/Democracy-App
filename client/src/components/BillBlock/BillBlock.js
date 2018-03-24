import React from "react";
import './BillBlock.css';


const BillBlock = (props) => (

    <div className="container">
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
                        <input type="text" className="form-control" id="bill-type" list="bill-plan" placeholder="Select Bill Topic" />
                        <datalist id="bill-plan">
                            <option value="Armed Forces and National Security"></option>
                            <option value="Commerce"></option>
                            <option value="Energy"></option>
                            <option value="Finance and Financial Sector"></option>
                            <option value="Government Operations and Politics"></option>
                            <option value="International Affairs"></option>
                            <option value="Labor and Employment"></option>
                        </datalist>
                    </div>
                    <div className="col-3">
                        <div className="form-group">
                            <input type="text" className="form-control" id="filter-team" list="filter-plan" placeholder="Bill Filter" />
                            <datalist id="filter-plan">
                                <option value="Upcoming"></option>
                                <option value="Old"></option>
                                <option value="Passed"></option>
                                <option value="Fail"></option>
                            </datalist>
                        </div>
                    </div>

                </div>

            </div>
            
                <div className="container">

                    <div className="col-2"></div>

                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4 border">
                                        <div style="width: 100%; height: 100px;  background-color: gray; text-align:center">BILL NAME</div>
                                    </div>
                                    <div className="col-4 border">
                                        <div style="width: 100%; height: 100%;  background-color: gray; text-align:center">BILL NAME</div>
                                    </div>
                                    <div className="col-4 border">
                                        <div style="width: 100%; height: 100%;  background-color: gray; text-align:center">BILL NAME</div>
                                    </div>
                                    <div className="col-4 border">
                                        <div style="width: 100%; height: 100%;  background-color: gray; text-align:center">BILL NAME</div>
                                    </div>
                                    <div className="col-4 border">
                                        <div style="width: 100%; height: 100%;  background-color: gray; text-align:center">BILL NAME</div>
                                    </div>
                                    <div className="col-4 border">
                                        <div style="width: 100%; height: 100%;  background-color: gray; text-align:center">BILL NAME</div>
                                    </div>
                                    <div className="col-4 border">
                                        <div style="width: 100%; height: 100%;  background-color: gray; text-align:center">BILL NAME</div>
                                    </div>
                                    <div className="col-4 border">
                                        <div style="width: 100%; height: 100%;  background-color: gray; text-align:center">BILL NAME</div>
                                    </div>
                                    <div className="col-4 border">
                                        <div style="width: 100%; height: 100%;  background-color: gray; text-align:center">BILL NAME</div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>


                </div>
    </div>
);

export default BillBlock;
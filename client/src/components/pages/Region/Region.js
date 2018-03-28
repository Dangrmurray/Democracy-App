import React from 'react';
import './Region.css';
import Wrapper from "../../Wrapper";

const Region = (props) => (
    <Wrapper>
    	<div className="container">
    		<div className="row-justify-content-md-center border">
    			<div className="col-md-1">
    			<h2 className="panel-title"><strong><center>Choose Your Region</center></strong></h2>
    			</div>
    		</div>
    	</div>


        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="card bill">City</div>

                </div>
                <div className="col-4">
                    <div className="card bill">State</div>
                </div>
                <div className="col-4">
                    <div className="card bill">Federal</div>
                </div>
            </div>
        </div>
    </Wrapper>
) 
export default Region;
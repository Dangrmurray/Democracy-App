import React from 'react';
import './BillInfo.css';
import { Link } from "react-router-dom";


const BillInfo = (props) => (
	<div>
		<h1>Bill Title</h1>
		<img src="" alt=""/>
		<h6>Sponsor Name</h6>
		<button>View Bill Stats</button>
		<p>Bill Lorem ipsum shiot.</p>
		<Link to='/pages/billdetail'>View Bill</Link>
		<Link to='/pages/billdetail'>View PDF</Link>
	</div>
)

export default BillInfo;
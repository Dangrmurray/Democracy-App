import React from 'react';
import './BillInfo.css';
import { Link } from "react-router-dom";


const BillInfo = (props) => (
	<div>
		console.log(props)
		<h1>Bill name</h1>
		<img src="" alt=""/>
		<h6>Sponsor Name</h6>
		<Link to={'/stats/' + props.id} className="btn btn-primary">Demographic Stats</Link>
		<p>Bill Lorem ipsum shiot.</p>
		<Link to='props.sample'>View Bill</Link>
		<Link to='props.sample'>View PDF</Link>
	</div>
)

export default BillInfo;
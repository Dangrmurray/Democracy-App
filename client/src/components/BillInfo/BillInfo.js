import React from 'react';
import './BillInfo.css';
import { Link } from "react-router-dom";


const BillInfo = (props) => (
	<div>
		<h1>{props.title}</h1>
		<img src="" alt=""/>
		<h6>{props.sponsor_name}</h6>
		{/*<Link to={'/stats/' + props.id} className="btn btn-primary">Demographic Stats</Link>*/}
		<p>{props.summary}</p>
		<Link to='props.sample'>View Bill</Link>
		<Link to='props.sample'>View PDF</Link>
	</div>
)

export default BillInfo;
import React from 'react';
import './BillInfo.css';
import { Link } from "react-router-dom";


const BillInfo = (props) => (
	<div className="billInfo">
		<h1>{props.title}</h1>
		<img src="" alt=""/>
		<h6>{props.sponsor_name}</h6>
		<Link to={'/stats/' + props.id} className="btn btn-primary">Demographic Stats</Link>
		<p>{props.summary}</p>
		<a target="_blank" href={props.dot_gov}>View Bill</a>
		<a target="_blank" href={props.gov_track}>View GovTrack</a>
	</div>
)

export default BillInfo;

import React from 'react';
import { Link } from "react-router-dom";
import './Region.css';
import Wrapper from "../../Wrapper";

const Region = (props) => (
	<Wrapper>
	<h1>Region</h1>
	<div>Region stuff goes here</div>
	<div>Region stuff goes here</div>
	<div>Region stuff goes here</div>
	<Link to="/bills:123"> Link Too Bills (123 is the test ID...) Please include User ID in  url in future links.</Link>
	</Wrapper>
) 
export default Region;
import React from 'react';
import './Welcome.css';
//import Wrapper from "../../Wrapper";
import WelcomeDetail from "../../WelcomeDetail";
import bgImage from './democracy.jpg';

const Welcome = (props) => (
	<div>
		<div className="row">
			<div className="col-8">
				<img src={bgImage} alt="Democracy Now MutherTrucker" className="mainImage"/>
			</div>
			<div className="col-4">
				<h1>Stuff and Things</h1>
			</div>
		</div>
		<WelcomeDetail />
	</div>
) 
export default Welcome;

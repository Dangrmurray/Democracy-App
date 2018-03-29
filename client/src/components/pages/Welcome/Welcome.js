import React from 'react';
import './Welcome.css';
//import Wrapper from "../../Wrapper";
import WelcomeDetail from "../../WelcomeDetail";
import bgImage from './democracy.jpg';

const Welcome = (props) => (
	<div>
		<div className="row">
			<div className="col-7">
				<img src={bgImage} alt="Democracy Now MutherTrucker" className="mainImage"/>
			</div>
			<div className="col-5">
				<h1>Make your voice heard.</h1>
				<p>Hold your representatives accountable.</p>
			</div>
		</div>
		<WelcomeDetail />
	</div>
) 
export default Welcome;

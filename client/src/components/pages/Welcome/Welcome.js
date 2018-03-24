import React from 'react';
import './Welcome.css';
import Wrapper from "../../Wrapper";
import WelcomeDetail from "../../WelcomeDetail";

const Welcome = (props) => (
	<Wrapper>
	<h1>Welcome</h1>
	<div>Banner goes here</div>
	<WelcomeDetail />
	</Wrapper>
) 
export default Welcome;
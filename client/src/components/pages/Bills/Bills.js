import React from 'react';
import './Bills.css';
import Wrapper from "../../Wrapper";
import BillBlock from "../../BillBlock";

const Bills = (props) => (
	<Wrapper>
		<h1>Bills</h1>
		<h2>{this.props.match.params.id}</h2>
		<BillBlock />
	</Wrapper>
)
export default Bills;
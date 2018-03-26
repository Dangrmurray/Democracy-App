import React, { Component } from 'react';
import './Bills.css';
import Wrapper from "../../Wrapper";
import BillDetail from "../BillDetail";

class Bills extends Component {
	render() {
		return (
			<Wrapper>
				<h1>Bills</h1>
				<h2>{this.props.match.params.id}</h2>
				<BillDetail></BillDetail>
			</Wrapper>
		)
	}
}
export default Bills;
import React, { Component } from 'react';
import './BillDetail.css';
import BillInfo from "../../BillInfo";
import Vote from "../../Vote";




class BillDetail extends Component {

	componentDidMount() {
		this.getBill();
		console.log(this.props.userId)
	}

	getBill = () => {
	// <<<<<<<<<<Will call to the controller, 
	// pulls bill and bill info from our DB>>>>>>>>>>>
	}

	render() {
		return (
			<div className="container">
				<BillInfo></BillInfo>
				<Vote
					userId={this.props.userId}
				></Vote>
			</div>
		)
	}
}

export default BillDetail;

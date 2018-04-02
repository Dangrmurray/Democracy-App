import React, { Component } from 'react';
import './BillDetail.css';
import API from "../../../utils/API.js";
import BillInfo from "../../BillInfo";
import Vote from "../../Vote";




class BillDetail extends Component {

	componentDidMount() {
		this.getBill();
		console.log(this.props.match.params.bill_id)
	}
	state = {
		bill: []
	};

	getBill = () => {
	// <<<<<<<<<<Will call to the controller
	API.checkBill(this.props.match.params.bill_id)
		.then(res => {
			console.log(res.data[0]);
			this.setState({ bill: res.data[0] });
		})
	}

	render() {
		return (
			<div className="container">
				<BillInfo
					title={this.state.bill.name}
					bill_id={this.state.bill.bill_id}
					sponsor_name={this.state.bill.sponsor_name}
					summary={this.state.bill.summary}
					

				/>
				<Vote
					userId={this.props.userId}
				></Vote>
			</div>
		)
	}
}

export default BillDetail;

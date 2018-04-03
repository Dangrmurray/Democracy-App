import React, { Component } from 'react';
import './BillDetail.css';
import API from "../../../utils/API.js";
import BillInfo from "../../BillInfo";
import Vote from "../../Vote";




class BillDetail extends Component {

	componentDidMount() {
		this.getBill();

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
				<div className="col-8 mx-auto">
				<BillInfo
					title={this.state.bill.name}
					bill_id={this.state.bill.bill_id}
					sponsor_name={this.state.bill.sponsor_name}
					summary={this.state.bill.summary_short}
					gov_track={this.state.bill.govtrack_url}
					dot_gov={this.state.bill.congressdotgov_url}
				/>
				<Vote
					userId={this.props.userId}
					bill_id={this.state.bill.bill_id}
				></Vote>
				</div>
			</div>
		)
	}
}

export default BillDetail;

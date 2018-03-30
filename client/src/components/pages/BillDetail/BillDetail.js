import React, { Component } from 'react';
import './BillDetail.css';
import BillInfo from "../../BillInfo";
import Vote from "../../Vote";
import Comments from "../../Comments";



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
				<Comments></Comments>
			</div>
		)
	}
}

export default BillDetail;

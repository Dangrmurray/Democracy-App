import React, { Component } from 'react';
import './BillDetail.css';
import API from "../../../utils/API.js";
import BillInfo from "../../BillInfo";
import Vote from "../../Vote";




class BillDetail extends Component {
	componentWillMount() {
		this.getBill();		

	}

	componentDidMount() {
		this.setState({ voted: false });
	}
	
    constructor(props){
        super(props);
    	this.voteYes = this.voteYes.bind(this);
    	this.voteNo = this.voteNo.bind(this);
	    this.voteUndecided = this.voteUndecided.bind(this);

		this.state = {
			bill_id: this.props.match.params.bill_id,
			bill: [],
			userId: window.sessionStorage.getItem("user"),
			voted: false
		};
    }

	getBill() {
	// <<<<<<<<<<Will call to the controller
		API.checkBill(this.state.bill_id)
			.then(res => {
				this.setState({ bill: res.data[0] });
				window.sessionStorage.setItem("yes", this.state.bill.votes_yes.length)
				window.sessionStorage.setItem("no", this.state.bill.votes_no.length)
				window.sessionStorage.setItem("undecided", this.state.bill.votes_undecided.length)

				if (this.state.bill.votes_no.includes(this.state.userId)) {
					// console.log("no repeats bro...");
					this.setState({ voted: true })
				}
				if (this.state.bill.votes_yes.includes(this.state.userId)) {
					// console.log("no repeats bro...");
					this.setState({ voted: true })
				}
				if (this.state.bill.votes_undecided.includes(this.state.userId)) {
					// console.log("no repeats bro...");
					this.setState({ voted: true })	
				}
			})
	}

	voteYes() { 
		if (this.state.bill.votes_yes.includes(this.state.userId)) {
			console.log("no repeats bro...");
		} else {
			let bill = this.state.bill;
			bill.votes_yes.push(this.state.userId);
			this.setState({ bill: bill });
			console.log(this.state.bill.votes_yes);
		}

		API.voteYes(this.state.bill_id, {
			votes_yes: this.state.bill.votes_yes
		})
		.then(res => {
			console.log(res);
			this.getBill();
		})
		.catch(err => console.log(err));

	}

	voteNo() {
		if (this.state.bill.votes_no.includes(this.state.userId)) {
			console.log("no repeats bro...");
		} else {
			let bill = this.state.bill;
			bill.votes_no.push(this.state.userId);
			this.setState({ bill });
			console.log(this.state.bill.votes_no)
		}

		API.voteNo(this.state.bill_id, {
			votes_no: this.state.bill.votes_no
		})
		.then(res => {
			console.log(res);
			this.getBill();
		})		
		.catch(err => console.log(err));

	}
	voteUndecided() {
		if (this.state.bill.votes_undecided.includes(this.state.userId)) {
			console.log("no repeats bro...");
		} else {
			let bill = this.state.bill;
			bill.votes_undecided.push(this.state.userId);
			this.setState({ bill });
			console.log(this.state.bill.votes_undecided)
		}

		API.voteUnde(this.state.bill_id, {
			votes_undecided: this.state.bill.votes_undecided
		})
		.then(res => {
			console.log(res);
			this.getBill();
		})		
		.catch(err => console.log(err));

	}

	render() {
		return (
			<div className="bill-info">
				
				<BillInfo
					title={this.state.bill.name}
					bill_id={this.state.bill.bill_id}
					sponsor_name={this.state.bill.sponsor_name}
					summary={this.state.bill.summary_short}
					gov_track={this.state.bill.govtrack_url}
					dot_gov={this.state.bill.congressdotgov_url}
				/>
              {
                (this.state.bill.votes_yes || 
                  this.state.bill.votes_no ||
                  this.state.bill.votes_undecided) ?
              
					(<Vote
						voteYes={this.voteYes}
						voteNo={this.voteNo}
						voteUndecided={this.voteUndecided}
						voted={this.state.voted}
						bill_id={this.state.bill_id}
						votes_yes={this.state.bill.votes_yes}
						votes_no={this.state.bill.votes_no}
						votes_undecided={this.state.bill.votes_undecided}
					/>)
                : 
                	(<p>Something's wrong with our chart :(</p>)
              }				
			</div>
		)
	}
}

export default BillDetail;


					// yes={this.state.bill.votes_yes.length}
					// no={this.state.bill.votes_no.length}
					// undecided={this.state.bill.votes_undecided.length}
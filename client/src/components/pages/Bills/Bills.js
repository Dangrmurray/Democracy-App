import React, {Component} from 'react';
import './Bills.css';
import Wrapper from "../../Wrapper";
import BillBlock from "../../BillBlock";
import API from "../../../utils/API.js";
//import SearchBar from "../../SearchBar/SearchBar.js";

	
class Bills extends Component {

	state = {
		bills: [],
		loaded: false
	};

	// When Page loads, get bills, set state 
	componentDidMount() {
		this.getBills();

		let userBool = (window.sessionStorage.getItem("loaded"));

		if (JSON.parse(userBool) === true) {
			this.setState({ loaded: true });
		}else {
			this.setState({ loaded: false });
		};
	}
	
	// Save and Load Bills
	getBills = () => {
		// Gets bills from ProPublica API
		API.getBills()
			.then(res => {
				const bills = res.data.results[0].bills;

				//Loops though API repsonse

				if (!this.state.loaded) {
					for (let i = 0; i < bills.length; i++) {
						let currentBill = bills[i];

						//Pulls bills from our DB and checks for duplicates
						API.checkBill(currentBill.bill_id)
							.then(res => {
								//Looks for each bill by Bill Id, if it gets a valid response, does nothing
								//Else it saves the bill
								if (!res.data[0] && currentBill) {
									API.logBills({
										name: currentBill.title,
										bill_id: currentBill.bill_id,
										sponsor_name: currentBill.sponsor_name,
										sponsor_state: currentBill.sponsor_state,
										sponsor_party: currentBill.sponsor_party,
										sponsor_title: currentBill.sponsor_title,
										congressdotgov_url: currentBill.congressdotgov_url,
										govtrack_url: currentBill.govtrack_url,
										summary_short: currentBill.summary_short,
										// summary: congressdotgov_urlrentBill.summary,
										active: currentBill.active,
										introduced_date: currentBill.introduced_date,
										latest_major_action: currentBill.latest_major_action,
										latest_major_action_date: currentBill.latest_major_action_date
									})
									.then(res => {
										console.log("Saving Unique Bill.")
									})
									.catch(err => console.log(err))
								}else {
									console.log("Repeat...");
								}						
							})
					};
				}

				//Gets all stored bills, including newly saved
				API.pullBills()
					.then(res => {
						let bills = res.data;
						console.log(bills);
						this.setState(
							{ bills }
						);
						if (!this.state.loaded) {
							window.sessionStorage.setItem("loaded", true);
							this.setState({ loaded: true })
							window.location.reload();
						}
					})
			})
			.catch(err => console.log(err));
	};

// <<<<<<<<<<<NEEDS TO FIND BILL AND EDIT>>>>>>>>>>>>>>>>
	// saveBills = (bills) => {
	// 	console.log("saving bill");
	// 	API.saveBills({
	// 		title:this.state.bills.title
	// 	})
 //        .then(res => console.log("saved article"))
 //        .catch(err => console.log(err));
 //  };
// <<<<<<<<<<<<<>>>>>>>>>>>>>><<<<<<<<<<<<<>>>>>>>>>

		render() {
			return (
				<Wrapper>
          <div className="row bills-page">
              <h1 className="panel-title mx-auto">FIND CONGRESSIONAL BILLS</h1>
          </div>    
			<div className="row">
				{this.state.bills.map(bill => (
					<BillBlock
						key={bill.bill_id}
						title={bill.name}
						id={bill.bill_id}
						short_summary={bill.summary_short}
						introduced_date={bill.introduced_date}
						latest_major_action_date={bill.latest_major_action_date}
						saveBills={this.saveBills}
					>
					</BillBlock>
				)
				)}
			</div>
			</Wrapper>
			)
		}
	}
export default Bills;



// <div className="row">
// 					<div className="col-4">
// 					<SearchBar></SearchBar>
// 				</div>
//       	<div className="col-5">
//       	    <select>
//       	        <option>Select Topic</option>
//       	        <option value="Armed Forces and National Security">Armed Forces and National Security</option>
//       	        <option value="Commerce">Commerce</option>
//       	        <option value="Energy">Energy</option>
//       	        <option value="Finance and Financial Sector">Finance and Financial Sector</option>
//       	        <option value="Government Operations and Politics">Government Operations and Politics</option>
//       	        <option value="International Affairs">International Affairs</option>
//       	        <option value="Labor and Employment">Labor and Employment</option>
//       	    </select>
//       	</div>
//       	<div className="col-3">
//       	    <div className="form-group">
//       	        <select id="filter-plan">
//       	            <option>Select Type</option>
//       	            <option value="Upcoming">Upcoming</option>
//       	            <option value="Old">Old</option>
//       	            <option value="Passed">Passed</option>
//       	            <option value="Fail">Fail</option>
//       	        </select>
//       	    </div>
//       	</div>
// 			</div>
import React, {Component} from 'react';
import './Bills.css';
import Wrapper from "../../Wrapper";
import BillBlock from "../../BillBlock";
import API from "../../../utils/API.js";

	
class Bills extends Component {


	state = {
    bills: []
  };


	// When Page loads, get bills
  componentDidMount() {
    this.getBills();
  }
	
	// Load Bills
	getBills = () => {
		API.getBills()
		.then(res =>
				this.setState(
					{bills: res.data.results[0].bills}
				)
			)
		.catch(err => console.log(err));
	};

	// saveBills = (bills) => {
  //     API.saveBills({
	// 			title:this.state.bills.title
	// 		})
  //       .then(res => console.log("saved article"))
  //       .catch(err => console.log(err));
  // };

		render() {
			return (
				<Wrapper>
          <div className="row">
              <h1 className="panel-title">Find Congressional Bills</h1>
          </div>
        <div className="row">
            <div className="col-5">
                <select>
                    <option>Select Topic</option>
                    <option value="Armed Forces and National Security">Armed Forces and National Security</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Energy">Energy</option>
                    <option value="Finance and Financial Sector">Finance and Financial Sector</option>
                    <option value="Government Operations and Politics">Government Operations and Politics</option>
                    <option value="International Affairs">International Affairs</option>
                    <option value="Labor and Employment">Labor and Employment</option>
                </select>
            </div>
            <div className="col-3">
                <div className="form-group">
                    <select id="filter-plan">
                        <option>Select Type</option>
                        <option value="Upcoming">Upcoming</option>
                        <option value="Old">Old</option>
                        <option value="Passed">Passed</option>
                        <option value="Fail">Fail</option>
                    </select>
                </div>
            </div>
				</div>
				<div className="row">
					{this.state.bills.map(bill => (
						<BillBlock
							key={bill.bill_id}
							title={bill.title}
							id={bill.bill_id}
							short_summary={bill.summary_short}
							introduced_date={bill.introduced_date}
							latest_major_action_date={bill.latest_major_action_date}
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
import React, {Component} from 'react';
import './Bills.css';
import Wrapper from "../../Wrapper";
import BillBlock from "../../BillBlock";
import API from "../../../utils/API.js";

	
class Bills extends Component {

<<<<<<< HEAD
const Bills = (props) => (
	<Wrapper>
		<h1>Bills</h1>
		<BillBlock />
	</Wrapper>
)
=======
	// When Page loads, get bills
  componentDidMount() {
    this.findBills();
  }
	
	// Load Bills
	findBills = () => {
		API.findBills()
		.then(res =>
				this.setState({bills: res.data}),
				console.log('got bills?')
			)
		.catch(err => console.log(err));
	};

		render() {
			return (
				<Wrapper>
					<h1>Bills</h1>
					<BillBlock />
				</Wrapper>
			)
		}
	}
>>>>>>> 6cb17ff93d772f99b82f88cc980f4c50329604b6
export default Bills;
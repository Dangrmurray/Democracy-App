import React, {Component} from "react";

import Wrapper from "../../Wrapper"
import Demographics from "../../Demographics";
import API from "../../../utils/API.js"


class DemoForm extends Component {
	state = {
		age: "",
		gender: "",
		education: "",
		income: "", 
		race: "", 
		region: ""
	};

	// componentDidMount() {
	// }


	// sendUser = () => {
	// 	console.log("sending user");
	// }

 // 	handleInputChange = event => {
	// 	const { user, value } = event.target;
	// 	this.setState*({ [user]: value});
	// };

	// handleFormSubmit = event => {
	// 	event.preventDefault();
	// 	if (this.state.user) {
	// 		API.saveUser({
	// 			age: this.state.age,
	// 			gender: this.state.gender,
	// 			education: this.state.education,
	// 			income: this.state.income,
	// 			race: this.state.race,
	// 			region: this.state.region
	// 		})
	// 		.then(res => this.loadUser())
	// 		.catch(err => console.log(err));
	// 	}
	// };

	render() {
		return (
			<div>
	
			<Demographics 
			  // handleFormSubmit={this.handleFormSubmit}
			  // sendUser={this.sendUser}


			/>
			</div>
	)};
}






export default DemoForm;
<<<<<<< HEAD
import React from 'react';
import './DemoForm.css';


const DemoForm = (props) => (

 
	<div className="container">
		<div className="panel panel-success">
			<div className="panel-heading">
				<h3 className="panel-title"><strong>Demographics</strong></h3>
			</div>
 
		<div className="panel-body">          
          <form>
            <div className="form-group">
              <label for="age">Select Your Age Range from the List Below</label>
              <input className="form-control" id="age-input" type="text" list="hosting-plan" placeholder="Your Age" />
              <select id="hosting-plan">
		          <option value="16 - 22">16 - 22</option>
		          <option value="22 - 34">22 - 34</option>
		          <option value="35 - 44">35 - 44</option>
		          <option value="45 - 54">45 - 54</option>
		          <option value="55 - 64">55 - 64</option>
		          <option value="65 and Older">65 and Older</option>  
		          <option value="Prefer Not To Say">Prefer Not to Say</option>               
		       </select>
            </div>

            
            <div className="form-group">
       			<label for="education">Select Your Education Level from the List Below</label>
         		<input type="text" className="form-control" id="education-team" list="education-plan" placeholder="Education Level" />
        		<select id="education-plan">

		          <option value="Some High School">Some High School</option>
		          <option value="High School Graduate or GED">High School Graduate or GED</option>
		          <option value="Vocational or Trade School">Vocational or Trade School</option>
		          <option value="Some College">Some College</option>
		          <option value="Undergraduate Degree">Undergraduate Degree</option>
		          <option value="Graduate Degree">Graduate Degree</option>
		          <option value="Post Graduate Degree">Post Graduate Degree</option>  
		          <option value="Prefer Not To Say">Prefer Not to Say</option>        
        		</select>
      		</div>

      		 
      		 <div className="form-group">
        		<label for="race">Select Your Ethnicity from the List Below</label>
         		<input type="text" className="form-control" id="race-team" list="race-plan" placeholder="Your Race" />
        		<select id="race-plan">
		          <option value="American Indian or Alaska Native">American Indian or Alaska Native</option>
		          <option value="Asian">Asian</option>
		          <option value="Black or African American">Black or African American</option>
		          <option value="Hispanic or Latino">Hispanic or Latino</option>
		          <option value="White">White</option> 
		          <option value="Native American or Other Pacific Islander">Native American or Other Pacific Islander</option>
		          <option value="Prefer Not To Say">Prefer Not to Say</option>       
        		</select>
      		</div>

      	 
      		<div className="form-group">
        		<label for="gender">Select Your Gender from the List Below</label>
         		<input type="text" className="form-control" id="fan-team" list="gender-plan" placeholder="Your Gender" />
        		<select id="gender-plan">
          			<option value="Male">Male</option>
			        <option value="Female">Female</option>
			        <option value="Trans">Trans</option>
			        <option value="Other">Other</option>
			        <option value="Prefer Not To Say">Prefer Not to Say</option>         
        		</select>
      		</div>

      		 
      		<div className="form-group">
       			<label for="income">Select Your Income Range from the List Below</label>
         		<input type="text" className="form-control" id="fan-team" list="age-plan" placeholder="Your Income Level" />
        		<select id="age-plan">
		          <option value="0 - $9,524"></option>
		          <option value="$9,525 - $38,699">$9,525 - $38,699</option>
		          <option value="$38,700 - $82,499">$38,700 - $82,499</option>
		          <option value="$82,500 - $157,499">$82,500 - $157,499</option>
		          <option value="$157,500 - $199,999">$157,500 - $199,999</option>
		          <option value="$200,000 to $499,999">$200,000 to $499,999</option>  
		          <option value="Over $500,000">Over $500,000</option>
		          <option value="Prefer Not To Say">Prefer Not To Say</option>               
        		</select>
      		</div>

      	 
            <div className="form-group">
        		<label for="state">Select Your Region from the List Below</label>
         		<input type="text" className="form-control" id="fan-team" list="state-plan" placeholder="Choose Your Favorite Team" />
        		<select id="state-plan">
		          <option value="Western">Western</option>
		          <option value="Mid-Western">Mid-Western</option>
		          <option value="Southern">Southern</option>
		          <option value="North-Eastern">North-Eastern</option>
		          <option value="South-Eastern">South-Eastern</option>
		          
		        </select>
      		</div>

      		<p id="googleID" data-googleID="{{dataValues.googleID}}"></p>
      		<button type="submit" className="btn btn-primary" id="sign-up-button">Save Info</button>
=======
// import React from 'react';

// import './Demographics.css';
// import { Link } from "react-router-dom";


// const Demographics = (props) => (

 
// 	<div className="container">
// 		<div className="panel panel-success">
// 			<div className="panel-heading">
// 				<h3 className="panel-title"><strong>Demographics</strong></h3>
  
// 				<p>To allow us to track voting trends please enter your census information below. Information is collectged for data purposes only. Nothing is shared</p>

// 			</div>
 
// 		<div className="panel-body">          
//           <form>


//          	<div class="form-group col-md-5">
//       			<label for="inputState">Select Your Age Range from the List Below</label>
//       			<select id="inputState" class="form-control">
//       				<option selected>Choose ...</option>
//       				<option value="16-22">16 - 22</option>
// 		          	<option value="22-34">22 - 34</option>
// 		          	<option value="35-44">35 - 44</option>
// 		          	<option value="45-54">45 - 54</option>
// 		          	<option value="55-64">55 - 64</option>
// 		          	<option value="65+">65 and Older</option>  
// 		          	<option value="pns">Prefer Not to Say</option>     
//       			</select>
//     		</div>


//     		<div class="form-group col-md-5">
//       			<label for="inputState">Select Your Education Level from the List Below</label>
//       			<select id="inputState" class="form-control">
//       				<option selected>Choose...</option>
//         			<option value="hs">Some High School</option>
// 			        <option value="hs+ged">High School Graduate or GED</option>
// 			        <option value="trade">Vocational or Trade School</option>
// 			        <option value="somecollege">Some College</option>
// 			        <option value="undergrad">Undergraduate Degree</option>
// 			        <option value="graddegree">Graduate Degree</option>
// 			        <option value="postgrad">Post Graduate Degree</option>  
// 			        <option value="pns">Prefer Not to Say</option>     
//       			</select>
//     		</div>



//     		<div class="form-group col-md-5">
//       			<label for="inputState">Select Your Ethnicity from the List Below</label>
//       			<select id="inputState" class="form-control">
//         			<option selected>Choose...</option>
//         			<option value="aian">American Indian or Alaska Native</option>
// 		          	<option value="asian">Asian</option>
// 		          	<option value="black">Black or African American</option>
// 		          	<option value="hispanic">Hispanic or Latino</option>
// 		          	<option value="white">White</option> 
// 		          	<option value="native">Native American or Other Pacific Islander</option>
// 		          	<option value="pns">Prefer Not to Say</option>       
//       			</select>
//     		</div>


//     		<div class="form-group col-md-5">
//       			<label for="inputState">Select Your Gender from the List Below</label>
//       			<select id="inputState" class="form-control">
//         			<option selected>Choose...</option>
//         			<option value="male">Male</option>
// 			        <option value="female">Female</option>
// 			        <option value="trans">Trans</option>
// 			        <option value="other">Other</option>
// 			        <option value="pns">Prefer Not to Say</option>
//       			</select>
//     		</div>


//     		<div class="form-group col-md-5">
//       			<label for="inputState">Select Your Income Range from the List Below</label>
//       			<select id="inputState" class="form-control">
//         			<option selected>Choose...</option>
//         			<option value="1"></option>
// 		          	<option value="2">$9,525 - $38,699</option>
// 		          	<option value="3">$38,700 - $82,499</option>
// 		          	<option value="4">$82,500 - $157,499</option>
// 		          	<option value="5">$157,500 - $199,999</option>
// 		          	<option value="6">$200,000 to $499,999</option>  
// 		          	<option value="7">Over $500,000</option>
// 		          	<option value="pns">Prefer Not To Say</option>    
//       			</select>
//     		</div>

    		

//     		<div class="form-group col-md-5">
//       			<label for="inputState">Select Your State from the List Below</label>
//       			<select id="inputState" class="form-control">
//         			<option selected>Choose...</option>
//         			<option value="western">Western</option>
//                   	<option value="midwest">Mid-Western</option>
//                   	<option value="southern">Southern</option>
//                   	<option value="northeast">North-Eastern</option>
//                   	<option value="southeast">South-Eastern</option>
//                   	<option value="pns">Prefer not to Say</option>
//       			</select>
//     		</div>





//       		<button onClick={() => {props.handleFormSubmit(); props.sendUser();}} id="submitbtn" type="submit" className="btn btn-primary">
//           <a className="nav-link" href="/region">Save Info</a>
//           </button>

>>>>>>> 7b6105e1ef94e184ad242a8cb8c55396dfa6b5de
    		
//     		</form>
//   		</div>
//   	</div>
// </div>


<<<<<<< HEAD
	); 
export default DemoForm;
=======
// 	); 

// export default Demographics;

>>>>>>> 7b6105e1ef94e184ad242a8cb8c55396dfa6b5de


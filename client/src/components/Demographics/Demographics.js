import React from 'react';
import './Demographics.css';
import { Link } from "react-router-dom";


const Demographics = (props) => (

 
	<div className="container">
		<div className="panel panel-success">
			<div className="panel-heading">
				<h3 className="panel-title"><strong>Demographics</strong></h3>
				<p>To allow us to track voting trends please enter your census information below. Information is collectged for data purposes only. Nothing is shared</p>
			</div>
 
		<div className="panel-body">          
          <form>

         	<div class="form-group col-md-5">
      			<label for="inputState">Select Your Age Range from the List Below</label>
      			<select id="inputState" class="form-control">
      				<option selected>Choose ...</option>
      				<option value="16-22">16 - 22</option>
		          	<option value="22-34">22 - 34</option>
		          	<option value="35-44">35 - 44</option>
		          	<option value="45-54">45 - 54</option>
		          	<option value="55-64">55 - 64</option>
		          	<option value="65+">65 and Older</option>  
		          	<option value="pns">Prefer Not to Say</option>     
      			</select>
    		</div>


    		<div class="form-group col-md-5">
      			<label for="inputState">Select Your Education Level from the List Below</label>
      			<select id="inputState" class="form-control">
      				<option selected>Choose...</option>
        			<option value="hs">Some High School</option>
			        <option value="hs+ged">High School Graduate or GED</option>
			        <option value="trade">Vocational or Trade School</option>
			        <option value="somecollege">Some College</option>
			        <option value="undergrad">Undergraduate Degree</option>
			        <option value="graddegree">Graduate Degree</option>
			        <option value="postgrad">Post Graduate Degree</option>  
			        <option value="pns">Prefer Not to Say</option>     
      			</select>
    		</div>



    		<div class="form-group col-md-5">
      			<label for="inputState">Select Your Ethnicity from the List Below</label>
      			<select id="inputState" class="form-control">
        			<option selected>Choose...</option>
        			<option value="aian">American Indian or Alaska Native</option>
		          	<option value="asian">Asian</option>
		          	<option value="black">Black or African American</option>
		          	<option value="hispanic">Hispanic or Latino</option>
		          	<option value="white">White</option> 
		          	<option value="native">Native American or Other Pacific Islander</option>
		          	<option value="pns">Prefer Not to Say</option>       
      			</select>
    		</div>


    		<div class="form-group col-md-5">
      			<label for="inputState">Select Your Gender from the List Below</label>
      			<select id="inputState" class="form-control">
        			<option selected>Choose...</option>
        			<option value="male">Male</option>
			        <option value="female">Female</option>
			        <option value="trans">Trans</option>
			        <option value="other">Other</option>
			        <option value="pns">Prefer Not to Say</option>
      			</select>
    		</div>


    		<div class="form-group col-md-5">
      			<label for="inputState">Select Your Income Range from the List Below</label>
      			<select id="inputState" class="form-control">
        			<option selected>Choose...</option>
        			<option value="1"></option>
		          	<option value="2">$9,525 - $38,699</option>
		          	<option value="3">$38,700 - $82,499</option>
		          	<option value="4">$82,500 - $157,499</option>
		          	<option value="5">$157,500 - $199,999</option>
		          	<option value="6">$200,000 to $499,999</option>  
		          	<option value="7">Over $500,000</option>
		          	<option value="pns">Prefer Not To Say</option>    
      			</select>
    		</div>

    		<div class="form-group col-md-5">
      			<label for="inputState">Select Your State from the List Below</label>
      			<select id="inputState" class="form-control">
        			<option selected>Choose...</option>
        			<option value="Alabama">Alabama</option>
		          	<option value="Alaska">Alaska</option>
		          	<option value="Arizona">Arizona</option>
		          	<option value="Arkansas">Arkansas</option>
		          	<option value="California">California</option>
		          	<option value="Colorado">Colorado</option>
		          	<option value="Connecticut">Connecticut</option>
		          	<option value="Delaware">Delaware</option>
		          	<option value="Florida">Florida</option>
		          	<option value="Georgia">Georgia</option>
		          	<option value="Hawaii">Hawaii</option>
		          	<option value="Idaho">Idaho</option>
		          	<option value="Illinois">Illinois</option>
		          	<option value="Indiana">Indiana</option>
		          	<option value="Iowa">Iowa</option>
		          	<option value="Kansas">Kansas</option>
		          	<option value="Kentucky">Kentucky</option>
		          	<option value="Louisiana">Louisiana</option>
		          	<option value="Maine">Maine</option>
		          	<option value="Maryland">Maryland</option>
		          	<option value="Massachusetts">Massachusetts</option>
		          	<option value="Michigan">Michigan</option>
		          	<option value="Minnesota">Minnesota</option>
		          	<option value="Mississippi">Mississippi</option>
		          	<option value="Missouri">Missouri</option>
		          	<option value="Montana">Montana</option>
		          	<option value="Nebraska">Nebraska</option>
		          	<option value="Nevada">Nevada</option>
		          	<option value="New Hampshire">New Hampshire</option>
		          	<option value="New Jersey">New Jersey</option>
		          	<option value="North Carolina">North Carolina</option>
		          	<option value="North Dakota">North Dakota</option>
		          	<option value="Ohio">Ohio</option>
		          	<option value="Oklahoma">Oklahoma</option>
		          	<option value="Oregon">Oregon</option>
		          	<option value="Pennsylvania">Pennsylvania</option>
		          	<option value="Rhode Island">Rhode Island</option>
		          	<option value="South Carolina">South Carolina</option>
		          	<option value="South Dakota">South Dakota</option>
		          	<option value="Tennessee">Tennessee</option>
		          	<option value="Texas">Texas</option>
		          	<option value="Utah">Utah</option>
		          	<option value="Vermont">Vermont</option>
		          	<option value="Virginia">Virginia</option>
		          	<option value="Washington">Washington</option>
		          	<option value="West Virginia">West Virginia</option>
		          	<option value="Wisconsin">Wisconsin</option>
		          	<option value="Wyoming">Wyoming</option>
      			</select>
    		</div>




      		<p id="googleID" data-googleID="{{dataValues.googleID}}"></p>
      		<button type="submit" className="btn btn-primary" id="sign-up-button">Save Info</button>
    		
    		</form>
  		</div>
  	</div>
</div>


	); 
export default Demographics;


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
              <datalist id="hosting-plan">
		          <option value="16 - 22"></option>
		          <option value="22 - 34"></option>
		          <option value="35 - 44"></option>
		          <option value="45 - 54"></option>
		          <option value="55 - 64"></option>
		          <option value="65 and Older"></option>  
		          <option value="Prefer Not To Say"></option>               
		       </datalist>
            </div>

            
            <div className="form-group">
       			<label for="education">Select Your Education Level from the List Below</label>
         		<input type="text" className="form-control" id="education-team" list="education-plan" placeholder="Education Level" />
        		<datalist id="education-plan">
		          <option value="Some High School"></option>
		          <option value="High School Graduate or GED"></option>
		          <option value="Vocational or Trade School"></option>
		          <option value="Some College"></option>
		          <option value="Undergraduate Degree"></option>
		          <option value="Graduate Degree"></option>
		          <option value="Post Graduate Degree"></option>  
		          <option value="Prefer Not To Say"></option>        
        		</datalist>
      		</div>

      		 
      		 <div className="form-group">
        		<label for="race">Select Your Ethnicity from the List Below</label>
         		<input type="text" className="form-control" id="race-team" list="race-plan" placeholder="Your Race" />
        		<datalist id="race-plan">
		          <option value="American Indian or Alaska Native"></option>
		          <option value="Asian"></option>
		          <option value="Black or African American"></option>
		          <option value="Hispanic or Latino"></option>
		          <option value="White"></option> 
		          <option value="Native American or Other Pacific Islander"></option>
		          <option value="Prefer Not To Say"></option>       
        		</datalist>
      		</div>

      	 
      		<div className="form-group">
        		<label for="gender">Select Your Gender from the List Below</label>
         		<input type="text" className="form-control" id="fan-team" list="gender-plan" placeholder="Your Gender" />
        		<datalist id="gender-plan">
          			<option value="Male"></option>
			        <option value="Female"></option>
			        <option value="Trans"></option>
			        <option value="Other"></option>
			        <option value="Prefer Not To Say"></option>         
        		</datalist>
      		</div>

      		 
      		<div className="form-group">
       			<label for="income">Select Your Income Range from the List Below</label>
         		<input type="text" className="form-control" id="fan-team" list="age-plan" placeholder="Your Income Level" />
        		<datalist id="age-plan">
		          <option value="0 - $9,524"></option>
		          <option value="$9,525 - $38,699"></option>
		          <option value="$38,700 - $82,499"></option>
		          <option value="$82,500 - $157,499"></option>
		          <option value="$157,500 - $199,999"></option>
		          <option value="$200,000 to $499,999"></option>  
		          <option value="Over $500,000"></option>
		          <option value="Prefer Not To Say"></option>               
        		</datalist>
      		</div>

      	 
            <div className="form-group">
        		<label for="state">Select Your State from the List Below</label>
         		<input type="text" className="form-control" id="fan-team" list="state-plan" placeholder="Choose Your Favorite Team" />
        		<datalist id="state-plan">
		          <option value="Alabama"></option>
		          <option value="Alaska"></option>
		          <option value="Arizona"></option>
		          <option value="Arkansas"></option>
		          <option value="California"></option>
		          <option value="Colorado"></option>
		          <option value="Connecticut"></option>
		          <option value="Delaware"></option>
		          <option value="Florida"></option>
		          <option value="Georgia"></option>
		          <option value="Hawaii"></option>
		          <option value="Idaho"></option>
		          <option value="Illinois"></option>
		          <option value="Indiana"></option>
		          <option value="Iowa"></option>
		          <option value="Kansas"></option>
		          <option value="Kentucky"></option>
		          <option value="Louisiana"></option>
		          <option value="Maine"></option>
		          <option value="Maryland"></option>
		          <option value="Massachusetts"></option>
		          <option value="Michigan"></option>
		          <option value="Minnesota"></option>
		          <option value="Mississippis"></option>
		          <option value="Missouri"></option>
		          <option value="Montana"></option>
		          <option value="Nebraska"></option>
		          <option value="Nevada"></option>
		          <option value="New Hampshire"></option>
		          <option value="New Jersey"></option>
		          <option value="North Carolina"></option>
		          <option value="North Dakota"></option>
		          <option value="Ohio"></option>
		          <option value="Oklahoma"></option>
		          <option value="Oregon"></option>
		          <option value="Pennsylvania"></option>
		          <option value="Rhode Island"></option>
		          <option value="South Carolina"></option>
		          <option value="South Dakota"></option>
		          <option value="Tennessee"></option>
		          <option value="Texas"></option>
		          <option value="Utah"></option>
		          <option value="Vermont"></option>
		          <option value="Virginia"></option>
		          <option value="Washington"></option>
		          <option value="West Virginia"></option>
		          <option value="Wisconsin"></option>
		          <option value="Wyoming"></option>
		        </datalist>
      		</div>

      		<p id="googleID" data-googleID="{{dataValues.googleID}}"></p>
      		<button type="submit" className="btn btn-primary" id="sign-up-button">Save Info</button>
    		
    		</form>
  		</div>
  	</div>
</div>


	); 
export default DemoForm;


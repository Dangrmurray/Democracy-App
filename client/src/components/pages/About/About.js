import React from 'react';
import './About.css';
import Wrapper from "../../Wrapper";

const About = (props) => (
	<Wrapper>
	<h1>About</h1>
		<div id="accordion">

			<div class="card">
				<div class="card-header">
					<a class="card-link" data-toggle="collapse" href="#collapseOne">
						About Vote.ly
                </a>
				</div>
				<div id="collapseOne" class="collapse show" data-parent="#accordion">
					<div class="card-body">
						<p>	
						At any given time, there could be hundreds, if not thousands of bills passing through congress on either a federal, state,
						or local level. Vote.ly is a way in which a person could be introduced to a bill they weren’t aware
						of, or do a deep dive on one which they want to know more about. Additionally, there’s an opportunity to cast one’s own approval/disapproval
						on the bill while also leaving a quick explanation why they feel a certain way. When searching the bill, the user will be
						told a set number of ones that are on the “hot stove” in the coming days. If they would rather search which bills are coming
						up in a few days in a particular category (i.e. Technology, Medicine, Public Safety) they can toggle to that and only bills
						in those categories will come up. Furthermore, if one wants to learn about a specific bill they can search by bill name or
						number and will be given access to the bill itself as well as a plethora of information such as who sponsors the bill and
						arguments for and against that bill. As membership increases, and users vote on how they feel about each bill, one can get
						the “pulse” of others on a particular bill through visual reports broken down by traits such as gender, location, or income.
                    </p>

					</div>
				</div>
			</div>

			<div class="card">
				<div class="card-header">
					<a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
						Privacy
                </a>
				</div>
				<div id="collapseTwo" class="collapse" data-parent="#accordion">
					<div class="card-body">
						<p>We ask for the login and demographics so those looking for more information on the bill
						can get a more accurate pulse on the country. That being said, your information will never
                    be shared with a third-party for any reason.</p>
					</div>
				</div>
			</div>

			<div class="card">
				<div class="card-header">
					<a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
						Authors
                </a>
				</div>
				<div id="collapseThree" class="collapse" data-parent="#accordion">
					<div class="card-body">
						<ul>
							<li>Ryan Brownlow</li>
							<li>Jason Kunkel</li>
							<li>David Morrill</li>
							<li>Daniel Murray</li>
							<li>Abdel Rahman</li>
							<li>Frank Valdez</li>
						</ul>
					</div>
				</div>
			</div>
		</div>


	</Wrapper>
) 
export default About;
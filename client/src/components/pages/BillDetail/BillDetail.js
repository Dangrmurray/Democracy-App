import React from 'react';
import './BillDetail.css';
import BillInfo from "../../BillInfo";
import Vote from "../../Vote";
import Comments from "../../Comments";


const BillDetail = (props) => (
	<div className="container">
		<BillInfo></BillInfo>
		<Vote></Vote>
		<Comments></Comments>
  </div>
)

export default BillDetail;

import React from 'react';
import './BillDetail.css';
import BillInfo from "../../components/BillInfo";
import Vote from "../../components/Vote";
import Comments from "../../components/Comments";
import Footer from "./components/Footer";

const BillDetail = (props) => (
	<div>
		<BillInfo></BillInfo>
		<Vote></Vote>
		<Comments></Comments>
  </div>
)

export default BillDetail;

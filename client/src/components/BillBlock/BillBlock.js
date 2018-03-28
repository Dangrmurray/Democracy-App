import React from "react";
import './BillBlock.css';
import { Link } from "react-router-dom";


const BillBlock = (props) => (
    <div className="col-4">
        <div className="card bill">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.short_summary}</p>
            <strong>{props.bill_id}</strong>
            <Link to={'/billdetail/' + "/123"} className="active" >Bill Detail</Link>
        </div>
    </div>
);

export default BillBlock;
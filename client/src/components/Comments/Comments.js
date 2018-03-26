import React from 'react';
import './Comments.css';

const Comments = (props) => (
	<div className="col-6">
        <h5>Comments <span className="voteNum">234234</span></h5>
        <div className="comment">
            <div className="voted no">NO</div>
            <div className="commentText">I voted against DACA because I'm an inbred hillbilly.</div>
        </div>
        <div className="comment">
            <div className="voted yes">YES</div>
            <div className="commentText">I like bunnies</div>
        </div>
        
  </div>
)

export default Comments;
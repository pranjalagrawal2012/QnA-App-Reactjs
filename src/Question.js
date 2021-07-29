import React from "react";
import './Question.css'
const question = (props) =>{
   
return(
    <div
    onClick={props.click}
    className="question">
        <p>{props.question}</p>
    </div>
);
};
export default question;
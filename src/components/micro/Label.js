import React from 'react';
const Label=({icon, text, color, bootstrap,...props})=>{
    return (
        <div className="d-flex justify-content-between align-items-center">
            <img src={icon} alt="" style={{height:"1.2em", marginRight:"0.4em"}}/>
            <span style={{color:color, fontSize:"0.9em"}} className={bootstrap}>{text}</span>
        </div>
    );
};
export default Label;
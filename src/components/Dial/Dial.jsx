import React from 'react';
import Knob from '../watch/Knob/Knob';
const Dial = (props) => {
    return (
        <div style={{border:'2px solid purple' , margin:'20px'}}>
            <h2>this is dial component</h2>
           <p>your step count {props.steps}</p> 
           <Knob steps={props.steps}></Knob>
        </div>
    );
};

export default Dial;

/* 
react internal akta virtual dom maintain kore,kuno kishu update or change hole reatc tar vitual dom er sathe compare kore,se akta dif algoridom die buje j kun jaygay update korte hobe?then sudu sei jaygay e update kore
..component lifecycle
1.mounting
2.update
3.unmounting
*/
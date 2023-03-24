import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () => {
        const nextStep = steps + 1;
        setSteps(nextStep);
       // console.log(steps); // 0 dekhabe but use effect korle 1 dekhabe
    }
    useEffect(() => {
        //console.log(steps) 1 theke dekjhabe
    },[steps])
    return (
        <div style={{border:'2px solid red' , margin:'10px'}}>
            <h2>this is my smart watch</h2>
            <p>Steps: {steps}</p>
            <button onClick={increaseSteps}>de dour ....</button>
            <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;

/* 
state vibonno time e change hoy

but props kuno jaygay value hisebe pathanu hoy ja change kora jay na
*/
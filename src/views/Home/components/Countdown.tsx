import React from 'react';


function MyTimer({ expiryTimestamp }) {


    return (
        <div style={{textAlign: 'center', color:'#33bbe5'}}>
            <br/>
            <p>Farming is live !</p>
            {/* <div style={{fontSize: '50px'}}>
                <span>{days} Day </span><span>{hours} Hours </span><span>{minutes} Minutes </span><span>{seconds} Seconds</span>
            </div> */}
            {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
        </div>
    );
}

export default function Countdown() {
    const time = new Date(2023,6,29,20,0,0,0).valueOf();
    const timeLaunch = new Date();
    timeLaunch.setSeconds(time);
    return (
        <div>
            <MyTimer expiryTimestamp={time} />
        </div>
    );
}
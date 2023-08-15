import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


    return (
        <div style={{textAlign: 'center', color:'#33bbe5'}}>
            <br/>
            <p>Farming starts in : </p>
            <div style={{fontSize: '50px'}}>
                <span>{days} Day </span><span>{hours} Hours </span><span>{minutes} Minutes </span><span>{seconds} Seconds</span>
            </div>
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
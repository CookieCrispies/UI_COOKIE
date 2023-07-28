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
            <p>Farming start in : </p>
            <div style={{fontSize: '50px'}}>
                <span>{days} days </span><span>{hours} hours </span><span>{minutes} minutes </span><span>{seconds} seconds</span>
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
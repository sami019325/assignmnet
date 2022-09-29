import React, { useEffect, useState } from 'react';
import './Aside.css'
import profile from './logo512.png'
const Aside = () => {
    return (
        <div className='person_Main_div'>
            <div className='persons_div'>
                <img src={profile} alt="" srcset="" />
                <div>
                    <h2>Sami Ahmed</h2>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='box'>
                <div>
                    <h4>75 <sub className='gray-w'>kg</sub></h4>
                    <p className='gray-w'>Weight</p>
                </div>
                <div>
                    <h4>5.9</h4>
                    <p className='gray-w'>Height</p>
                </div>
                <div>
                    <h4>23 <sub className='gray-w'>yrs</sub></h4>
                    <p className='gray-w'>Age</p>
                </div>
            </div>
            <h4>Add a break</h4>
            <ItimeBreak />
            <div>
                <h4>Exercise Details</h4>
                <div className='box'>
                    <h4>Exercise time: <span id='exer-time'>00</span> minute</h4>
                </div>
                <div className='box'>
                    <h4>Break time: <span id='break-time'>00</span> minute</h4>
                </div>
            </div>

            <button className='btn-full btn-aside '>Activity Completed</button>
        </div>
    );
};

let btnOff = 'btn-round'
const ItimeBreak = (props) => {
    const [breakTime, setBreakTime] = useState(0);
    const [btn, setbtn] = useState('');
    const showData = (time, btnID) => {
        setBreakTime(time)
        setbtn(btnID)
    }
    useEffect(() => {
        console.log(btn)
        document.getElementById('break-time').innerText = breakTime;

    }, [breakTime])
    return (
        <div className='box'>
            <button onClick={() => showData('1', 'btn1')} id='btn1' className={btnOff}>1m</button>
            <button onClick={() => showData('2', 'btn2')} id='btn2' className={btnOff}>2m</button>
            <button onClick={() => showData('5', 'btn3')} id='btn3' className={btnOff}>5m</button>
            <button onClick={() => showData('10', 'btn4')} id='btn4' className={btnOff}>10m</button>
        </div>
    )
}

export default Aside;
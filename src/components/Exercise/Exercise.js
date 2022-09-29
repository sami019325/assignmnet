import React, { useEffect, useState } from 'react';
import Aside from '../Aside/Aside';
import './Exercise.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const notify = () => toast("Wow so easy!");

const Exercise = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div>
            <main className='body_Of_main'>
                {
                    console.log(data)

                }
                <div id='home' className='grid-3 cart_container'>
                    {
                        data.map(data => <Cart
                            id={data.id}
                            img={data.picture}
                            GymName={data.name}
                            Duration={data.time}
                            Age={data.age}
                            detals={data.details}
                        />)
                    }
                </div>
                <div id='calculation'>
                    <Aside />

                </div>
            </main>
            <h1 id='#blog' className='text' >Questions </h1>
            <div className='box'>
                <h1>How does react work?</h1>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
            </div>
            <div className='box'>
                <h1>What are the difference between props and state?</h1>
                <p>
                    Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.
                </p>
            </div>
            <div className='box'>
                <h1>What are the use of useeffect in react</h1>
                <p>
                    The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects.
                </p>
            </div>
        </div>
    );
};

const Cart = (props) => {
    const [value, setValue] = useState(0)
    const [ISvalueClanged, setISvalueClanged] = useState(0)
    useEffect(() => {
        document.getElementById('exer-time').innerText = ISvalueClanged
    }, [ISvalueClanged])

    const CountValue = (time) => {
        console.log(time)
        setValue(time)
        const cards = localStorage.getItem('cards');
        if (cards === null) {
            localStorage.setItem('cards', 0)

            let totalTime = parseInt(localStorage.getItem('cards'))
            let newTotal = totalTime + value;
            console.log('value:', value, 'saved:', totalTime)
            localStorage.setItem('cards', newTotal)
        }
        else {
            let totalTime = parseInt(localStorage.getItem('cards'))
            let newTotal = totalTime + value;
            console.log(newTotal)
            console.log('value:', value, 'saved:', totalTime)

            localStorage.setItem('cards', newTotal)
            setISvalueClanged(newTotal)
        }

    }
    return (
        <div className='cart' >
            <img className='w-full' src={props.img} alt="" srcset="" />
            <h1 className='height-100' >{props.GymName}</h1>
            <p className='gray height-200'>{props.detals}</p>
            <p>Minimum age required: <span className='bold'>{props.Age}</span> </p>
            <p>Time required: <span className='bold'>{props.Duration}</span> </p>
            <button className='btn-full' onClick={() => CountValue(props.Duration)}>Add to card</button>
        </div>
    )
}

export default Exercise;
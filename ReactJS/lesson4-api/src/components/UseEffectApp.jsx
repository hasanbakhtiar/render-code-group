import React, { useEffect, useState } from 'react'

const UseEffectApp = () => {
    const [counterOne, setCounterOne] = useState(10);
    const [counterTwo, setCounterTwo] = useState(20);
    useEffect(() => {
        console.log('app start');

    }, [])
    return (
        <>
            <div className='container mt-5'>
                <p>Counter One</p>
                {counterOne}
                <button onClick={() => { setCounterOne(counterOne + 1) }}>+</button>
            </div>
            <div className='container mt-5'>
                <p>Counter Two</p>
                {counterTwo}
                <button onClick={() => { setCounterTwo(counterTwo + 1) }}>+</button>
            </div>
        </>
    )
}

export default UseEffectApp
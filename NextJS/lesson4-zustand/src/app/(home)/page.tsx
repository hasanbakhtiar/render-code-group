"use client";
import useBear from '@/zustand/store'
import { useState } from 'react';

const Home = () => {
    const [item, setItem] = useState<number>(0);
    const bears = useBear((state: any) => state.bears);
    const incrementBear = useBear((state: any) => state.increment);
    const deleteAllBear = useBear((state: any) => state.deleteAll);
    const updateBear = useBear((state: any) => state.payloadUpdate);

    return (
        <div className='container mt-5'>
            <p className='alert alert-info w-50'>Bear:{bears}</p>
            <button className='btn btn-warning' onClick={incrementBear}>+</button>
            <button className='btn btn-danger ms-5' onClick={deleteAllBear}>All delete</button>
            <input className='ms-5' type="number" onChange={(e: any) => setItem(e.target.value)} />
            <button className=' btn btn-primary' onClick={() => { updateBear(item) }}>update</button>
        </div>
    )
}

export default Home
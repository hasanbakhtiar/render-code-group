"use client";
import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState<number>(0);
    return (
        <div className="p-30">
            <button className="rounded-full bg-amber-300" onClick={() => { setCount(count - 1) }}>-</button>
            <span>{count}</span>
            <button className="rounded-full bg-amber-300" onClick={() => { setCount(count + 1) }}>+</button>
        </div>
    )
}

export default Counter
import { useLayoutEffect, useState } from "react"

const UseLayoutEffectApp = () => {
    const [data, setData] = useState("Hello World");

    useLayoutEffect(()=>{
        setData("Welcome World")
    },[])
    
    return (
        <div>{data}</div>
    )
}

export default UseLayoutEffectApp
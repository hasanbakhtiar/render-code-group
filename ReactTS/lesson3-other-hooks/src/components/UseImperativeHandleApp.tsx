import { forwardRef, useImperativeHandle, useRef } from "react"

export type MyInputHandle = {
    myFunc: () => void;
};

const MyInput = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        myFunc: sayHi
    }))

    const sayHi = () => {
        alert("Hello")
    }

    return (
        <input type="text" />
    )
})

const UseImperativeHandleApp = () => {
    const inputRef = useRef<MyInputHandle | null>(null);
    const handleClick = () => {
        inputRef.current?.myFunc();
    }
    return (
        <div>
            <MyInput ref={inputRef} /><button onClick={handleClick}>click</button>
        </div>
    )
}

export default UseImperativeHandleApp
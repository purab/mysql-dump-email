import React, {useState} from 'react';

const UseState = () => {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState("petro")
    
    const increment = () => {
        setCounter(counter+1)
    }
    let onChangeHandle = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
    }
    return (
        <div>
            {counter}
            <button onClick={increment}>increment</button>
            <br />
            <input placeholder="enter something here..." onChange={onChangeHandle}/>
            {inputValue}
        </div>
    );    
}
 
export default UseState;

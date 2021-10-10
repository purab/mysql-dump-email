import React, {useState} from 'react';

const UseState = () => {
    const [counter, setCounter] = useState(0);
    
    const increment = () => {
        setCounter(counter+1)
    }
    return (
        <div>
            {counter}
            <button onClick={increment}>increment</button>
        </div>
    );    
}
 
export default UseState;

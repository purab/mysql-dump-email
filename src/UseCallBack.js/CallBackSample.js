import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Child from './Child';

const CallBackSample = () => {
    const [data, setData] = useState("This is parent component")
    const [toggle, setToggle] = useState(true);

    const returnComment = useCallback(
        (name)=> {
            return data +name;
        }
    )
    return (
        <div>
            <Child returnComment={returnComment} />
            <button onClick={()=> {
                setToggle(!toggle);
            }}>
                Toggle
            </button>
            {toggle && <h1>toggling</h1>}
        </div>
    );
};

export default CallBackSample;
import React from 'react';
import axios from "axios";
import { useEffect, useState, useMemo } from "react";

//https://jsonplaceholder.typicode.com/todos/1
const MemoSample = () => {
    const [data,setData] = useState(null);
    const [toggle,setToggle] = useState(true)

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((res)=>{
                setData(res.data)
            })
    },[]);

    const findLongestNames = (comments) => {
        if (!comments) return null;

        let LongestName = "";
        for (let i = 0; i < comments.length; i++) {
            let currnetName = comments[i].name;
            if(currnetName.length > LongestName.length) {
                LongestName = currnetName;
            }            
        }
        console.log("this is executed");
        return LongestName;
    }

    const getLongestName = useMemo(()=> findLongestNames(data),[data])

    return (
        <div className="App">
            <div><h1>{getLongestName}</h1></div>
            <button onClick={()=>{
                setToggle(!toggle)
            }}>Toggle</button>
        {toggle && <h1>Toggling</h1>}
        </div>
    );
};

export default MemoSample;
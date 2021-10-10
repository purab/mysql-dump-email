import React,{useEffect,useState} from "react";
import axios from "axios";

function EffectTutorial () {
    const [data,setData] = useState("")
    const [count,setCount] = useState(0)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos/1")
        .then((res)=>{
            //setData(res)
            console.log(res.data)
            setData(res.data.title)
            
        })
    },[count]);
    return (        
        <div>
        <div>Hello world {data}</div>        
        <h1>{data}</h1>
        <h1>{count}</h1>
        <button onClick={()=> {
            setCount(count+1)
        }}>Click here</button>
        </div>
    )
}

export default EffectTutorial;
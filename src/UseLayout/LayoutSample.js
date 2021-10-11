import React, { useLayoutEffect, useEffect,useRef } from 'react';

const LayoutSample = () => {
    const inputRef = useRef(null);
    useEffect(()=> {
        console.log("useEffect");
        inputRef.current.value="Sanchi";
    },[])

    useLayoutEffect(()=>{
        console.log(inputRef.current.value);
    },[]);   

    return (
        <div className="Apps">
            <input ref={inputRef} defaultValue="Purab" style={{ width: 400, height: 60 }} />
        </div>
    );
    
}

export default LayoutSample;
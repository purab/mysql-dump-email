import React, { useLayoutEffect, useEffect } from 'react';

const LayoutSample = () => {
    useEffect(()=> {
        console.log("useEffect")
    },[])

    useLayoutEffect(()=>{
        console.log("use layouteffect")
    },[]);   

    return (
        <div>
            
        </div>
    );
    
}

export default LayoutSample;
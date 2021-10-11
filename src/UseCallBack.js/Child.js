import React, { useEffect } from 'react';

const Child = ({returnComment}) => {
    
    useEffect(()=>{
        console.log("This child function useeffect called");

    },[returnComment])
    return (
        <div>
            {returnComment(": From child")}
        </div>
    );
};

export default Child;
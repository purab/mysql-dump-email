import React, { useState,createContext } from 'react';
import PropTypes from 'prop-types';
import User from './User';
import Login from './Login';

export const AppContext = createContext(null);

const ContextSample = () => {
    const [username,setUsername] = useState("");

    return (
        <div>
            <AppContext.Provider value={{ username, setUsername }}>
                <Login /><User  /> 
            </AppContext.Provider>       
        </div>
    );
};

ContextSample.propTypes = {
    
};

export default ContextSample;
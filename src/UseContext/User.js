import React,{useContext} from 'react';
import { AppContext } from './ContextSample';

const User= ()   => {
    const { username } = useContext(AppContext);
    return (
        <div>
            <h1 >username:{username}</h1>
        </div>
    );
};


export default User;
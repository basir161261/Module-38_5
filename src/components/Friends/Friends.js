import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friends.css';

const Friends = (props) => {
    const {name, email, id} = props.friend;
    const history = useHistory();
    const handleClick = (friendId) =>{
        const url = `/friend/${friendId}`;
        history.push(url)
    }
    return (
        <div className="friends-style">
            
            <h3>{name}</h3>
            <p>{email}</p>
            <p> <Link to={`/friend/${id}`}>Show Detail of {id} </Link></p>
            <Link to={`/friend/${id}`}><button>Show Detail of {id}</button> </Link>
            <br /> 
            <button onClick={() => handleClick(id)}>Click Me</button>

        </div>
    );
};

export default Friends;
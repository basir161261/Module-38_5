import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = (props) => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    // const {name, email, phone, id} = props.friend;
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])
    return (
        <div>
            <h3>This is friend detail components: {friendId}</h3>
            <p>Email: {friend.email}</p>
            <p>Phone: {friend.phone}</p>
        </div>
    );
};

export default FriendDetail;
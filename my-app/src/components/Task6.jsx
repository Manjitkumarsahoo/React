import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Task6() {

    const [users , setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {setUsers(response.data)})
        .catch((error) => {console.log(error)})

    },[])
    return(
        <>
        <h1>Using Axios</h1>
        {users.map((user) => {
            return <li key={user.id}>{user.name}</li>
        })}
        </>
    )
}
export default Task6;
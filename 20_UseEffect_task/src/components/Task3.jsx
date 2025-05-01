import React, { useEffect, useState } from 'react';
function Task3() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then(response => response.json())
        // .then(data => setUsers(data))
        // .catch(error => console.log(error))
        dataFetch();
    }, [])

    async function dataFetch() {
        try {
            const promise = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await promise.json();
            setUsers(data);
        } catch (error) {
            console.log(error);

        }
    }


    return (
        <>
            <h1>Data fetching in react</h1>
            <ol>
                {
                    users.map(user => {
                        return <li>{user.name}</li>
                    })
                }
            </ol>
            <table className='table , table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>mobile</th>
                        <th>city</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            return (<tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.address.city}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default Task3;
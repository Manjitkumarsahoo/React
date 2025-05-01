import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchUsers } from '../redux/slices/asynSlice'


function ShowUsers() {
    const state = useSelector((store) => store.users)
    const dispatch = useDispatch()
    //console.log(state)
    useEffect(() => {
        if (state.status == "idl") {
            dispatch(fetchUsers())
        }
    }, [state.status])

    return (
        <>
            <h1>Handling Async state in redux-toolkit</h1>
            {
                state.status == "loading" && <h1>Loading...</h1>
            }
            {
                state.status == "success" &&
                state.allUsers.map((user) => {
                    return <ol key={user.id}>
                        <li>Name : {user.name}</li>
                        <li>UserName : {user.username}</li>
                        <li>Email : {user.email}</li>
                    </ol>
                })
            }

        </>
    )
}

export default ShowUsers
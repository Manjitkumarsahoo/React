import { useState } from "react"

export default function LoginForm(){

    let [state,setState] = useState({
        user:{
            username:"",
            password:""
        }
    })

    let {user} = state

    function changeinput(event){
        setState((state)=>({
            user:{...state.user,[event.target.name]:event.target.value}
        }))
    }

    function submituserData(event){
        event.preventDefault();
        console.log(user);
    }

    return(
        <>
            <section className="container-fluid">
                <div className="row">
                    <div className="col-4 m-auto">
                        <div className="card text-center">
                            <div className="card-header">
                                <h1>Login Here</h1>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submituserData}>
                                    <div>
                                        <input type="text" placeholder="Enter User Name" className="form-control mt-2" value={user.username} name="username" onChange={changeinput}/>
                                    </div>
                                    <div className="mt-2">
                                        <input type="text" placeholder="Enter password" className="form-control"value={user.password} name="password" onChange={changeinput}/>
                                        <input type="submit" className=" btn btn-dark mt-2" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
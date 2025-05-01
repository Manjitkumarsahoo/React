import { useState } from "react"
export default function RegForm(){

    let [state,setState] = useState({
            user:{
                username:"",
                email:"",
                password:"",
                desc:"",
                desg:"",
                terms:false
            }
        })

        let {user}=state

        function changeInput(event){
            setState((state)=>({
                user:{
                    ...state.user,
                    [event.target.name]:event.target.value
                }
            }))
        }

        function chnageCheck(event){
            setState((state)=>({
                user:{
                    ...state.user,
                    [event.target.name]:event.target.checked
                }
            }))
        }

        function submituserData(event){
            event.preventDefault();
            console.log(user);
            setState({
                user:{
                    username:"",
                    email:"",
                    password:"",
                    desc:"",
                    desg:"",
                    terms:false
                }
            })
        }
    return(
        <>
         <section className="container-fluid">
            <div className="row">
                <div className="col-4 m-auto">
                    <div className="card">
                        <div className="card-header text-center bg-dark text-white">
                            <h1>Registration Form</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={submituserData}>
                                <div>
                                    <input type="text" placeholder="Enter user name" className="form-control mt-2" value={user.username} name="username" onChange={changeInput}/>
                                </div>
                                <div>
                                    <input type="email" placeholder="Enter email" className="form-control mt-2" value={user.email} name="email" onChange={changeInput}/>
                                </div>
                                <div>
                                    <input type="password" placeholder="Enter password" className="form-control mt-2"  value={user.password} name="password" onChange={changeInput}/>
                                </div>
                                <div>
                                    <textarea className="form-control mt-3" placeholder="Description" rows={3} cols={22} value={user.desc} name="desc" onChange={changeInput}></textarea>
                                </div>
                                <div className="mt-3">
                                    <select className="form-control" name="desg" onChange={changeInput}>
                                        <option value="">Select Designation</option>
                                        <option value="Manager">Manager</option>
                                        <option value="Team Lead">Team Lead</option>
                                    </select>
                                </div>
                                <div className="mt-3">
                                    <input type="checkbox" className="form-check-input" name="term" onChange={chnageCheck}/>&nbsp;
                                    Accept Terms & Condition
                                </div>
                                <div className="mt-3">
                                    <input type="submit" className="btn btn-dark"  />
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
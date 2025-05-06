import { useState } from "react";

function Employee(){
    const employees = [
        {id:101,name:"Manjit",age:25,gender:"Male",designation:"Software Engineer"},
        {id:102,name:"Kiran",age:28,gender:"Female",designation:"Project Manager"},
        {id:103,name:"Subhranshu",age:27,gender:"Male",designation:"HR Manager"},
        {id:104,name:"Sonali",age:30,gender:"Female",designation:"UI/UX Designe"},
        {id:105,name:"Bablu",age:26,gender:"Male",designation:"Data Analyst"},
        {id:106,name:"Ritu",age:31,gender:"Female",designation:"Tester"}
    ]

    const [state,setState] = useState(employees)

    

    function handleAll(){
        setState(employees)
    }

    function handleMale(){
        setState(employees.filter((emp) => emp.gender === "Male"));
    }

    function handleFemale(){
        setState(employees.filter((emp)=>emp.gender === "Female"))
    }

    return(
        <>
            <section className="container-fluid mt-2">
                <div>
                    <h1>Employee Details</h1>
                </div>
                <div>
                    <button className="btn btn-danger me-2" onClick={handleAll}>All Employee</button>
                    <button className="btn btn-success me-2" onClick={handleMale}>Male Employee</button>
                    <button className="btn btn-primary" onClick={handleFemale}>Female Employee</button>
                </div>
                <div>
                    <table className="table table-bordered text-center mt-4">
                        <thead className="table-dark">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Designation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                state.map((emp)=>{
                                    return(
                                        <tr key={emp.id}>
                                            <td>{emp.id}</td>
                                            <td>{emp.name}</td>
                                            <td>{emp.age}</td>
                                            <td>{emp.gender}</td>
                                            <td>{emp.designation}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}
export default Employee;
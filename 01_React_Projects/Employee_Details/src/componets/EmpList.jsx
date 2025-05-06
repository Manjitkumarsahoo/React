import { useState } from "react";

export default function EmpList({ callFn }) {

    

    const [state,setState] = useState({

        allEmployees: [
            { id: 101, name: "Manjit", img: "https://via.placeholder.com/50", designation: "Software Engineer", sal: 100000, age: 25, Exp: 2 },
            { id: 102, name: "Kiran", img: "https://via.placeholder.com/50", designation: "Team Lead", sal: 200000, age: 35, Exp: 10 },
            { id: 103, name: "Subhranshu", img: "https://via.placeholder.com/50", designation: "HR Manager", sal: 50000, age: 30, Exp: 5 },
            { id: 104, name: "Sonali", img: "https://via.placeholder.com/50", designation: "UI/UX Designer", sal: 100000, age: 27, Exp: 3 },
            { id: 105, name: "Bablu", img: "https://via.placeholder.com/50", designation: "Data Analyst", sal: 60000, age: 29, Exp: 6 },
            { id: 106, name: "Ritu", img: "https://via.placeholder.com/50", designation: "Tester", sal: 30000, age: 25, Exp: 4 }
        ]
    });

    let { allEmployees } = state;

    return (
        <>
            <section className="container-fluid mt-4">
                <div className="row">
                    <div className="col">
                        <table className="table table-bordered text-center">
                            <thead className="table-dark">
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Designation</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allEmployees.map((emp) => (
                                    <tr key={emp.id} onClick={() => callFn(emp)}>
                                        <td>{emp.id}</td>
                                        <td>{emp.name}</td>
                                        <td>{emp.designation}</td>
                                        <td>{emp.age}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}

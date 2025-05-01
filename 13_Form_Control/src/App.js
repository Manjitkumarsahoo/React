import React from "react";
import Form from "./componets/Form";
//import RegForm from "./componets/RegForm";
//import LoginForm from "./componets/LoginForm";




function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <p className="navbar-brand">
                 React Form
            </p>
        </div>
      </nav>
      {/* <LoginForm/> */}
      {/* <RegForm/> */}
      <Form/>
    </>
  );
}

export default App;


// import React, { useState } from 'react'

// function App() {

//   const [formData,setFormData] = useState({
//     name:"",
//     password:""
//   })

//   const [submit,setSubmit] = useState({
//     name:"",
//     password:""
//   })

//   function handleChange(e){
//     const {name,value} = e.target

//     setFormData((prev)=>({
//       ...prev,
//       [name]:value
//     }))
//   }

//   function handleClick(){
//     setSubmit(formData)
//   }
//   return (
//     <>
//       <form>
//         <label htmlFor="name">Name</label>
//         <input 
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         type="text" 
//         id="name" />

//         <label htmlFor="password">Password</label>
//         <input 
//         name="password"
//         value={formData.password}
//         onChange={handleChange}
//         type="password"
//         id='password'
//         />
//         <button type='button' onClick={handleClick}>Submit</button>
//         <div>
//           {submit && (
//             <>
//               <h1>username:{submit.name}</h1>
//               <h1>password:{submit.password}</h1>
//             </>
//           )}
//         </div>
//       </form>
//     </>
//   )
// }

// export default App
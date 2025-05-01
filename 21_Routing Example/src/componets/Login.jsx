import { useState } from "react";
import { useNavigate } from "react-router-dom";
const userDetails = {username:"Venom", password:"1234"}
function Login() {

  const [formData,setFormData] = useState({})
  const navigate = useNavigate()                //use Navigate declaration

  const handleChange = (event) =>{
    const id = event.target.id                //getting the id of each input
    const value = event.target.value          //getting the value of input
    setFormData({...formData, [id]:value})  //setting the value using id and value as key:value
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log(formData);
    if (formData.username === userDetails.username && formData.password === userDetails.password){
      navigate("/")                           //navigate to home page
    }
    else{
      alert("Invalid Details.....Try again")
    }
  }
  return (
    <>
      <div style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
        Login Page
      </div>
      <form onClick={handleSubmit} style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        gap: "10px", 
        padding: "20px", 
        border: "1px solid #ccc", 
        borderRadius: "8px", 
        maxWidth: "300px", 
        margin: "auto", 
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" 
      }}>
        <label htmlFor="username" style={{ fontWeight: "bold" }}>Username:</label>
        <input type="text" id="username" onChange={handleChange} style={{ padding: "8px", width: "100%", borderRadius: "4px", border: "1px solid #ccc" }} />

        <label htmlFor="password" style={{ fontWeight: "bold" }}>Password:</label>
        <input type="password" id="password" onChange={handleChange} style={{ padding: "8px", width: "100%", borderRadius: "4px", border: "1px solid #ccc" }} />

        <button type="submit" style={{ 
          backgroundColor: "#007bff", 
          color: "white", 
          padding: "10px", 
          border: "none", 
          borderRadius: "4px", 
          cursor: "pointer", 
          fontWeight: "bold",
          width: "100%" 
        }}>
          Login
        </button>
      </form>
    </>
  );
}

export default Login;

export default function Login() {
  return (
    <>
      <div style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
        Login Page
      </div>
      <form style={{ 
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
        <input type="text" id="username" style={{ padding: "8px", width: "100%", borderRadius: "4px", border: "1px solid #ccc" }} />

        <label htmlFor="password" style={{ fontWeight: "bold" }}>Password:</label>
        <input type="password" id="password"  style={{ padding: "8px", width: "100%", borderRadius: "4px", border: "1px solid #ccc" }} />

        <button type="submit" style={{ 
          backgroundColor: "#007bff", 
          color: "white", 
          padding: "10px", 
          border: "none", 
          borderRadius: "4px", 
          width: "100%" 
        }}>
          Login
        </button>
      </form>
    </>
  )
}

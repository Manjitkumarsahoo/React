import { useNavigate } from "react-router-dom";
import "../index.css";

function PersonalDetails({ formData, setFormData }){
  const navigate = useNavigate();
  return (
    <div className="container">
      <h2>Personal Details</h2>
      <input type="text" placeholder="First Name" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
      <input type="text" placeholder="Last Name" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
      <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="text" placeholder="Mobile" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
      <button onClick={() => navigate("/education")}>Next</button>
    </div>
  );
};
export default PersonalDetails;
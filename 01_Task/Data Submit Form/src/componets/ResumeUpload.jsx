import { useNavigate } from "react-router-dom";
import "../index.css";

function ResumeUpload({ formData, setFormData }){
  const navigate = useNavigate();
  return (
    <div className="container">
      <h2>Resume</h2>
      <input type="file" onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })} />
      <label>
        <input type="checkbox" checked={formData.agree} onChange={(e) => setFormData({ ...formData, agree: e.target.checked })} /> I agree to the privacy policy
      </label>
      <button onClick={() => navigate("/education")}>Prev</button>
      <button onClick={() => alert("Form Submitted")}>Submit</button>
    </div>
  );
};
export default ResumeUpload;
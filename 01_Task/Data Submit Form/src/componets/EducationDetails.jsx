import { useNavigate } from "react-router-dom";
import "../index.css";

function EducationDetails({ formData, setFormData }){
  const navigate = useNavigate();
  return (
    <div className="container">
      <h2>Education Details</h2>
      <input type="text" placeholder="Last Education" value={formData.education} onChange={(e) => setFormData({ ...formData, education: e.target.value })} />
      <input type="text" placeholder="Stream" value={formData.stream} onChange={(e) => setFormData({ ...formData, stream: e.target.value })} />
      <input type="text" placeholder="College Name" value={formData.college} onChange={(e) => setFormData({ ...formData, college: e.target.value })} />
      <input type="text" placeholder="CGPA" value={formData.cgpa} onChange={(e) => setFormData({ ...formData, cgpa: e.target.value })} />
      <button onClick={() => navigate("/")}>Prev</button>
      <button onClick={() => navigate("/resume")}>Next</button>
    </div>
  );
};
export default EducationDetails;
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EducationDetails from "./componets/EducationDetails";
import PersonalDetails from "./componets/PersonalDetails";
import ResumeUpload from "./componets/ResumeUpload";
import "./index.css";

function App(){
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", mobile: "", education: "", stream: "", college: "", cgpa: "", resume: null, agree: false });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersonalDetails formData={formData} setFormData={setFormData} />} />
        <Route path="/education" element={<EducationDetails formData={formData} setFormData={setFormData} />} />
        <Route path="/resume" element={<ResumeUpload formData={formData} setFormData={setFormData} />} />
      </Routes>
    </Router>
  );
};
export default App;
import React, { useState } from "react";
import "../css/contact.css";
import emailjs from "@emailjs/browser";
function Contact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [toast, setToast] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (name && company && email && phone) {
      const serviceId = "service_grtswy8";
      const templateId = "template_fxfneof";
      const publicKey = "JA_XGf5tvgqFw01Wm";

      const templateParam = {
        user_name: name,
        user_company: company,
        user_email: email,
        user_phone: phone,
      };

      emailjs
        .send(serviceId, templateId, templateParam, publicKey)
        .then((response) => {
          console.log("Email sent successfully!", response);
          setToast({ type: "success", message: "Email sent successfully!" });
          setName("");
          setCompany("");
          setEmail("");
          setPhone("");
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          setToast({ type: "error", message: "Failed to send email." });
        });
    } else {
      setToast({ type: "error", message: "Please fill all fields" });
    }

    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  return (
    <div>
      <div className="contact-container" id="contact">
        <div className="contact-content">
          <div className="contact-text">
            <h1>Ready to Transform Your Hiring Process?</h1>
            <p>Schedule a consultation with our recruitment experts today.</p>
          </div>

          <div className="contact-form">
            <h3>Your Contact Information</h3>
            <form onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <i className="fa fa-user icon"></i>
                <span className="vertical-divider"></span>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-wrapper">
                <i className="fa fa-building icon"></i>
                <span className="vertical-divider"></span>
                <input
                  type="text"
                  placeholder="Company Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div className="contact-row">
                <div className="input-wrapper">
                  <i className="fa fa-envelope icon"></i>
                  <span className="vertical-divider"></span>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="input-wrapper">
                  <i className="fa fa-phone icon"></i>
                  <span className="vertical-divider"></span>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <button type="submit">Request Consultation</button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className={`toast ${toast.type}`}>
          <span>{toast.message}</span>
        </div>
      )}
    </div>
  );
}

export default Contact;

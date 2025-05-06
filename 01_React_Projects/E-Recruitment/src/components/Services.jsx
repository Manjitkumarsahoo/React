import React from "react";
import "../css/service.css";
import techImg from "/assets/technology.svg";
import financeImg from "/assets/finance.svg";
import healthcareImg from "/assets/health.svg";
import manufacturingImg from "/assets/manufacturing.svg";
import retailImg from "/assets/retail.svg";
import professionalImg from "/assets/headphone.svg";

const Service = () => {
  const services = [
    {
      title: "Technology",
      description:
        "Software development, IT infrastructure, cybersecurity, and product management roles.",
      image: techImg,
    },
    {
      title: "Finance",
      description:
        "Banking, investment, accounting, financial analysis, and compliance positions.",
      image: financeImg,
    },
    {
      title: "Healthcare",
      description:
        "Clinical, administrative, research, and healthcare technology professionals.",
      image: healthcareImg,
    },
    {
      title: "Manufacturing",
      description:
        "Engineering, operations, supply chain, and quality assurance specialists.",
      image: manufacturingImg,
    },
    {
      title: "Retail",
      description:
        "Management, merchandising, e-commerce, and customer experience roles.",
      image: retailImg,
    },
    {
      title: "Professional Services",
      description:
        "Consulting, legal, marketing, and business development positions.",
      image: professionalImg,
    },
  ];

  return (
    <section className="industries-section">
      <div className="about-button">
        <p>About Us</p>
      </div>
      <h2 className="industries-title">Industries We Serve</h2>
      <div className="industries-grid">
        {services.map((item, index) => {
          let borderClass = "";

          switch (index) {
            case 0:
              borderClass =
                "border-top-none border-left-none border-right-none border-bottom-none";
              break;
            case 1:
              borderClass =
                "border-top-none border-bottom-none border-right-none";
              break;
            case 2:
              borderClass =
                "border-top-none border-right-none border-bottom-none";
              break;
            case 3:
              borderClass =
                "border-left-none border-bottom-none border-right-none";
              break;
            case 4:
              borderClass = "border-bottom-none border-right-none";
              break;
            case 5:
              borderClass = "border-right-none border-bottom-none";
              break;
            default:
              break;
          }

          return (
            <div className={`industry-card ${borderClass}`} key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="industry-img"
                draggable="false"
              />
              <h3 className="industry-title">{item.title}</h3>
              <p className="industry-desc">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;

import user1 from "/assets/user1.jpg";
import user2 from "/assets/user2.jpg";
import "../css/testimonial.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const testimonials = [
  {
    name: "Michael Chen",
    title: "Senior Software Engineer",
    image: user1,
    quote:
      "Work Force-Today has completely transformed our hiring process. Their team brought a level of professionalism and efficiency that we had been missing. We've successfully reduced our time-to-hire by over 40%, and they consistently deliver high-quality candidates-even for niche and hard-to-fill roles. Their deep understanding of our industry and proactive communication make them more than just a vendor--they're a strategic hiring partner.",
  },
  {
    name: "Sarah Johnson",
    title: "HR Director, TechCorp",
    image: user2,
    quote:
      "The team at Work Force-Today truly went above and beyond. From our very first conversation, they took the time to understand my career goals, strengths, and what I was genuinely looking for in my next role. Their guidance was thoughtful, their communication was timely, and the opportunity they connected me with turned out to be a perfect fit--both professionally and personally. I couldn't be happier with where I've landed, and I credit Work Force-Today for making it happen.",
  },
];

function Testimonials() {
  return (
    <>
      <section className="testimonials-section" id="testimonials">
        <div class="testimonial-button">
          <p>Testimonials</p>
        </div>

        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="user-info">
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.title}</p>
                </div>
              </div>
              <p className="quote-text">
                <span className="quote-icon">
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                </span>
                <br />
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
        <div className="arrow-buttons">
          <button>
            <i class="fa-solid fa-less-than"></i>
          </button>
          <button>
            <i className="fa-solid fa-greater-than"></i>
          </button>
        </div>
      </section>
    </>
  );
}

export default Testimonials;

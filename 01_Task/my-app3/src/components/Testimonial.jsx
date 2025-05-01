import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.jpg';
import '../css/testimonial.css'

const testimonials = [
    {
        name: 'Michael Chen',
        title: 'Senior Software Engineer',
        image: user1,
        quote: `"Work Force - Today has transformed our hiring process. We,ve reduced our time-to-hire by 40% and found exceptional candidates for hard-to-fill positions."`,
    },
    {
        name: 'Sarah Johnson',
        title: 'HR Director, TechCorp',
        image: user2,
        quote: `"The team at Work Force - Today took the time to understand my career goals and found me a position that perfectly matched my skills and aspirations. I couldn't be happier."`,
    },
];

function Testimonials() {

    return (
        <>
            <section className="testimonials-section">
                <p className="section-subtitle">Testimonials</p>
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
                                <span className="quote-icon">❝</span><br />
                                {testimonial.quote}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="arrow-buttons">
                    <button>{'<'}</button>
                    <button>{'>'}</button>
                </div>
            </section>
        </>
    );
};

export default Testimonials;

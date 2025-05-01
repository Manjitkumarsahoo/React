export default function Emp({ showEmp }) {
    return (
        <>
            <section className="container-fluid mt-4">
                <div className="card">
                    <div className="card-header bg-dark text-white text-center">
                        <h1>Employee Details</h1>
                    </div>
                    <div className="card-body text-center">
                        <img src={showEmp.img} width="100" height="100" className="mb-3" />
                        <h3>{showEmp.name}</h3>
                        <p>Salary: ₹{showEmp.sal}</p>
                        <p>Experience: {showEmp.Exp} years</p>
                    </div>
                </div>
            </section>
        </>
    );
}

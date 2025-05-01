function Employee(props){
    return(<>
                <section className="container-fluid mt-4">
                    <div className="row">
                        <p>{JSON.stringify(props)}</p>               {/*  We have to conver object in to string */}
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h2>Hi {props.ename}</h2>
                                    <p>Age is : {props.age}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
           </>)
}
export default Employee;
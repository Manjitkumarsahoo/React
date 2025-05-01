import image1 from '../assets/bb.jpg';
class Card extends React.Component{
    render()
    {
        return  <>
            <section className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <div className="card">
                            <div className="card-head">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxOgBBVH7wKGiMaHP3hauiBJB2ZXtem-EoEQ&s" alt=""  className="img-fluid"/>
                            </div>
                            <div className="card-body text-center">
                                <h2>pushpa-2</h2>
                                <h4>Allu Arjun</h4>
                                <button className="btn btn-primary btn-md">Watch Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <div className="card-head">
                                <img src={require("../assets/kgf.jpeg")} alt="" />
                            </div>
                            <div className="card-body text-center">
                                <h2>Kgf-2</h2>
                                <h4>Yesh</h4>
                                <button className="btn btn-primary btn-md">Watch Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <div className="card-head">
                                <img src={image1} alt="" />
                            </div>
                            <div className="card-body text-center">
                                <h2>Bahubali</h2>
                                <h4>Prabhash</h4>
                                <button className="btn btn-primary btn-md">Watch Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <div className="card-head">
                                <img src="images/jawan.jpg" alt="" />
                            </div>
                            <div className="card-body text-center">
                                <h2>Jawan</h2>
                                <h4>SRK</h4>
                                <button className="btn btn-primary btn-md">Watch Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
</>
    }
}
export default Card;
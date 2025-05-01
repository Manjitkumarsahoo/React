import React from "react";
class Card extends React.Component{
    constructor() {
        super();
        this.state = {
          movieData: {
            id: 101,
            mName: "Pushpa-2",
            hName: "Allu Arjun",
            imgURL: "assets/pr.jpg",
          },
        };
      }

    render(){
        return(
            <>
                <section className="container-fluid mt-4">
                    <div className="row">
                        <div className="col-3">
                            <div className="card">
                                <div className="card-head">
                                    <img src={this.state.movieData.imgURL} alt=""  className="img-fluid"/>
                                </div>
                                <div className="card-body text-center">
                                    <h2>{this.state.movieData.mName}</h2>
                                    <h4>{this.state.movieData.hName}</h4>
                                    <button className="btn btn-primary btn-md">Watch Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }  
}
export default Card;
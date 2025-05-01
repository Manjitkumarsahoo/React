import React from 'react'
function Card(){
    
     let {imgURL,mName,hName}=this.props;
        
        return (
            <>
                <div className="card">
                   <div className="card-head">
                       <img src={imgURL} alt=""  className="img-fluid"/>
                   </div>
                   <div className="card-body text-center">
                       <h2>{mName}</h2>
                       <h4>{hName}</h4>
                       <button className="btn btn-primary btn-md">Watch Now</button>
                   </div>
                </div>
            </>
        )
    
}

export default Card;
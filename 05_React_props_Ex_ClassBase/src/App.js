import React from "react";
import Card from "./componets/Card";
import "./componets/Card.css"

let movie1 = {id:101, mName:"Pushpa-2" , hName :"Allu Arjun" , imgURL:"assets/pr.jpg"};
let movie2 = {id:102, mName:"KGF-2" , hName :"Yesh" , imgURL:"assets/kgf.jpeg"};
let movie3 = {id:103, mName:"Bahubali-2" , hName :"Prabhas" , imgURL:"assets/bb.jpg"};
let movie4 = {id:104, mName:"Jawan" , hName :"Sharukh" , imgURL:"assets/jawan.jpg"};

let movieData = [movie1,movie2,movie3,movie4]

class App extends React.Component{
  render(){
    return(
      <>
            
          <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
              <p className="navbar-brand">
                 React Props Example
              </p>
            </div>
          </nav>
          <section className="container-fluid">
            <div className="row">
              <div className="col-3">
                <Card imgURL={movieData[0].imgURL} hName={movieData[0].hName} mName = {movieData[0].mName} />
              </div>
              <div className="col-3">
                <Card imgURL={movieData[1].imgURL} hName={movieData[1].hName} mName = {movieData[1].mName} />
              </div>
              <div className="col-3">
                <Card imgURL={movieData[2].imgURL} hName={movieData[2].hName} mName = {movieData[2].mName} />
              </div>
              <div className="col-3">
                <Card imgURL={movieData[3].imgURL} hName={movieData[3].hName} mName = {movieData[3].mName} />
              </div>
            </div>
          </section>
    </>
    
    )
  }
}

export default App;

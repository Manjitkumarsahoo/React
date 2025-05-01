import React, { Component } from "react";
import Card from "./componets/Card";
import './componets/Card.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: [
        { id: 101, mName: "Pushpa-2", hName: "Allu Arjun", imgURL: "assets/pr.jpg" },
        { id: 102, mName: "KGF-2", hName: "Yash", imgURL: "assets/kgf.jpeg" },
        { id: 103, mName: "Bahubali-2", hName: "Prabhas", imgURL: "assets/bb.jpg" },
        { id: 104, mName: "Jawan", hName: "Shahrukh", imgURL: "assets/jawan.jpg" },
      ],
    };
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <p className="navbar-brand">React Class Component Example</p>
          </div>
        </nav>

        <section className="container-fluid mt-4">
          <div className="row">
            <div className="col-3">
              <Card imgURL={this.state.movieData[0].imgURL} hName={this.state.movieData[0].hName} mName = {this.state.movieData[0].mName} />
            </div>
            <div className="col-3">
              <Card imgURL={this.state.movieData[1].imgURL} hName={this.state.movieData[1].hName} mName = {this.state.movieData[1].mName} />
            </div>
            <div className="col-3">
              <Card imgURL={this.state.movieData[2].imgURL} hName={this.state.movieData[2].hName} mName = {this.state.movieData[2].mName} />
            </div>
            <div className="col-3">
              <Card imgURL={this.state.movieData[3].imgURL} hName={this.state.movieData[3].hName} mName = {this.state.movieData[3].mName} />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default App;

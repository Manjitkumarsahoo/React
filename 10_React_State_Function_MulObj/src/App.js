import React, { useState } from "react";
import Card from "./componets/Card";
import './componets/Card.css';

function App() {
  const [state, setMovieData] = useState({
    movieData: {
      movie1: { id: 101, mName: "Pushpa-2", hName: "Allu Arjun", imgURL: "assets/pr.jpg" },
      movie2: { id: 102, mName: "KGF-2", hName: "Yash", imgURL: "assets/kgf.jpeg" },
      movie3: { id: 103, mName: "Bahubali-2", hName: "Prabhas", imgURL: "assets/bb.jpg" },
      movie4: { id: 104, mName: "Jawan", hName: "Shahrukh", imgURL: "assets/jawan.jpg" },
    },
  });

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <p className="navbar-brand">React Function Component Example</p>
        </div>
      </nav>

      <section className="container-fluid mt-4">
        <div className="row">
          <div className="col-3">
            <Card imgURL={state.movieData.movie1.imgURL} hName={state.movieData.movie1.hName} mName={state.movieData.movie1.mName} />
          </div>
          <div className="col-3">
            <Card imgURL={state.movieData.movie2.imgURL} hName={state.movieData.movie2.hName} mName={state.movieData.movie2.mName} />
          </div>
          <div className="col-3">
            <Card imgURL={state.movieData.movie2.imgURL} hName={state.movieData.movie2.hName} mName={state.movieData.movie2.mName} />
          </div>
          <div className="col-3">
            <Card imgURL={state.movieData.movie3.imgURL} hName={state.movieData.movie3.hName} mName={state.movieData.movie3.mName} />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

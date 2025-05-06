import React from "react";
import Navbar from "./componets/Navbar";
import Sidebar from "./componets/Sidebar";
import Footer from "./componets/footer";
import Card from "./componets/Card";
import "./componets/Card.css"
import Wishmessage from "./componets/Wishmessage";
import Greetmessage from "./componets/Greetmesage";


function App() {
  return (
    // <div className="container">
    //   <Navbar />
    //   <div className="content">
    //     <Sidebar />
    //     <main className="main">
    //       <Card />
    //     </main>
    //   </div>
    //   <Footer />
    // </div>
    // <Wishmessage/>
    <Greetmessage/>
  );
}

export default App;

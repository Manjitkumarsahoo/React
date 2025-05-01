import { useState } from "react";

export default function Form() {
  const [color, setColor] = useState({ input1: "",input2:"" , background: "" ,color:""});

  function handleInputChange(e) {
    setColor({ ...color, input1: e.target.value });
  }

  function handleColorChange(e){
    setColor({...color,input2:e.target.value})
  }

  function handleSubmit() {
    setColor({ ...color, background: color.input1 ,color:color.input2 }); 
  }

  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-4 m-auto">
          <div className="card">
            <div className="card-body" style={{ backgroundColor: color.background }}>
              <div>
                    <div style={{color:color.color}}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt impedit quod quam voluptates eos ex temporibus sint dicta, ipsum necessitatibus.
                    </div>&nbsp;
                    <input
                    type="text"
                    value={color.input1}
                    onChange={handleInputChange}
                    placeholder="Enter background color"
                    />
                    <input
                    type="text"
                    value={color.input2}
                    onChange={handleColorChange}
                    placeholder="Enter text color"
                    />
                    <button onClick={handleSubmit} className="btn btn-primary ms-2">
                    Submit
                    </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

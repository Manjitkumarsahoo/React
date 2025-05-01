import { useState } from "react";

function Products(){

    const[state,setState] = useState({
        items:[ {id:101,imgURL:"https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UF1000,1000_QL80_.jpg",pname:"Iphone",price:120000,qty:12},
                {id:102,imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIOB8qzCdLF_45V1j3_rrIR0Z5YSyQS5Vq7Q&s",pname:"Samsung",price:130000,qty:7},
                {id:103,imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgn4EF9a3lRtD_vfeSb2Px4prWZaBLBq3hoA&s",pname:"Pixel",price:140000,qty:0}
            ]
    })

    let {items} = state;

    return(
        <>
            <section className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        {
                            items.map((item)=>{
                                return(
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-4">
                                                    <img src={item.imgURL} alt={item.pname} width={150} height={200}/>
                                                </div>
                                                <div className="col-8">
                                                    <h1>{item.pname}</h1>
                                                    <h2>{item.price}</h2>
                                                    <h6>
                                                        {
                                                            item.qty > 10 && <span className="text-success">Stock Avaliable</span>
                                                        }
                                                        {
                                                            item.qty >=1 && item.qty <10 && <span className="text-warning">Few Left</span>
                                                        }
                                                        {
                                                            item.qty == 0 && <span className="text-danger">Out of Stock</span>
                                                        }
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
export default Products;
import { useState } from "react";
function Products(){

    const[state,setState] = useState({
        items:[ {id:101,imgURL:"https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UF1000,1000_QL80_.jpg",pname:"Iphone",price:120000,qty:1},
                {id:102,imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIOB8qzCdLF_45V1j3_rrIR0Z5YSyQS5Vq7Q&s",pname:"Samsung",price:130000,qty:1},
                {id:103,imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgn4EF9a3lRtD_vfeSb2Px4prWZaBLBq3hoA&s",pname:"Pixel",price:140000,qty:1}
            ],
        showTotal:false
    });

    let {items,showTotal} = state;

    function handleInc(id){
        let products = items.map((item)=>{
            if(item.id == id){
                return {...item,qty:item.qty + 1};
            }
            else
            {
                return item;
            }
        });
        setState({ ...state, items: products });
    }

    function handleDec(id){
        let products = items.map((item)=>{
            if(item.id == id){
                return {...item,qty:item.qty>1?item.qty-1:1};
            }
            else
            {
                return item;
            }
        });
        setState({ ...state, items: products });
    }

    function total(){
        let sum = 0;
        for(let item of items){
            sum += (item.qty * item.price);
        }
        return sum;
    }

    function handleCheckOut(){
        setState({...state,showTotal:true})
    }

    return(
        <>
            <section className="container-fluid">
                <h2>Products Detailes:-</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio labore nostrum aut laboriosam modi earum vero amet vel expedita iusto tenetur quaerat officia illum delectus ducimus laborum dignissimos eligendi perferendis commodi, dicta non dolorum. Optio distinctio natus ipsum magni numquam quae in doloribus? Officia, aliquam. Aspernatur reiciendis nulla in asperiores?</p>
                <button className="btn btn-dark"onClick={handleCheckOut}>Check Out</button>
            </section>
            <section className="container-fluid mt-4">
                <div className="row">
                    <div className="col">
                        <table className="table text-center">
                            <thead className="table-dark">
                                <tr>
                                    <th>Pid</th>
                                    <th>PImg</th>
                                    <th>PName</th>
                                    <th>PPrice</th>
                                    <th>Pqty</th>
                                    <th>Total price</th>
                                </tr>   
                            </thead>
                            <tbody>
                                {
                                    items.map((item)=>{
                                        return(
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>
                                                    <img src={item.imgURL} alt="" height={40} width={40} />
                                                </td>
                                                <td>{item.pname}</td>
                                                <td>₹{item.price}</td>
                                                <td>
                                                    <i className="fa fa-minus-circle" onClick={()=>{handleDec(item.id)}}></i>
                                                    &nbsp; {item.qty} &nbsp;
                                                    <i className="fa fa-plus-circle"onClick={()=>{handleInc(item.id)}}></i>
                                                </td>
                                                <td>₹{item.price * item.qty}</td>
                                            </tr>
                                        )
                                    })
                                    
                                }
                                <tr>
                                    {
                                        showTotal &&(
                                            <>
                                            <td colSpan={4}></td>
                                            <td>Total Price:-</td>
                                            <td><span className="text-danger">₹{total()}</span></td>
                                            </>
                                        )
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Products;
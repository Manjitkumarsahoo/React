import { useState } from "react"

export default function Product(){

    const[state,setState] = useState({
        item:{
            id:101,
            imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ykb8tRSAlZ6fzzQqvoxdIBMe0cVwKF0wfQ&s",
            pName :"I Phone",
            price:120000,
            Qty:1
        }
    })

    let{item}=state

    function handleDec(){
        setState((value)=>{
            return{
                item:{
                    ...value.item,
                    Qty : value.item.Qty >1 ? value.item.Qty - 1 : 1
                }
            }
        })
    }

    function handleInc(){
        setState((value)=>{
            return{
                item:{
                    ...value.item,
                    Qty : value.item.Qty + 1
                }
            }
        })
    }


    return (
        <>
            <section className="container-fluid mt-2">
                <h1>Cart Module</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore pariatur deserunt exercitationem voluptate. Tempora, debitis illum obcaecati nesciunt minima veritatis! Explicabo magni placeat suscipit debitis quas enim vero commodi cum dolor earum, tempora doloribus iusto dolores quae in necessitatibus accusantium.</p>
                <button className="bg-dark text-white">Ckeck Out</button>
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
                                <tr>
                                    <td>{item.id}</td>
                                    <td>
                                        <img src={item.imgURL} alt="" height={40} width={40} />
                                    </td>
                                    <td>{item.pName}</td>
                                    <td>₹{item.price}</td>
                                    <td>
                                        {item.Qty > 1 && (
                                            <i className="fa fa-minus-circle" onClick={handleDec}></i>
                                        )}
                                        &nbsp; {item.Qty} &nbsp;
                                        {item.Qty < 5 && (
                                            <i className="fa fa-plus-circle" onClick={handleInc}></i>
                                        )}
                                    </td>
                                    <td>₹{item.price * item.Qty}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}
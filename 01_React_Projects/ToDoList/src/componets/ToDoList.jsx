import { useState } from "react"

// let initialTasks = [{id:101,taskName:"Study",isDone:true},
//                 {id:102,taskName:"Practice",isDone:false},
//                 {id:103,taskName:"Give Mock",isDone:true}]

export default function ToDoList(){

    let[tasks,setTasks]=useState([])

    function addTask(obj){
        setTasks((prevstate)=>([...prevstate,obj]))
        
    }

    function handleDeleteTask(id){
        setTasks((tasks)=>tasks.filter(task => task.id !==id))
    }
    function handleToggleTask(id){
        setTasks(tasks => tasks.map(task => task.id == id?{...task,isDone: !task.isDone}:task))
    }

    return(
        <>
            <Form onAdditem={addTask}/>
            <TaskList taskList={tasks} onDeleteItem={handleDeleteTask} onToggleItem={handleToggleTask}/>
            <Start taskList={tasks}/>

        </>
    )
}

function Form({onAdditem}){

    let[task,setTask]=useState("")
    

    function handleSubmit(e){

        e.preventDefault();

        if(task == "")return;

        let newObj = {task,id:Math.trunc(Math.random()*10),isDone:false};
        onAdditem(newObj);
        
        setTask("")
    }

    return(
        <>
            <section className="container-fluid mt-4">
                <div className="row">
                    <div className="col-4 m-auto">
                        <div className="card text-center">
                            <div className="card-header bg-dark text-white">
                                <h1>ToDo List</h1>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <input type="text" placeholder="Enter Task" className="form-control mt-2" value={task} onChange={(e)=>setTask(e.target.value)}/>
                                    </div>
                                    <div className="mt-2">
                                        <input type="submit" className=" btn btn-dark mt-2" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

function TaskList({taskList,onDeleteItem,onToggleItem}){
    return(
        <>
            <section className="container-fluid mt-3">
                <div className="row">
                    <div className="col-4 m-auto">
                        <div className="card">
                            <div className="card-body">
                                <ul className="list-group">
                                    {
                                        taskList.map(task=><Task item={task} key={task.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}/>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

function Task({item,onDeleteItem,onToggleItem}){
    
    return(
        <>
            <li className="list-group-item list-group-item-secondary mb-2">
                <input type="checkbox" value={item.isDone} onChange={()=>onToggleItem(item.id)}/>
                <span className="fw-bold" style={item.isDone?{textDecoration: "line-through"}:{}}>{item.task}</span>
                <button className="btn float-end" onClick={()=>onDeleteItem(item.id)}>❌</button>
            </li>
        </>
    )
}

function Start({taskList}){
    let totalTask=taskList.length;
    if(totalTask==0)
    {
        return<h1>Your TaskList is Empty, Please Add Some Tasks</h1>;
    }
    let completeTasks=taskList.filter(task => task.isDone).length;
    let percentage= Math.trunc((completeTasks/totalTask)*100);

    return(<>
    {
        percentage==100?<h1 className="text-success">Congratulation!! You Have Done Daily Task😊</h1>:<h1>You Have {totalTask} Items In Your 
        Task List, Then You Have Completed  {completeTasks} Tasks {percentage}%</h1>
    }
    </>)


}
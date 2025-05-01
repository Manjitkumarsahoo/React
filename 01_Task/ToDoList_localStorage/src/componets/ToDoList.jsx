import { useState } from "react";

export default function ToDoList() {
    let [tasks, setTasks] = useState(() => {
        return JSON.parse(localStorage.getItem("tasks")) || [];
    });

    function addTask(obj) {
        setTasks((prevState) => {
            let updatedTasks = [...prevState, obj];
            localStorage.setItem("tasks", JSON.stringify(updatedTasks)); 
            return updatedTasks;
        });
    }

    function handleDeleteTask(id) {
        setTasks((tasks) => {
            let updatedTasks = tasks.filter(task => task.id !== id);
            localStorage.setItem("tasks", JSON.stringify(updatedTasks)); 
            return updatedTasks;
        });
    }

    function handleToggleTask(id) {
        setTasks(tasks => {
            let updatedTasks = tasks.map(task => task.id === id ? { ...task, isDone: !task.isDone } : task);
            localStorage.setItem("tasks", JSON.stringify(updatedTasks)); 
            return updatedTasks;
        });
    }

    return (
        <>
            <Form onAddItem={addTask} />
            <TaskList taskList={tasks} onDeleteItem={handleDeleteTask} onToggleItem={handleToggleTask} />
            <Start taskList={tasks} />
        </>
    );
}

function Form({ onAddItem }) {
    let [task, setTask] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (task === "") return;

        let newObj = { task, id: Math.trunc(Math.random() * 10000), isDone: false };
        onAddItem(newObj);

        setTask("");
    }

    return (
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
                                        <input
                                            type="text"
                                            placeholder="Enter Task"
                                            className="form-control mt-2"
                                            value={task}
                                            onChange={(e) => setTask(e.target.value)}
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <input type="submit" className="btn btn-dark mt-2" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function TaskList({ taskList, onDeleteItem, onToggleItem }) {
    return (
        <>
            <section className="container-fluid mt-3">
                <div className="row">
                    <div className="col-4 m-auto">
                        <div className="card">
                            <div className="card-body">
                                <ul className="list-group">
                                    {taskList.map(task => (
                                        <Task item={task} key={task.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function Task({ item, onDeleteItem, onToggleItem }) {
    return (
        <>
            <li className="list-group-item list-group-item-secondary mb-2">
                <input type="checkbox" checked={item.isDone} onChange={() => onToggleItem(item.id)} />
                <span className="fw-bold" style={item.isDone ? { textDecoration: "line-through" } : {}}>{item.task}</span>
                <button className="btn float-end" onClick={() => onDeleteItem(item.id)}>❌</button>
            </li>
        </>
    );
}

function Start({ taskList }) {
    let totalTask = taskList.length;
    if (totalTask === 0) {
        return <h1>Your TaskList is Empty, Please Add Some Tasks</h1>;
    }
    let completeTasks = taskList.filter(task => task.isDone).length;
    let percentage = Math.trunc((completeTasks / totalTask) * 100);

    return (
        <>
            {percentage === 100 ? (
                <h1 className="text-success">Congratulations!! You Have Completed All Tasks 😊</h1>
            ) : (
                <h1>
                    You Have {totalTask} Items In Your Task List, You Have Completed {completeTasks} Tasks ({percentage}%)
                </h1>
            )}
        </>
    );
}

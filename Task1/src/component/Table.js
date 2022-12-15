import React, { useState } from 'react';
import './Add.css';

import { Button, Modal } from 'react-bootstrap'

const Add = () => {


    let [todouser, setTodouser] = useState("");
    let [empty, setEmpty] = useState("No todo list...");
    let [todo, setTodo] = useState([]);
    let [todolist, setTodolist] = useState("hi");
    let [todos, setTodos] = useState(false);
    let [count, setCount] = useState(0);
    let [id, setId] = useState(0);
    let [open, setOpen] = useState(false);

    function main(){
        console.log("yes!!")
        
            function addTodo() {
                setTodo([...todo, todouser])
                setEmpty("")
                setCount(count + 1);
    
    
            }
            function Delete(id) {
                setCount(count - 1)
    
                const newTodo = todo.filter((data, index) => {
                    if (id !== index) {
                        return data;
                    }
                })
                setTodo(newTodo);
                if (count === 1) {
                    setEmpty("No todo list....");
                }
            }
    
            return (
                <div className='main'>
    
                    <div className="mb-3 my-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Add Todos</label>
                        <input type="text" className="form-control" required placeholder='Enter your title here...' value={todouser} onChange={(e) => {
                            setTodouser(e.target.value);
    
                        }}></input>
    
                    </div>
    
                    <button type="submit" className="btn btn-primary" onClick={addTodo}>Add</button>
                    <button type="submit" className="btn btn-primary" style={{ float: 'right' }} onClick={() => { setTodouser("") }}>clear</button>
    
    
                    <div className="list" style={{ minHeight: "50.4vh", marginBottom: "30px" }}>
                        <p>My todos list</p>
                        <table className="table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th scope="col" style={{ width: "8%" }}>#</th>
                                    <th scope="col" style={{ width: "72%" }}>Title</th>
    
                                    <th scope="col" style={{ textAlign: "center" }}>Actions</th>
                                </tr>
                            </thead>
    
                            <tbody>
    
                                {todo.map((lists, index) => {
                                    return (
    
                                        <>
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td>{lists}</td>
    
                                                <td >
                                                    <button type="submit" style={{ marginRight: '8px' }} className="btn btn-danger btn-sm" onClick={() => { Delete(index) }}>Delete</button>
                                                    <button type="submit" style={{ marginRight: '8px' }} className="btn btn-primary btn-sm" onClick={() => {
                                                        setTodos(true);
                                                        setId(index);
                                                        setTodolist(lists);
                                                        setOpen(true)
                                                        
                                                    }}>Edit</button>
                                                </td>
                                            </tr>
    
    
    
    
                                        </>
                                    )
                                })}
    
                            </tbody>
                        </table>
    
    
                    </div>
                </div>
            )
        

    }
    if (todos === false) {
        console.log("am")
        return main(); 
    }

    if(todos===true) {
       
        
        function handleModalSave() {
            todo[id] = todolist;
            setOpen(!open);
            setTodos(false)

        }
        function handleModalClose() {
            setOpen(!open);
            setTodos(false);

        }

        return (
            <>
            {main()}
                <Modal show={open}>
                    <Modal.Header>Edit Todo</Modal.Header>
                    <Modal.Body>

                        <div className="mb-3 my-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Edit Todo</label>
                            <input type="text" className="form-control" value={todolist} onChange={(e) => {
                                setTodolist(e.target.value)
                            }}></input>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => {
                            handleModalClose();
                        }}>close</Button>
                        <Button onClick={() => { handleModalSave(); }}>save</Button>

                    </Modal.Footer>
                </Modal>
                
            </>
        );
        

    }


}

export default Add;
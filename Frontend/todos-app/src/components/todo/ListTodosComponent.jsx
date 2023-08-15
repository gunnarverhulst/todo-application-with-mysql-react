
import { useEffect, useState } from "react";
import { retrieveAllTodosForUsername, deleteTodoById } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ListTodosComponent() {

    const [todos, setTodos] = useState([])

    const [message, setMessage] = useState(null)

    const authContext = useAuth()

    const navigate = useNavigate()

    useEffect(() => refreshTodos(), [])

    function refreshTodos() {
        retrieveAllTodosForUsername(authContext.username)
            .then(response => {
                setTodos(response.data)
            })
            .catch(error => console.log(error))
            .finally(console.log('cleanup'))
    }

    function deleteTodo(id) {
        console.log('delete')
        deleteTodoById(authContext.username, id)
            .then(

                () => {
                    setMessage(`Delete Todo with id = ${id} successful`)
                    refreshTodos()
                }
            )
            .catch()
            .finally()
    }

    function updateTodo(id) {
        console.log('update')
        navigate(`/todo/${id}`)
    }

    function addTodo() {
        console.log('add')
        navigate(`/todo/-1`)
    }

    return (
        <div className="container">
            <h1>Your Todos</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>is Done</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo) => (
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.isCompleted.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td>
                                        <button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}>Delete</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-success" onClick={() => updateTodo(todo.id)}>Update</button>
                                    </td>
                                </tr>
                            )
                        )}
                            
                    </tbody>
                </table>
                <button className="btn btn-success m-5" onClick={() => addTodo()}>Add New Todo</button>
            </div>
        </div>
    )
}
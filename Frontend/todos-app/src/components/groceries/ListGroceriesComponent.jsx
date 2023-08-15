
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ListGroceriesComponent() {

    const [message, setMessage] = useState(null)

    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>Your Todos</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Maaltijd</th>
                            <th>Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                           <td>Hot Dogs</td> 
                           <td>Worstjes</td>
                        </tr>
                        <tr>
                           <td>Hot Dogs</td> 
                           <td>Sandwiches</td>
                        </tr>
                        <tr>
                           <td>Hot Dogs</td> 
                           <td>Mayo</td>
                        </tr>
                        <tr>
                           <td>Hot Dogs</td> 
                           <td>Ketchup</td>
                        </tr>
                        
                          
                    </tbody>
                </table>
            </div>
        </div>
    )
}
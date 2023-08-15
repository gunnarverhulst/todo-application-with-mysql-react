import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function WelcomeComponent(){
    
    const { username } = useParams();
    const [message, setMessage] = useState(null)

    function successsfulResponse(response){
        console.log(response)
        setMessage(response)
    }

    function errorResponse(error){
        console.log(error)
    }

    return (
        <div className="WelcomeComponent">
            <h1>
                Welcome at Root2Code {username}
            </h1>
            <div>Manage Your Todos <Link to="/todos">Go here</Link></div>
            <div className='text-info'>{message}</div>
        </div>
    )
}
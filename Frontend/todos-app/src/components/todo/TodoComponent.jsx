import { useNavigate, useParams } from "react-router-dom"
import { retrieveTodoApi, updateTodoApi, addTodoApi } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useEffect, useState } from "react"
import { Field, Formik,Form, ErrorMessage } from "formik"
import moment from 'moment'


export default function TodoComponent() {

    const { id } = useParams()

    const authContext = useAuth()

    const navigate = useNavigate()

    const [description, setDescription] = useState(null)
    const [creationDate, setCreationDate] = useState(null)
    const [targetDate, setTargetDate] = useState(null)

    useEffect(() => {
        retrieveTodos()
    }, [id])

    function retrieveTodos() {

        if(id !== -1){
            retrieveTodoApi(authContext.username, id)
            .then(response => {
                setDescription(response.data.description)
                setCreationDate(response.data.creationDate)
                setTargetDate(response.data.targetDate)
            })
            .catch(error => console.log(error))
            .finally(console.log('cleanup'))
        }
        
    }

    function onSubmit(values){
        console.log(targetDate)
        const todo = {
            id: id,
            username: authContext.username,
            description: values.description,
            //creationDate: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
            targetDate: values.targetDate
        }
        
        console.log(todo.creationDate)
        
        if(id === -1){
            addTodoApi(authContext.username, todo)
            .then(response => {
                console.log(response)
                navigate('/todos')
            })
            .catch(error => console.log(error))
        } else {
            updateTodoApi(authContext.username, id, todo)
                .then(response => {
                    console.log(response)
                    navigate('/todos')
                })
                .catch(error => console.log(error))
        }
        

    }

    function validate(values){
        let errors = {}

        if(values.description.length < 5 || values.description.length === null){
            errors.description = 'Enter a valid description'
        }

        if (values.targetDate === null || values.targetDate === '' || !moment(values.targetDate).isValid()) {
            errors.targetDate = 'Enter a valid target date'
        }

        return errors
    }

    return (
        <div className="container">
            <h1>Enter todo Details</h1>
            <div>
                <Formik initialValues={ { description, targetDate } } 
                    enableReinitialize={true} 
                    onSubmit={onSubmit}
                    validate={validate}
                    validateOnChange={false}
                    validateOnBlur={false}>
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage 
                                name='description'
                                component='div'
                                className="alert alert-warning" />

                                <ErrorMessage 
                                name='targetDate'
                                component='div'
                                className="alert alert-warning" />

                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field type="text" className='form-control' name='description'/>
                                </fieldset>

                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field type="date" className='form-control' name='targetDate'/>
                                </fieldset>

                                <div>
                                    <button className="btn btn-success m-5" type='submit' >Save</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}
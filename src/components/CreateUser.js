import { useState } from "react";
import axios from "axios";

export default function CreateUser() {

    //The React useState Hook allows us to track state in a function component. 
    //State generally refers to data or properties that need to be tracking in an application.
    const [inputs, setInputs] = useState({})

    //handleChange function - handleChange is triggered by the input element and triggers the changing of the this. state. value property which in turn changes the value of the input field. 
    //This is important because react uses states to display information in the DOM.
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value })); //... will create a single one

    }

    //handleSubmit function 
    const handleSubmit = (event) => {
        event.preventDefault(); //preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

        axios.post('http://localhost:8080/api/users/save' , inputs);
        console.log(inputs);
    }

    return (
        <div>
            <h1>Create Users</h1>

            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Name</label>
                            </th>
                            <td>
                                <input type="text" name="name" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label>Email</label>
                            </th>
                            <td>
                                <input type="text" name="email" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label>Mobile</label>
                            </th>
                            <td>
                                <input type="text" name="mobile" onChange={handleChange} />
                            </td>
                        </tr>

                        <td colSpan="2" align="right">
                            <button>Save</button>
                        </td>



                    </tbody>
                </table>


            </form>
        </div>
    )
}
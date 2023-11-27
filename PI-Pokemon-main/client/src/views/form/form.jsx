import { useState, useEffect } from "react";
import validation from "./validations";
//import "form.css"

const Form = ({ login }) => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    useEffect(() => {
        if(userData.email !== '' || userData.password !== ''){
            const userValidated = validation(userData);
            setErrors(userValidated);
        }
    }, [userData]);

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input 
                type="email" 
                name="email" 
                value={userData.email}
                onChange={handleChange}
            />
            {errors.email && <p style={{ color: 'red' }} >{errors.email}</p>}

            <br/>

            <label htmlFor="password">Password: </label>
            <input 
                type="text" 
                name="password" 
                value={userData.password} 
                onChange={handleChange}
            />
            {errors.password && <p style={{ color: 'red' }} >{errors.password}</p>}

            <br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;
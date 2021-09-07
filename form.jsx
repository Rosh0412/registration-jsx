import React, { useState } from 'react';
import './form.css';
export const Form = (props) => {
    const [formData, setFormData] = useState({});
    const {submitRegistrationData} = props;

    const textNameHandler = (event) => {
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        });
    }

    const handleSubmit = (event) => {

        alert("registration is done");
        submitRegistrationData(formData);
    event.preventDefault();
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <form onSubmit={handleSubmit}>
            <h1>Employee Registration Form</h1><br></br>
                <label>User Name:</label><br />
                <input type="text" value={formData.UserName} onChange={textNameHandler}  name="UserName"required /><br />
                <label>Phone Number:</label><br/>
                <input type="text" value={formData.phoneNumber} onChange={textNameHandler}  name="phoneNumber"
                 title="should contain numbers only and size should be 10" pattern="[1-9]{1}[0-9]{9}" required/><br />
                <label>e-mail id:</label> <br/>
                <input type="email" name="Email" value={formData.Email}></input><br/>
                <label for="adharNumber">AdharNumber:</label><br/>
                <input type="text" value={formData.adharNo} onChange={textNameHandler}  name="adharNo" required/><br />
                <label for="pswd">Password:</label><br />
                <input type="password" value={formData.password} onChange={textNameHandler} name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required ></input><br /><br />
                <input type="submit" value="Submit" />
            </form>
            <br />
        </div>
    )
}
export default Form; 
 
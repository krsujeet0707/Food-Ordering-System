import React, { Component } from 'react';
import { useFormik } from 'formik'
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/Signup.css'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios'
import moment from 'moment'
import { useHistory } from 'react-router-dom';

function Signup() {
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            name: "",
            contact: "",
            //gender: "",
            email: "",
            password: "",
            confpass: ""
        },
        onSubmit: values => {
            console.log('Form data', values)
        },
        validate: values => {
            let errors = {}
            if (values.name.length > 50 || values.name.length < 4) {
                errors.name = "Name is Required between length 4-50"
            }
            // if (!/(7|8|9)\d{9}/.test(values.contact)) {
            if (!/^\d{10}$/.test(values.contact)) {
                errors.contact = "10-digit ContactNo. is Required"
            }
            if (!values.email) {
                errors.email = "UserId is Required"
            } else if (values.email.length > 50 || values.email.length < 4) {
                errors.email = "UserId is Required between length 4-50"
            }
            // if (!values.gender) {
            //     errors.gender = "Select Gender"
            // }
            if (values.password.length < 6 || !/^(?=.*[!@#$%^&*])/.test(values.password)) {
                errors.password = "Create Password(Minimum 6 char and one special character)"
            }
            if (values.confpass.length < 6 || !/^(?=.*[!@#$%^&*])/.test(values.confpass)) {
                errors.confpass = "Confirm Password"
            }
            return errors
        }
    })

    function RegisterUserDetail() {
        const data = {
            customerName: formik.values.name,
            mobileNumber: formik.values.contact,
            userName: formik.values.email,
            password: formik.values.password,
        }
        if (formik.values.password === formik.values.confpass && Object.values(formik.errors).length === 0) {
            axios.post('http://localhost:8080/addUser', data)
                .then(response => {
                    console.log(response)
                    alert("Successfully Registered");
                    history.push('/login')
                })
                .catch(error => {
                    if (error.response != null) {
                        console.log(error.response.data.message)
                        alert(error.response.data.message);
                    }
                    else {
                        alert("Error Registering");
                    }
                    console.log(data);
                });
        }
        else {
            if (!(Object.values(formik.errors).length === 0)) {
                console.log("formik error empty or not", Object.values(formik.errors).length === 0)
                console.log(formik.errors)
                alert('Fill all data correctly(Validation failed)')
            }
            else {
                console.log("formik error empty or not", Object.values(formik.errors).length === 0)
                console.log(formik.errors)
                alert('Password and Confirm password do not match')
            }
        }
    }

    return (
        <div className="container pb-3 mt-5 border" style={{ textAlign: "left" }}>

            <form className="ml-5 mr-5 pt-3" onSubmit={formik.handleSubmit}>
                <h2>Basic Details</h2>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor='name'>Name:</label><br />
                        <input className="perftext" type='text' id='name' name='name' value={formik.values.name} onChange={formik.handleChange} />
                        {formik.errors.name ? <div style={{ color: 'red' }}>{formik.errors.name}</div> : null}
                    </div>
                    <div className="form-group  col-md-4">
                        <label htmlFor='contact'>Contact:</label><br />
                        <input className="perftext" type='text' id='contact' name='contact' value={formik.values.contact} onChange={formik.handleChange} />
                        {formik.errors.contact ? <div style={{ color: 'red' }}>{formik.errors.contact}</div> : null}
                    </div>
                </div>
                <h2 className='pt-5'>Registration Details</h2>
                <div className="form-row">
                    <div className="form-group  col-md-4">
                        <label htmlFor='email'>User Id:</label><br />
                        <input className="perftext" type='text' id='email' name='email' value={formik.values.email} onChange={formik.handleChange} />
                        {formik.errors.email ? <div style={{ color: 'red' }}>{formik.errors.email}</div> : null}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group  col-md-4">
                        <label htmlFor='password'>Password:</label><br />
                        <input className="perftext" type='password' id='password' name='password' value={formik.values.password} onChange={formik.handleChange} />
                        {formik.errors.password ? <div style={{ color: 'red' }}>{formik.errors.password}</div> : null}
                    </div>
                    <div className="form-group  col-md-4">
                        <label htmlFor='confpass'>Confirm Password:</label><br />
                        <input className="perftext" type='password' id='confpass' name='confpass' value={formik.values.confpass} onChange={formik.handleChange} />
                        {formik.errors.confpass ? <div style={{ color: 'red' }}>{formik.errors.confpass}</div> : null}
                    </div>
                </div>
                <button type='submit' onClick={RegisterUserDetail} className="btn btn-primary signupbut" >Register</button>
            </form>
        </div >
    )
}

export default Signup
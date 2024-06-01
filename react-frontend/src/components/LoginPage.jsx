import React from 'react';
import '../styles/LoginStyle.css'
import Front from '../images/FB.jpg'
import TextInput from '../components/TextInput'
import OrderService from '../services/OrderService';
import AuthenticationService from './AuthenticationService';

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
        this.addUser = this.addUser.bind(this);
    }

    addUser() {
        this.props.history.push('/signup');
    }

    onChangeUser = (event) => {
        this.setState({ username: event.target.value })
    }

    onChangePass = (event) => {
        this.setState({ password: event.target.value })
    }

    click = (event) => {

        event.preventDefault();

        // let order = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId };
        let order = { userName: this.state.username, password: this.state.password };
        console.log('order => ' + JSON.stringify(order));
        // step 5
        OrderService.getUserDetail(this.state.username).then(res => {

            if (res.data != null && res.data.password === this.state.password) {
                this.login(res)
                this.props.history.push(`/listorders/${res.data.customerName}`);
            }
            else {
                window.alert("Invalid Username or Password. Try Again!")
            }
            // this.props.history.push('/orders');
        });
    }

    login(res) {
        console.log("hi login");
        console.log(res);
        AuthenticationService.registerSuccessfulLogin(
            res.data.userName,
        );
        //this.props.history.push({pathname:'/WelcomePage',state:{haslogin:true}})
    }


    render() {
        return (
            <div>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <div id="container">
                    <div id="id1">
                        <img src={Front} height="668" width="700" alt="Banner" />
                    </div>

                    <div id="id2">
                        {/* <center><img src={AppLogo} alt="logo"/></center> */}
                        <center><h1 id="logoApp">FOODzie</h1></center>
                        <div id="id3">

                            <center><h2>LOG IN</h2><br />
                                {this.state.clickable &&
                                    <div>Username: {this.state.username} <br />
                                        Password: {this.state.password}</div>}
                                <form action="#" id="form">
                                    <TextInput type="text" name="username" placeholder="Enter Username" onChange={(e) => { this.setState({ username: e.target.value }) }} />
                                    <TextInput type="password" name="password" placeholder="Enter Password" onChange={(e) => { this.setState({ password: e.target.value }) }} />

                                </form>


                            </center>
                            <br />
                            <span style={{ marginLeft: '123px' }}>New User? <a href='#' onClick={this.addUser}>Click Here</a></span>
                            {/* <span style={{ marginLeft: '123px' }}> <button className="btn" onClick={this.addUser}>New User? SignUp</button></span> */}
                            <br /><br />
                            <center>

                                <input type="submit" name="signin" id="btn" value="Login" onClick={this.click} />

                            </center>



                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default LoginPage;
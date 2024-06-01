import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService'
import { withRouter } from 'react-router';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        let userLoggedin = AuthenticationService.isUserLoggedin()

        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="" className="navbar-brand"><font color='FF00FF'><i><b>Order your Food</b></i></font></a></div>

                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto navbar-collapse justify-content-end">
                                {userLoggedin && <li><Link className="nav-link active" to="/login" onClick={AuthenticationService.logout}>Logout</Link></li>}
                                {/* <li><Link className="nav-link active" to="/login" >Logout</Link></li> */}
                            </ul>
                        </div>
                    </nav>


                </header>
            </div>
        )
    }
}

export default withRouter(HeaderComponent)

import React, { Component } from 'react'
import OrderService from '../services/OrderService'

class ViewOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            order: {}
        }
    }

    componentDidMount() {
        OrderService.getOrderById(this.state.id).then(res => {
            this.setState({ order: res.data });
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Order Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Order First Name: </label>
                            <div> {this.state.order.firstName}</div>
                        </div>
                        <div className="row">
                            <label> Order Last Name: </label>
                            <div> {this.state.order.lastName}</div>
                        </div>
                        <div className="row">
                            <label> Order Email ID: </label>
                            <div> {this.state.order.emailId}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewOrderComponent

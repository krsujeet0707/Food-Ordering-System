import React, { Component } from 'react'
import OrderService from '../services/OrderService'
import '../styles/LoginStyle.css'

class ListOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            orders: [],
            allCustomerName: [],
        }
        this.addOrder = this.addOrder.bind(this);
        this.editOrder = this.editOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
        this.getByCustomerName = this.getByCustomerName.bind(this);
    }

    deleteOrder(customerId) {
        OrderService.deleteOrder(customerId).then(res => {

            // const customerNames = [...new Set(res.data.map(a => a.customerName))];
            this.setState({ orders: this.state.orders.filter(order => order.customerId !== customerId) });
        });


    }
    viewOrder(id) {
        this.props.history.push(`/view-order/${id}`);
    }
    editOrder(id) {
        this.props.history.push(`/add-order/${id}`);
    }

    componentDidMount() {

        OrderService.getCustomerByName(this.state.id).then((res) => {
            console.log(res);
            this.setState({ orders: res.data });
        });

        // OrderService.getOrders().then((res) => {
        //     // let customerNames = res.data.map(a => a.customerName);
        //     const customerNames = [...new Set(res.data.map(a => a.customerName))];
        //     this.setState({ orders: res.data, allCustomerName: customerNames });
        // });
    }

    getByCustomerName(event) {
        let customerName = event.target.value
        console.log(customerName);
        if (customerName == "all_order") {
            OrderService.getOrders().then((res) => {
                // let customerNames = res.data.map(a => a.customerName);
                const customerNames = [...new Set(res.data.map(a => a.customerName))];
                this.setState({ orders: res.data, allCustomerName: customerNames });
            });
        }
        else {
            OrderService.getCustomerByName(event.target.value).then((res) => {
                console.log(res);
                this.setState({ orders: res.data });
            });
        }
    }

    addOrder() {
        this.props.history.push(`/add-order/${this.state.id}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Orders List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addOrder}> Add Food Item</button>
                    <label className="ml-5 mr-3">Customer Name:</label>
                    {/* <select className="perftext" id="role" name="role" value={this.state.value} onChange={this.getByCustomerName}>
                        {this.state.allCustomerName.length > 0 && this.state.allCustomerName.map((customerName) =>
                            <option value={customerName}>{customerName}</option>
                        )}
                        <option value="all_order">All Orders</option>
                    </select> */}

                    <label className='bolded' >{this.state.id}</label>

                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered table-success">

                        <thead>
                            <tr>
                                {/* <th> Customer Name</th> */}
                                <th> Food Item</th>
                                <th> Quantity</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.orders.map(
                                    order =>
                                        <tr key={order.customerId}>
                                            {/* <td> {order.customerName} </td> */}
                                            <td> {order["item"].name}</td>
                                            <td> {order.quantity}</td>
                                            <td>
                                                {/* <button onClick={() => this.editOrder(order.customerId)} className="btn btn-info">Update </button> */}
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteOrder(order.customerId)} className="btn btn-danger">Delete </button>
                                                {/* <button style={{ marginLeft: "10px" }} onClick={() => this.viewOrder(order.customerId)} className="btn btn-info">View </button> */}
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListOrderComponent

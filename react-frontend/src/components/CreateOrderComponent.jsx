import React, { Component } from 'react'
import OrderService from '../services/OrderService';

class CreateOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            // firstName: '',
            // itemName: '',
            // lastName: '',
            // emailId: ''
            allItems: [],
            price: '',
            customerName: '',
            itemId: '',
            quantity: '',
            totalAmount: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateOrder = this.saveOrUpdateOrder.bind(this);
    }

    // step 3
    componentDidMount() {

        // step 4
        OrderService.getItems().then((res) => {
            // let items = res.data;
            this.setState({
                allItems: res.data,
                customerName: this.state.id
            });
            console.log(this.state.allItems);
        });
        // if (this.state.id === '_add') {
        //     return
        // } else {
        //     OrderService.getOrderById(this.state.id).then((res) => {
        //         let order = res.data;
        //         this.setState({
        //             // firstName: order.firstName,
        //             // lastName: order.lastName,
        //             // emailId: order.emailId

        //             customerName: order.customerName,
        //             itemId: order.itemId,
        //             quantity: order.quantity,
        //             price: order["item"].price

        //         });
        //     });
        // }
    }
    saveOrUpdateOrder = (e) => {
        e.preventDefault();
        // let order = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId };
        let order = { customerName: this.state.customerName, itemId: this.state.itemId, quantity: this.state.quantity };

        console.log('order => ' + JSON.stringify(order));

        // step 5

        OrderService.createOrder(order).then(res => {
            this.props.history.push(`/orders/${this.state.customerName}`);
        });

    }

    // changeFirstNameHandler = (event) => {
    //     this.setState({ firstName: event.target.value });
    // }
    changeFirstNameHandler = (event) => {
        this.setState({ customerName: event.target.value });
    }

    // changeLastNameHandler = (event) => {
    //     this.setState({ lastName: event.target.value });
    // }
    changeLastNameHandler = (event) => {
        let price1 = '';
        let allItem = this.state.allItems;
        console.log("Hiiiii", allItem);
        for (let i = 0; i < allItem.length; i++) {

            if (allItem[i].id == event.target.value) {
                price1 = allItem[i].price;
            }
            // text += cars[i] + "<br>";
        }

        this.setState({ itemId: event.target.value, price: price1 });

    }

    // changeEmailHandler = (event) => {
    //     this.setState({ emailId: event.target.value });
    // }
    changeEmailHandler = (event) => {
        console.log(event.target.value);
        console.log(this.state.price);
        console.log(event.target.value * this.state.price);
        let ta = event.target.value * this.state.price;
        this.setState({ quantity: event.target.value, totalAmount: ta });
    }

    cancel() {
        this.props.history.push(`/orders/${this.state.customerName}`);
    }

    getTitle() {
        // if (this.state.id === '_add') {
        return <h3 className="text-center">Add Order</h3>
        // } else {
        //     return <h3 className="text-center">Update Order</h3>
        // }
    }

    handleItemChange = (event) => {
        this.setState({
            ...this.state,
            value: event.target.value
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Customer Name: </label>
                                        <input placeholder="Name" name="customerName" className="form-control"
                                            value={this.state.customerName} onChange={this.changeFirstNameHandler} disabled={true} />
                                    </div>
                                    <div>
                                        <label className="mr-3">Food Item Name: </label>
                                        <select className="perftext" id="role" name="role" value={this.state.value} onChange={this.changeLastNameHandler}>
                                            {/* <option hidden selected>choose...</option>
                                            <option value="1">Pizza</option>
                                            <option value="2">Burger</option>
                                            <option value="3">Sandwich</option>
                                            <option value="4">Pastry</option> */}
                                            <option hidden selected>choose...</option>
                                            {this.state.allItems.length > 0 && this.state.allItems.map((item) =>
                                                <option value={item.id}>{item.name}</option>
                                            )}

                                        </select>
                                        <label > Price Per Unit: </label>
                                        <label class="p-2 ml-5 bg-success text-white">Rs. {this.state.price}  </label>
                                    </div>

                                    <div className="form-group">
                                        <label> Quantity </label>
                                        <input placeholder="quantity" name="quantity" className="form-control"
                                            value={this.state.quantity} onChange={this.changeEmailHandler} />
                                    </div>
                                    {/* <div className="form-group">
                                        <label> Email Id: </label>
                                        <input placeholder="Email Address" name="emailId" className="form-control"
                                            value={this.state.emailId} onChange={this.changeEmailHandler} />
                                    </div> */}
                                    <div className="form-group">
                                        <label> Total Amount payable: </label>
                                        <label class="p-2 ml-3 bg-success text-white">Rs. {this.state.totalAmount}  </label>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateOrder}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateOrderComponent

import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/";

class OrderService {

    getOrders() {
        return axios.get('http://localhost:8080/getOrder');
    }

    getItems() {
        return axios.get('http://localhost:8080/getItems');
    }

    createOrder(order) {
        return axios.post('http://localhost:8080/addOrder', order);
    }

    getOrderById(customerId) {
        return axios.get(EMPLOYEE_API_BASE_URL + 'getOrder/' + customerId);
    }

    getCustomerByName(customerName) {
        return axios.get('http://localhost:8080/' + 'getOrderCustomerNm/' + customerName);
    }

    getUserDetail(userName) {
        return axios.get('http://localhost:8080/' + 'getUser/' + userName);
    }

    // updateOrder(order, orderId) {
    //     return axios.put(EMPLOYEE_API_BASE_URL + '/' + orderId, order);
    // }

    deleteOrder(customerId) {
        return axios.delete('http://localhost:8080/' + 'deleteOrder/' + customerId);
    }
}

export default new OrderService()
import axios from "axios";

export default class Api {
    constructor() {
        this.url = 'http://portal.coffeebon.ru:8084/api/';
    }

    get(endpoint) {
        return axios.get(this.url + endpoint);
    }
}
import axios from 'axios';

export default class Client {

    version() {
        return axios.get("http://localhost:8080/meta/version");
    }

}

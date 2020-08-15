import React from "react";
import './Header.css';
import Client from './client.js'

class Version extends React.Component {

    constructor(props) {
        super(props);
        this.client = new Client();
        this.state = {version: ''};
    }

    componentDidMount() {
        this.client.version().then(r => this.setState({version: r.data}))
    }

    render() {
        return (
            <div>{this.state.version} </div>
        )
    }

}

export default Version;

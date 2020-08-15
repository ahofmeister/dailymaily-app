import React from "react";
import './Footer.css';
import Version from "./Version";

class Footer extends React.Component {
    render() {
        return <footer>
            <Version/>
        </footer>;
    }

}

export default Footer;

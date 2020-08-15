import React from "react";
import './Page.css';

class Page extends React.Component {
    render() {
        return (
            <div className="page">{this.props.children}</div>
        )
    }
}
export default Page;

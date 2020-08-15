import React from 'react';
import './App.css';
import Header from "../Header";
import Footer from "../Footer";
import Page from "../Page";
import Version from "../Version";

class App extends React.Component {
    render() {
        return (
            <Page>
                <Header/>
                <main>
                </main>
                <Footer/>
            </Page>
        )
    }
}

export default App;

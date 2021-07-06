import React, { Component } from 'react'
import MyNavbar from './Navbar';
import BodyComponent from './BodyComponent';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <>
                <MyNavbar />
                <BodyComponent />
            </>
        )
    }


}

export default Main
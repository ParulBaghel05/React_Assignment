import React, { Component } from 'react';

class Parent extends Component {
    state = {
        message: "I'm the Parent Component!"
    };

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        );
    }
}

export default Parent;
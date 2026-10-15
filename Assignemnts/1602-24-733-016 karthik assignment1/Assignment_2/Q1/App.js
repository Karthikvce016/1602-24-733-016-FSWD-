import React, { Component } from 'react';

function WelcomeFunctional(props) {
    return (
        <div className="card">
            <h2>Welcome, {props.name}!</h2>
            <p>This is rendered using a functional component.</p>
        </div>
    );
}

class WelcomeClass extends Component {
    render() {
        return (
            <div className="card">
                <h2>Welcome, {this.props.name}!</h2>
                <p>This is rendered using a class component.</p>
            </div>
        );
    }
}

function App() {
    return (
        <div className="container">
            <h1>React Welcome Components</h1>
            <WelcomeFunctional name="Karthik" />
            <WelcomeClass name="Karthik" />
        </div>
    );
}

export default App;

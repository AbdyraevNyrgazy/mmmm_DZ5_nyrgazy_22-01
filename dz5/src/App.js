import './App.css';
import React from "react";

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: null };
    }
git int
    componentDidMount() {
        fetch('https://example.com/data.json')
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }

    render() {
        return (
            <div>
                {this.state.data ? (
                    <ul>
                        {this.state.data.map(item => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        );
    }
}
export default MyComponent;

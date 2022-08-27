import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {
    render() {
        return (
            <>
                <h1>hello world</h1>
            </>
        )
    }
}

const root = React.createElement(document.getElementById("root"))

ReactDOM.render(<App />, root);



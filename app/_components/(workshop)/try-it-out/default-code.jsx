export const defaultCode = {
    "/App.js": {
        code: 
        
`import './styles.css';

export default function App() {
    return (
        <div className="mainContainer">
            <h1>Hello, cohort members!</h1>
            <p>Try editing the styles!</p>
        </div>
    );
}`,

    },
    "/styles.css": {
        code: 
        
`/* Add styles below */
.mainContainer { 
    text-align: center;
    padding: 20px;
}

.mainContainer h1 {
    color: #3C257E;
}

.mainContainer p {
    color: #000;
}
`
    },

    "/index.js": {
        code: 
`// This file initializes the app and renders the main component
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));`
    },
};
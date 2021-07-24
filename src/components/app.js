// Main App Component...!

import React from "react";
import { useHistory } from "react-router-dom";
import Typical from 'react-typical'

const App = () => {
    const history = useHistory();

    // Function to move on to sign up page...!
    const start = () => {
        localStorage.clear();
        history.push("/sign-up");
    }

    return (
        <div className="container" id="app-container">
            <h1 className="app-header">
                <Typical
                    loop={Infinity}
                    steps={[
                        "My name is Shahzada Muhammad Ahmed.❤️",
                        1000,
                        "Welcome to Quiz Application in React JS 💻",
                        1000,
                        "I made this app using React JS 💻",
                        1000,
                        "Quiz may be hard, But let's go now 🥰",
                        1000
                    ]}
                />
            </h1>
            <button onClick={start} className="btn btn-primary" id="start-btn"> Start </button>
        </div>
    );
}

export default App;
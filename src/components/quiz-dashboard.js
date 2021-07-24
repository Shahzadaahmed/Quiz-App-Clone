// Quiz Dashboard Component...!

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';

const Dashboard = () => {

    // Handeling state here...!
    const [key, setKey] = useState("");
    const [isQuizStarted, setIsQuizStarted] = useState(false);

    const history = useHistory();

    // SECRET KEY...!
    let secretKey = "<Ahmed />";

    // Fetching data from local storage...!
    let data = localStorage.getItem("user");
    data = JSON.parse(data);

    // Function to enter the key...!
    const go = () => {
        let goBtn = document.getElementById("go-btn");
        setIsQuizStarted(true);
        goBtn.disabled = true;
    }

    // Form handler event...!
    const keyHandler = (event) => {
        setKey(event.target.value);
    }

    // Function to start the quiz...!
    const startQuiz = () => {
        if (key === secretKey) {
            swal({
                title: "Good Luck 🥰",
                icon: "success",
                button: "Go!",
            });
            setKey("");
            setTimeout(() => {
                history.push("/select-quiz");
            }, 3000);
        }

        else {
            swal({
                title: "Wrong KEY!",
                text: "Invalid Security Key!",
                icon: "warning",
                button: "Try Again",
            });
            setKey("");
        }
    }

    return (
        <div className="container" id="dashboard-container">
            <h1 className="dashboard-header"> Quiz Dashboard </h1>
            <ol>
                <li> {`Name: ${data.name}.`} </li>
                <li> {`Email: ${data.email}`} </li>
                <li> Total Time: 05 Minutes.  </li>
                <li> Total Questions: 20.  </li>
                <li> Each question carry : 05 Marks. </li>
                <li> Passing Marks: 60% </li>
                <li> Before select any option, Please read the question carefully. </li>
                <li> During quiz you cannot go beck. Otherwise you will loose the quiz. </li>
            </ol>

            <button onClick={go} className="btn btn-primary" id="go-btn"> Go </button>
            <hr />

            {/* Security Area */}
            {
                (isQuizStarted)
                    ?
                    (
                        <div className="input-group mb-3">
                            <input
                                autoFocus
                                type="password"
                                className="form-control"
                                placeholder="Enter Key"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                value={key}
                                onChange={keyHandler}
                                id="key-fieldbar"
                            />
                            <div className="input-group-append">
                                <button onClick={startQuiz} className="btn btn-primary" id="quiz-start-btn"> Start Quiz </button>
                            </div>
                        </div>
                    )
                    :
                    null
            }
        </div>
    );
}

export default Dashboard;
// Quiz Selection Component...!

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';

const SelectQuiz = () => {

    // Handeling state here...!
    const [selectedQuiz, setSelectedQuiz] = useState("");

    const history = useHistory();

    // Drop down handler event...!
    const dropDownHandler = (event) => {
        setSelectedQuiz(event.target.value);

        let userSeletedValue = event.target.value;

        if (userSeletedValue === "reactjs-quiz") {
            history.push("/reactjs-quiz");
        }

        else if (userSeletedValue === "js-quiz") {
            history.push("/javascript-quiz");
        }

        else {
            swal({
                title: "Oops! Invalid Selection!",
                text: "The quiz you selected is not available at this time.",
                icon: "error",
                button: "Try Again",
            });
        }
    }

    return (
        <div className="container" id="select-quiz-container">
            <h1 className="select-quiz-header"> Select Quiz </h1>
            <select value={selectedQuiz} onChange={dropDownHandler} className="quiz-dropdown">
                <option value="available-quizzes"> Available Quizzes </option>
                <option value="html-quiz"> HTML5 Quiz </option>
                <option value="css-quiz"> CSS3 Quiz </option>
                <option value="bootstrap-quiz"> Bootstrap4 Quiz </option>
                <option value="js-quiz"> JavaScript Quiz </option>
                <option value="reactjs-quiz"> React JS Quiz </option>
                <option value="reduxjs-quiz"> React Redux Quiz </option>
                <option value="react-native-quiz"> React Native Quiz </option>
                <option value="gk-quiz"> General Knowledge Quiz </option>
            </select>
        </div>
    );
}

export default SelectQuiz;
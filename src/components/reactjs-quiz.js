/***** React-JS Quiz Component *****/

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import swal from 'sweetalert';

// All questions here...!
let questionsArray = [
    {
        question: "What is React JS ?",
        optionOne: "Server side Framework",
        optionTwo: "User-interface framework",
        optionThree: "A Library for building interaction interfaces",
        optionFour: "None of These",
        answer: 3
    },
    {
        question: "Everything in React is",
        optionOne: "Module",
        optionTwo: "Component",
        optionThree: "Package",
        optionFour: "Class",
        answer: 2
    },
    {
        question: "What is state in React ?",
        optionOne: "A persistant storage",
        optionTwo: "An internal data store (object) of a component",
        optionThree: "Both of the above",
        optionFour: "None of them",
        answer: 2
    },
    {
        question: "React merges the object you provide into the current state using ",
        optionOne: "setState()",
        optionTwo: "state()",
        optionThree: "useState()",
        optionFour: "None of them",
        answer: 1
    },
    {
        question: "What is Babel ?",
        optionOne: "A transpiler",
        optionTwo: "An interpreter",
        optionThree: "A Compiler",
        optionFour: "Both Compiler and Transpilar",
        answer: 4
    },
    {
        question: "Which is the right way of accessing a function fetch() from an h1 element in JSX ?",
        optionOne: "<h1> {fetch()} </h1>",
        optionTwo: "<h1> ${fetch()} </h1>",
        optionThree: "<h1> {fetch} </h1>",
        optionFour: "<h1> ${fetch} </h1>",
        answer: 3
    },
    {
        question: "What are the two ways that data gets handled in React JS",
        optionOne: "state & props",
        optionTwo: "services & components",
        optionThree: "Both of the above",
        optionFour: "None of them",
        answer: 1
    },
    {
        question: "What is used to pass data to a component from outside ?",
        optionOne: "setState",
        optionTwo: "render with arguments",
        optionThree: "PropTypes",
        optionFour: "props",
        answer: 4
    },
    {
        question: "You can use keyword (this) in functional component.",
        optionOne: "true",
        optionTwo: "false",
        optionThree: "error",
        optionFour: "None of them",
        answer: 2
    },
    {
        question: "Keys are given to a list of elements in react. These keys should be",
        optionOne: " Do not requires to be unique",
        optionTwo: "Unique in the DOM",
        optionThree: "Unique among the siblings only",
        optionFour: "All of the above",
        answer: 3
    },
    {
        question: "Class component are much easier to read and test rather than functional component.",
        optionOne: "false",
        optionTwo: "true",
        optionThree: "undefined",
        optionFour: "None of them",
        answer: 1
    },
    {
        question: "In React JS. Which hook we will use to go from one component to another component by clicking on button ?",
        optionOne: "history",
        optionTwo: "history()",
        optionThree: "useHistory",
        optionFour: "useHistory()",
        answer: 4
    },
    {
        question: "Which method is required in class component ?",
        optionOne: "constructor()",
        optionTwo: "render()",
        optionThree: "componentDidMount()",
        optionFour: "super()",
        answer: 2
    },
    {
        question: "testExpression ? yesExpression : noExpression is an example of ?",
        optionOne: "Logical Operator",
        optionTwo: "Assignment Operator",
        optionThree: "Ternary Operator",
        optionFour: "None of them",
        answer: 3
    },
    {
        question: "What value is placed in let ? let = 12 > 9 ? 0 : 1;",
        optionOne: "0",
        optionTwo: "1",
        optionThree: "9",
        optionFour: "12",
        answer: 1
    },
    {
        question: "What advantages does React JS have ?",
        optionOne: "Increases the application’s performance with Virtual DOM",
        optionTwo: "JSX makes a code that is easy to read and write",
        optionThree: "Reusable Components",
        optionFour: "All of them",
        answer: 4
    },
    {
        question: "Props data is ?",
        optionOne: "Read only",
        optionTwo: " Read and Write",
        optionThree: "Both of them",
        optionFour: "None of them",
        answer: 1
    },
    {
        question: "How do we import useHistory in React JS ?",
        optionOne: "import { useHistory } from 'react';",
        optionTwo: "import { useHistory } from 'react-dom';",
        optionThree: "import { useHistory } from 'react- router';",
        optionFour: "None of them",
        answer: 4
    },
    {
        question: "The onChange event in React detects when the value of an input element changes.",
        optionOne: "false",
        optionTwo: "true",
        optionThree: "error",
        optionFour: "None of them",
        answer: 2
    },
    {
        question: "What is useState in React JS ?",
        optionOne: "useState is required method in functional component",
        optionTwo: "useState is a hook that allows you to to have the state variables in class components",
        optionThree: "useState is a hook that allows you to to have the state variables in functional components",
        optionFour: "All of them",
        answer: 3
    }
];

class ReactJS_Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isQuizStarted: false,
            allQuestionsArr: questionsArray,
            totalQuestions: questionsArray.length,
            currentQuestionIndex: 0,
            radioGroup: {
                1: false,
                2: false,
                3: false,
                4: false
            },
            totalMarks: 100,
            score: 0,
            result: undefined,
            minutes: 4,
            seconds: 59
        }
    }

    // Declaring global variable for handling timer...!
    timeInterval;

    // Quiz Timer function...!
    quizTimer = () => {
        this.timeInterval = setInterval(() => {
            let sceondsClone = this.state.seconds;
            let minutesClone = this.state.minutes;

            if (sceondsClone < 1) {
                if (minutesClone < 1) {
                    clearInterval(this.timeInterval);
                    this.setState({
                        isQuizStarted: true,
                        radioGroup: {
                            1: false,
                            2: false,
                            3: false,
                            4: false
                        }
                    });
                }

                else {
                    minutesClone--;
                    this.setState({
                        minutes: minutesClone,
                        seconds: 59
                    });
                }
            }

            else {
                sceondsClone--;
                this.setState({
                    seconds: sceondsClone
                });
            }
        }, 1000);
    }

    // Declaring glabal variable for getting user name from database...!
    userName;

    // When the app load then timer function will start...!
    componentDidMount() {
        this.quizTimer();

        // Fetching data from local storage...!
        let data = localStorage.getItem("user");
        data = JSON.parse(data);
        this.userName = data.name;
    }

    // Declaring global variable for getting user selected value...!
    selectedOption;

    // Form radio handler event...!
    radioHandler = (event) => {
        let radioGroupClone = this.state.radioGroup;
        this.selectedOption = event.target.value;

        for (let key in radioGroupClone) {
            radioGroupClone[key] = false
        }

        radioGroupClone[event.target.value] = event.target.checked;
        this.setState({
            radioGroup: radioGroupClone
        });
        // console.log(this.selectedOption);
    }

    // Function to load next question...!
    loadNextQuestion = () => {

        // 1st Condition: if user did not select any option...!
        let radioBtnElClone = document.getElementsByClassName("form-radio");
        let validation = false;

        for (let i = 0; i < radioBtnElClone.length; i++) {
            if (radioBtnElClone[i].checked) {
                validation = true;
                break;
            }
        }

        if (validation) {
            console.log("validation Success!");
        }

        else {
            swal({
                title: "Error! 😤",
                text: "You must need to select an option!",
                icon: "error",
                button: "Try Again",
            });
            return false;
        }

        // 2nd condition: if user selected ansswer matches the correct answer...!
        let correctAnswer = this.state.allQuestionsArr[this.state.currentQuestionIndex].answer;
        let userSelectedValue = Number(this.selectedOption);
        let scoreClone = this.state.score;
        let currentQuestionIndexClone = this.state.currentQuestionIndex;

        if (correctAnswer === userSelectedValue) {
            scoreClone = scoreClone + 5;
            this.setState({
                score: scoreClone
            });

            // 3rd condition: Pass or Fail...!
            if (scoreClone >= 60) {
                this.setState({
                    result: "Congratulations! You Passed."
                });
            }

            else {
                this.setState({
                    result: "Sorry! You Failed."
                });
            }
        }

        currentQuestionIndexClone++;
        this.setState({
            currentQuestionIndex: currentQuestionIndexClone,
            radioGroup: {
                1: false,
                2: false,
                3: false,
                4: false
            }
        });

        // 4th condition: if user reached second last question...!
        let nextQuestionBtn = document.getElementById("next-question-btn");
        let totalQuestionsClone = this.state.totalQuestions;

        if (currentQuestionIndexClone === totalQuestionsClone - 1) {
            nextQuestionBtn.innerHTML = "Last Question";
        }

        // 5th / last condition: when user finish the quiz...!
        if (currentQuestionIndexClone === totalQuestionsClone) {
            clearInterval(this.timeInterval);
            this.setState({
                isQuizStarted: true
            });
        }
    }

    // Funtion to log out...!
    logOut = () => {
        swal({
            title: "Good Bye! 🥰",
            text: "You have Logged Out Successfully!",
            icon: "success",
            button: "By Now",
        });
        setTimeout(() => {
            this.props.history.push("/");
        }, 3000);
    }

    // Render function...!
    render() {
        return (
            // Main Quiz Container...!
            <div className="container" id="quiz-container">

                {/* Quiz Timer Area */}
                <div className="timer-container">
                    <h4> {`Time Left: Minutes: ${this.state.minutes} : Seconds: ${this.state.seconds}`} </h4>
                </div>

                {
                    (!this.state.isQuizStarted)
                        ?
                        (
                            <div>
                                {/* Header */}
                                <h1 className="quiz-header"> React JS Quiz </h1>

                                {/* Question Area */}
                                <h4 className="question-area"> {`${this.state.currentQuestionIndex + 1}) ${this.state.allQuestionsArr[this.state.currentQuestionIndex].question}`} </h4>

                                {/* Options Area */}
                                <div className="options-container">
                                    <label className="radio-box">
                                        <input
                                            type="radio"
                                            name="option"
                                            value="1"
                                            checked={this.state.radioGroup['1']}
                                            onChange={this.radioHandler}
                                            className="form-radio"
                                        />
                                        <span>
                                            {this.state.allQuestionsArr[this.state.currentQuestionIndex].optionOne}
                                        </span>
                                    </label>
                                    <br />

                                    <label className="radio-box">
                                        <input
                                            type="radio"
                                            name="option"
                                            value="2"
                                            checked={this.state.radioGroup['2']}
                                            onChange={this.radioHandler}
                                            className="form-radio"
                                        />
                                        <span>
                                            {this.state.allQuestionsArr[this.state.currentQuestionIndex].optionTwo}
                                        </span>
                                    </label>
                                    <br />

                                    <label className="radio-box">
                                        <input
                                            type="radio"
                                            name="option"
                                            value="3"
                                            checked={this.state.radioGroup['3']}
                                            onChange={this.radioHandler}
                                            className="form-radio"
                                        />
                                        <span>
                                            {this.state.allQuestionsArr[this.state.currentQuestionIndex].optionThree}
                                        </span>
                                    </label>
                                    <br />

                                    <label className="radio-box">
                                        <input
                                            type="radio"
                                            name="option"
                                            value="4"
                                            checked={this.state.radioGroup['4']}
                                            onChange={this.radioHandler}
                                            className="form-radio"
                                        />
                                        <span>
                                            {this.state.allQuestionsArr[this.state.currentQuestionIndex].optionFour}
                                        </span>
                                    </label>
                                    <br />

                                    <div className="next-question-btn-box">
                                        <button onClick={this.loadNextQuestion} className="btn btn-primary" id="next-question-btn"> Next Question </button>
                                    </div>
                                </div>
                            </div>
                        )
                        :
                        (
                            <div className="score-board">
                                <h1 className="result-header"> Result / Score Board </h1>
                                <ul>
                                    <li> {`Name: ${this.userName}.`} </li>
                                    <li> Quiz Title: React JS. </li>
                                    <li> {`Total Marks: ${this.state.totalMarks}.`} </li>
                                    <li> {`Marks Obtained: ${this.state.score}`} </li>
                                    <li> {`Percentage: ${(this.state.score * 100) / this.state.totalMarks}%`} </li>
                                    <li> {`Result: ${this.state.result}`} </li>
                                </ul>
                                <div className="next-question-btn-box">
                                    <button onClick={this.logOut} className="btn btn-primary" id="log-out-btn"> Log Out </button>
                                </div>
                            </div>
                        )
                }
            </div>
        )
    }
}

export default withRouter(ReactJS_Quiz);

// App completed Successfully...!
/***** JavaScript Quiz Component *****/

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import swal from 'sweetalert';

// All questions here...!
let questionsArray = [
    {
        question: "Where is the correct place to insert a JavaScript?",
        optionOne: "The head section",
        optionTwo: "Both the head section and the body section are correct",
        optionThree: "The body section",
        optionFour: "None of these",
        answer: 3
    },
    {
        question: "What is the function of Array object that adds or removes elements from an array?",
        optionOne: ".unshift()",
        optionTwo: ".splice()",
        optionThree: ".sort()",
        optionFour: ".toSource()",
        answer: 1
    },
    {
        question: "Which of the following methods removes the last element from an array and returns that element?",
        optionOne: ".pop()",
        optionTwo: ".get()",
        optionThree: ".last()",
        optionFour: "None of these",
        answer: 4
    },
    {
        question: "Which of the following will return the type of the arguments passed to a function?",
        optionOne: "Both of the above.",
        optionTwo: "using getType function",
        optionThree: "None",
        optionFour: "using typeof operator",
        answer: 4
    },
    {
        question: "With the given array, how do I access 'snickers'? var candy = ['m & m's', '100 grand', 'snickers']",
        optionOne: "candy[1]",
        optionTwo: "candy[3]",
        optionThree: "candy[2]",
        optionFour: "candy.[2]",
        answer: 3
    },
    {
        question: "Which of the following statements is valid for the features of JavaScript?",
        optionOne: "JavaScript is designed for creating network-centric applications.",
        optionTwo: "JavaScript is a lightweight, interpreted programming language.",
        optionThree: "JavaScript is complementary to and integrated with Java.",
        optionFour: "All",
        answer: 2
    },
    {
        question: "Which of the following is true about variable naming conventions in JavaScript?",
        optionOne: "JavaScript variable names must begin with a letter or the underscore character.",
        optionTwo: "JavaScript variable names are case sensitive.",
        optionThree: "Both of the above.",
        optionFour: "None of the above.",
        answer: 3
    },
    {
        question: "Convert a JavaScript object into a string with",
        optionOne: "JSON.string()",
        optionTwo: "JSON.stringify()",
        optionThree: "JSON.parse()",
        optionFour: "JSON.stringify",
        answer: 2
    },
    {
        question: "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
        optionOne: ".getIndex()",
        optionTwo: ".location()",
        optionThree: ".indexOf()",
        optionFour: "None of the above.",
        answer: 3
    },
    {
        question: "Which of these is a valid line of JS code that stores an object in a variable?",
        optionOne: "var me = {age=31, hair='brown'};",
        optionTwo: "var me = {age: 31, hair: 'brown'};",
        optionThree: "var me = {age:31 hair:'brown'};",
        optionFour: "var me = {var age=31, var hair='brown'};",
        answer: 2
    },
    {
        question: "Which of the following function of Array object extracts a section of an array and returns a new array?",
        optionOne: ".reverse()",
        optionTwo: ".shift()",
        optionThree: ".some()",
        optionFour: ".slice()",
        answer: 4
    },
    {
        question: "If the value does not exist that you passed in .index() method. What will be the return value ? ",
        optionOne: "undefined",
        optionTwo: "-1",
        optionThree: "1",
        optionFour: "null",
        answer: 2
    },
    {
        question: "Let's say you're storing an object in a variable named 'pumpkin'. Which line of code would add a new property 'eyes' to the object?",
        optionOne: "pumpkin.push({eyes: 'green'});",
        optionTwo: "pumpkin[eyes] = 'green';",
        optionThree: "pumpkin.eyes = 'green';",
        optionFour: "var pumpkin.eyes = 'green'",
        answer: 3
    },
    {
        question: "How to write an IF statement for executing some code if i is NOT equal to 5?",
        optionOne: "if (i <> 5)",
        optionTwo: "if (i != 5)",
        optionThree: "if i =! 5",
        optionFour: "if i !=== 5",
        answer: 2
    },
    {
        question: "How to print counting to 50 to 5 using for loop ?",
        optionOne: "for (var i = 50; i >= 5; i--)",
        optionTwo: "for (var i = 50; i >= 5; i++)",
        optionThree: "for (var i = 5; i <= 50; i++)",
        optionFour: "for (var i = 5; i <= 50; i--)",
        answer: 1
    },
    {
        question: "7 === '7'. Select the correct return value.",
        optionOne: "false",
        optionTwo: "true",
        optionThree: "null",
        optionFour: "None of them",
        answer: 1
    },
    {
        question: ".setTimeout( () ==> { console.log('You are playing quiz!') } , 3000); Select the correct output.",
        optionOne: "null",
        optionTwo: "undefined",
        optionThree: "Syntax Error",
        optionFour: "false",
        answer: 3
    },
    {
        question: "Let's say you're storing an object in a variable named 'angel' with the property 'fur'. Which line of code would change that property's value?",
        optionOne: "angel.fur = 'orange';",
        optionTwo: "angel[fur] = 'orange';",
        optionThree: "angel_fur = 'orange';",
        optionFour: "var angel.fur = 'orange';",
        answer: 1
    },
    {
        question: ".setTimeout( function () { alert('Their is an error in this code!') } , 5000); Select the correct output.",
        optionOne: "alert() will work one time after 5 seconds.",
        optionTwo: "Alert() will work one time after 5 seconds.",
        optionThree: "window.alert() will work one time after 5 seconds.",
        optionFour: "Option 1 and 3 both are correct.",
        answer: 4
    },
    {
        question: "parseInt() function parses a string and returns an integer.",
        optionOne: "true",
        optionTwo: "false",
        optionThree: "Invalid question",
        optionFour: "None of them",
        answer: 1
    }
];

class JavaScript_Quiz extends Component {
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
                                <h1 className="quiz-header"> JavaScript Quiz </h1>

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

export default withRouter(JavaScript_Quiz);

// App completed Successfully...!
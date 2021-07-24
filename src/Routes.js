// Routes Component...!

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./components/app";
import SignUp from "./components/sign-up";
import LogIn from "./components/log-in";
import SelectQuiz from "./components/select-quiz";
import Dashboard from "./components/quiz-dashboard";
import ReactJS_Quiz from "./components/reactjs-quiz";
import JavaScript_Quiz from "./components/javascript-quiz";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/javascript-quiz" component={JavaScript_Quiz} />
                <Route path="/reactjs-quiz" component={ReactJS_Quiz} />
                <Route path="/quiz-dashboard" component={Dashboard} />
                <Route path="/select-quiz" component={SelectQuiz} />
                <Route path="/log-in" component={LogIn} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/" component={App} />
            </Switch>
        </Router>
    );
}

export default Routes;
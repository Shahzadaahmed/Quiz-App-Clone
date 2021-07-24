// Log In Component...!

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';

// Importing components from Material UI...!
import TextField from '@material-ui/core/TextField';

const LogIn = () => {

    // Handeling state here...!
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    // Function to Log In...!
    const logInFunc = () => {

        // Fetching data from local storage...!
        let data = localStorage.getItem("user");
        data = JSON.parse(data);

        let user = {
            email,
            password
        }

        if (user.email === data.email && user.password === data.password) {
            setEmail("");
            setPassword("");
            swal({
                title: "Logged In",
                text: "You have Logged In Successfully!",
                icon: "success",
                button: "Let's Go!",
            });
            setTimeout(() => {
                history.push("/quiz-dashboard");
            }, 3000);
        }

        else {
            swal({
                title: "Something Wrong!",
                text: "INVALID Email and Password!",
                icon: "error",
                button: "Try Again",
            });
            setEmail("");
            setPassword("");
        }
    }

    return (
        <div className="container" id="sign-up-container">
            <h1 id="sign-up-header"> Log In </h1>

            <div id="form-container">
                <br />

                <TextField
                    autoFocus
                    id="standard-full-width2"
                    label="Email"
                    style={{ margin: 8 }}
                    placeholder="Email"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    className="sign-up-form"
                    value={email}
                    onChange={(event) => { setEmail(event.target.value) }}
                />
                
                <br />

                <TextField
                    type="password"
                    id="standard-full-width3"
                    label="Password"
                    style={{ margin: 8 }}
                    placeholder="*****"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    className="sign-up-form"
                    value={password}
                    onChange={(event) => { setPassword(event.target.value) }}
                />

                <br />
                <br />

                <button onClick={logInFunc} className="btn btn-primary" id="sign-up-btn"> Log In </button>
            </div>
        </div>

    );
}

export default LogIn;
// Sign Up Component...!

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';

// Importing components from Material UI...!
import TextField from '@material-ui/core/TextField';

const SignUp = () => {

    // Handeling states here...!
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    // Function to sign up...!
    const signUpFunc = () => {
        const validationEmail = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;

        let user = {
            name,
            email,
            password
        }

        if (user.name != 0 &&
            user.email.match(validationEmail) &&
            user.password.length >= 8 && !isNaN(user.password.charAt(0))
        ) {
            // Saving data in local storage...!
            let data = JSON.stringify(user);
            localStorage.setItem("user", data);
            setName("");
            setEmail("");
            setPassword("");
            swal({
                title: "Registered sucessfully!",
                text: "You have Signed Up Successfully!",
                icon: "success",
                button: "Move to LogIn",
            });
            setTimeout(() => {
                history.push("/log-in");
            }, 3000);
        }

        else {
            swal({
                title: "Something Wrong!",
                text: "You have to fill all the required fields!\nPassword should be start from Number and it contain Numbers and Characters and it's length should be greater than 8 chars!",
                icon: "error",
                button: "Try Again",
            });
            setName("");
            setEmail("");
            setPassword("");
        }
    }

    return (
        <div className="container" id="sign-up-container">
            <h1 id="sign-up-header"> Sign Up </h1>

            <div id="form-container">
                <br />

                <TextField
                    id="standard-full-width1"
                    label="Name"
                    style={{ margin: 8 }}
                    placeholder="Name"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    autoFocus
                    value={name}
                    onChange={(event) => { setName(event.target.value) }}
                    className="sign-up-form"
                />

                <br />

                <TextField
                    id="standard-full-width2"
                    label="Email"
                    style={{ margin: 8 }}
                    placeholder="Email"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={email}
                    onChange={(event) => { setEmail(event.target.value) }}
                    className="sign-up-form"
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
                    value={password}
                    onChange={(event) => { setPassword(event.target.value) }}
                    className="sign-up-form"
                />

                <br />
                <br />

                <button onClick={signUpFunc} className="btn btn-primary" id="sign-up-btn"> Sign Up </button>
            </div>
        </div>
    );
}

export default SignUp;
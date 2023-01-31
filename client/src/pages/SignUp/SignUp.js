import React, { useState, useEffect } from "react";
import "./SignUp.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AiOutlineSend } from "react-icons/ai";
import axios from "axios";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reapetPassword, setReapetPasswod] = useState("");

  const [isEmailNote, setIsEmailNote] = useState(false);
  const [isPasswordNote, setIsPasswordNote] = useState(false);
  const [isReapetPasswordNote, setIsReapetPasswordNote] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);

  useEffect(() => {
    console.log("email", email);
    console.log("password", password);
    console.log("reapet password", reapetPassword);
  }, [email, password, reapetPassword]);

  const confirmInputs = () => {
    if (email === "") {
      setIsEmailNote(true);
    } else {
      setIsEmailNote(false);
    }
    if (password === "") {
      setIsPasswordNote(true);
    } else {
      setIsPasswordNote(false);
    }
    if (reapetPassword === "") {
      setIsReapetPasswordNote(true);
    } else {
      setIsReapetPasswordNote(false);
    }

    // check match password
    if (password !== reapetPassword) {
      setIsPasswordMatch(true);
    } else {
      setIsPasswordMatch(false);
    }

    if (
      (isPasswordMatch &&
        isReapetPasswordNote &&
        isPasswordNote &&
        isEmailNote) === false
    ) {
      return true;
    } else {
      return false;
    }
  };

  const DisplayNote = (inputField) => {
    if (inputField.inputField === "email") {
      if (isEmailNote === true) {
        return <span className="field-note">* This field is required</span>;
      } else {
        return <span></span>;
      }
    }

    if (inputField.inputField === "password") {
      if (isPasswordNote === true) {
        return <span className="field-note">* This field is required</span>;
      } else {
        return <span></span>;
      }
    }

    if (inputField.inputField === "reapetPassword") {
      if (isReapetPasswordNote === true) {
        return <span className="field-note">* This field is required</span>;
      } else {
        return <span></span>;
      }
    }

    if (inputField.inputField === "thereMatch") {
      if (isPasswordMatch === true) {
        return (
          <span className="field-note">* Reapet passwords do not match</span>
        );
      } else {
        return <span></span>;
      }
    }
  };

  const handleSubmitSend = async (evt) => {
    evt.preventDefault();
    const userData = { email, password, reapetPassword };
    if (confirmInputs()) {
      const response = await axios.post(
        "http://localhost:8000/api/users/create-user",
        userData
      );
    }
  };

  const handleInput = (e) => {
    const typeField = e.target.id;
    if (typeField === "email-field") {
      setEmail(e.target.value);
    } else if (typeField === "password-field") {
      setPassword(e.target.value);
    } else if (typeField === "reapet-password-field") {
      setReapetPasswod(e.target.value);
    }
  };

  return (
    <div className="middle-element">
      <div className="products signup-box">
        <div>
          <p className="title">Sign Up</p>
          <p>Please fill in this form to create an account</p>
        </div>
        <div>
          <Box
            onSubmit={handleSubmitSend}
            component="form"
            className="box-card"
            sx={{
              "& > :not(style)": { mt: 3, width: "75ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <p className="name-field">
                Email <DisplayNote inputField={"email"} />
              </p>
              <TextField
                onChange={handleInput}
                id="email-field"
                type="email"
                variant="outlined"
                fullWidth
              />
            </div>
            <div>
              <p className="name-field">
                Password <DisplayNote inputField={"password"} />
              </p>
              <TextField
                onChange={handleInput}
                id="password-field"
                type="password"
                label="Enter password"
                variant="outlined"
                fullWidth
              />
            </div>
            <div>
              <p className="name-field">
                Reapet Password <DisplayNote inputField={"reapetPassword"} />
              </p>
              <TextField
                onChange={handleInput}
                id="reapet-password-field"
                type="password"
                label="Repeat password"
                variant="outlined"
                fullWidth
              />
              <DisplayNote inputField={"thereMatch"} />
            </div>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ width: "25%" }}
            >
              Subscribe <AiOutlineSend className="send-icon" />
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../firebase/Firebase";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const paperStyle = {
    marginTop: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={paperStyle}>
        <Avatar style={{ color: "blue" }} className="avatar">
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={handleSignUp}>
          <label>
            <TextField
              variant="outlined"
              margin="normal"
              name="email"
              type="email"
              placeholder="Email"
              required
              fullWidth
            />
          </label>
          <label>
            <TextField
              variant="outlined"
              margin="normal"
              name="password"
              type="password"
              placeholder="Password"
              required
              fullWidth
            />
          </label>
          <Button fullWidth variant="contained" color="primary" type="submit">
            Sign Up
          </Button>
        </form>
        <div>
          <Link to="/login">
            Already have an account registered? Log in here!
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default withRouter(SignUp);

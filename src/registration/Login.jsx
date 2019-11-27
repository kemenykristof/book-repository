import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../firebase/Firebase";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form onSubmit={handleLogin}>
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
            Log in
          </Button>
        </form>
        <div>
          <Link to="/signup">No account? Sign up here!</Link>
        </div>
      </div>
    </Container>
  );
};

export default withRouter(Login);

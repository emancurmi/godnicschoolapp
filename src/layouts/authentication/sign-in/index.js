
import React, { useState } from "react";
// react-router-dom components
import { Link } from 'react-router-dom';

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

//  School Bus Booking System React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";


import config from "../../../config";
//import engine from '../../../engine';


// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

class Basic extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      config: config,
      username: '',
      password: '',
      accessToken: '',
      authenticated: ''
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeUsername(event) {
    this.setState({
      username: event.target.value
    })
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleClick(event) {
    var apiBaseUrl = config.API_ENDPOINT
    const payload = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        'username': this.state.username,
        'password': this.state.password
      })
    };
    const { username, password } = this.state;

    if (username && password) {
      fetch(apiBaseUrl + 'login', payload)
        .then((response) => {
          if (response.status === 200) {
            alert("Logged In! You'll be redirected on Home")
            return response.json()
          } else {
            return alert("wrong pass")
          }
        }).then((data) => {
          this.setState({
            accessToken: data.accestToken,
            authenticated: data.authenticated
          });
          localStorage.setItem('accessToken', data.accessToken);
          if (data.authenticated === true) {
            console.log(this.props)
            this.props.onLoginSuccess(data)
          }

        })
        .catch((err) => console.log(err));
    } else {
      alert("Cannot be Empty")
    }
  }

  render() {
    return (
      <BasicLayout image={bgImage}>
        <Card onSubmit={this.handleSubmitevents}>
          <MDBox
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
            mx={2}
            mt={-3}
            p={2}
            mb={1}
            textAlign="center"
          >
            <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
              Sign in
            </MDTypography>
            {/*<Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid>*/}
          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox component="form" role="form">
              <MDBox mb={2}>
                <MDInput type="email" label="username" fullWidth />
              </MDBox>
              <MDBox mb={2}>
                <MDInput type="password" label="password" fullWidth />
              </MDBox>
              <MDBox mt={4} mb={1}>
                <MDButton type="submmit" variant="gradient" color="info" fullWidth>
                  sign in
                </MDButton>
              </MDBox>
              <MDBox mt={3} mb={1} textAlign="center">
                <MDTypography variant="button" color="text">
                  Don&apos;t have an account?{" "}
                  <MDTypography
                    component={Link}
                    to="/authentication/sign-up"
                    variant="button"
                    color="info"
                    fontWeight="medium"
                    textGradient
                  >
                    Sign up
                  </MDTypography>
                </MDTypography>
              </MDBox>
            </MDBox>
          </MDBox>
        </Card>
      </BasicLayout>
    )
  }
}

//Login.propTypes = {
//  setToken: PropTypes.func.isRequired
//}

export default Basic;

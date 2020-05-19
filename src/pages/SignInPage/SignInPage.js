import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUpLink from "../../components/SignUpLink/SignUpLink";
import ForgetPasswordLink from "../../components/PasswordForgetLink/PasswordForgetLink"


const SignInPage = () => (
  <div>
    <h1>Sign In</h1>
    <SignIn />
    <SignUpLink />
    <ForgetPasswordLink />
  </div>
);

export default SignInPage;

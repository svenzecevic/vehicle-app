import React from "react";
import SignUp from "../../components/SignUp/SignUp";
import { FirebaseContext } from "../../assets/Firebase";

const SignUpPage = () => (
  <div>
    <h1>Sign Up</h1>
    <FirebaseContext.Consumer>
      {(firebase) => <SignUp firebase={firebase} />}
    </FirebaseContext.Consumer>
  </div>
);

export default SignUpPage;

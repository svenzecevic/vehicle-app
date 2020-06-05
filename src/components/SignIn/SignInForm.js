import React from "react";
import { inject, observer } from "mobx-react";
import Input from "../Input/Input";
import classes from "./SignIn.module.css";

const $btn = "btn btn-primary";

export default inject("signinStore")(
  observer(({ form }) => (
    <div className={classes.loginForm}>
      <form onSubmit={form.onSubmit}>
        <Input field={form.$("email")} />
        <Input field={form.$("password")} />

        <br />

        <button type="submit" className={$btn} onClick={form.onSubmit}>
          Sign In
        </button>

        <p> {form.error} </p>
      </form>
    </div>
  ))
);

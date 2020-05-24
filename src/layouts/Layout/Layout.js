import React, { Suspense } from "react";
import Jumbotron from "../../pages/Jumbotron/Jumbotron";
import MainPage from "../../pages/MainPage/MainPage";
import { Route, Switch } from "react-router-dom";
import classes from "./Layout.module.css";
import NotFound from "../../pages/NotFound/NotFound";
import SignInPage from "../../pages/SignInPage/SignInPage";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
import PasswordForgetPage from "../../pages/PasswordForgetPage/PasswordForgetPage";

const Edit = React.lazy(() => import("../../pages/EditPage/EditPage"));

const layout = (props) => {
  return (
    <div className={classes.Content}>
      <Switch>
        <Route path="/" exact component={Jumbotron} />
        <Route path="/signin" exact component={SignInPage} />
        <Route path="/signup" exact component={SignUpPage} />
        <Route path="/pw-forget" exact component={PasswordForgetPage} />
        <Route path="/main-page" exact component={MainPage} />
        <Route
          path="/edit-page"
          exact
          render={() => (
            <Suspense
              fallback={
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status"></div>
                </div>
              }
            >
              <Edit />
            </Suspense>
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default layout;

import React, { Suspense } from "react";
import Jumbotron from "../../pages/Jumbotron/Jumbotron";
import MainPage from "../../pages/MainPage/MainPage";
import { Route, Switch } from "react-router-dom";
import classes from "./Layout.module.css";
import NotFound from "../../pages/NotFound/NotFound";
import SignInPage from "../../pages/SignInPage/SignInPage";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
import PasswordForgetPage from "../../pages/PasswordForgetPage/PasswordForgetPage";
import ModelPage from "../../pages/ModelPage/ModelPage";
import ResetPasswordPage from "../../pages/ResetPasswordPage/ResetPasswordPage";
import AddModelPage from "../../pages/AddModelPage/AddModelPage";
import EditModelPage from "../../pages/EditModelPage/EditModelPage";

const Edit = React.lazy(() => import("../../pages/AddMakePage/AddMakePage"));

const layout = (props) => {
  return (
    <div className={classes.Content}>
      <Switch>
        <Route path="/" exact component={Jumbotron} />
        <Route path="/signin" exact component={SignInPage} />
        <Route path="/signup" exact component={SignUpPage} />
        <Route path="/pw-forget" exact component={PasswordForgetPage} />
        <Route path="/pw-reset" exact component={ResetPasswordPage} />
        <Route path="/make-list" exact component={MainPage} />
        <Route path="/model-list" exact component={ModelPage} />
        <Route path="/add-model" exact component={AddModelPage} />
        <Route path="/edit-model" exact component={EditModelPage} />
        <Route
          path="/add-page"
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

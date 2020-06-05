import MobxReactForm from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";

const plugins = {
  dvr: dvr(validatorjs),
};

const fields = [
  {
    name: "email",
    placeholder: "Email Address",
    rules: "required|email|string|between:5,25",
  },
  {
    name: "password",
    placeholder: "Password",
    rules: "required|string|between:5,25",
  },
];

const hooks = {
  onSuccess(form) {
    alert("Success!");

    let values = form.values();
    let email = values["email"];
    let password = values["password"];
  },
  onError(form) {
    alert("Error!");
  },
};

const form = new MobxReactForm({ fields }, { plugins, hooks });

export default form;

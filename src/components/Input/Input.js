import React from "react";
import { observer } from "mobx-react";

const $input = "form-control";
const $small = "form-text text-danger";

export default observer(({ field, type = "text", placeholder = null }) => (
  <div>
    <input {...field.bind({ type, placeholder })} className={$input} />
    <small className={$small}>{field.error}</small>
  </div>
));

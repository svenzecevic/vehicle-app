import { observable } from "mobx";

class FormStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable divClassName = "form-group";
  @observable makeType = "text";
  @observable makeClassName = "form-control";
  @observable makeName = "make";
  @observable makePlaceholder = "Enter vehicle make...";
  @observable modelType = "text";
  @observable modelClassName = "form-control";
  @observable modelName = "model";
  @observable modelPlaceholder = "Enter vehicle model...";
  @observable btnType = "submit";
  @observable btnClassName = "btn btn-primary";
  @observable btnLabel = "Submit";
}

export default FormStore;

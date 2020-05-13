import { observable } from "mobx";

class FormStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable formDiv =
    " border w-75 mx-auto shadow p-3 mb-5 bg-white rounded;";
  @observable divClassName = "form-group";
  @observable makeType = "text";
  @observable makeClassName = "form-control form-control-lg w-50 mx-auto";
  @observable makeName = "make";
  @observable makePlaceholder = "Enter vehicle make...";
  @observable modelType = "text";
  @observable modelClassName = "form-control form-control-lg w-50 mx-auto ";
  @observable modelName = "model";
  @observable modelPlaceholder = "Enter vehicle model...";
  @observable btnType = "submit";
  @observable btnClassName = "btn btn-primary";
  @observable btnLabel = "Submit";
}

export default FormStore;

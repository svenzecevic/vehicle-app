import axios from "axios";

const instance = axios.create({
  baseURL: "https://project-app-628a3.firebaseio.com/",
});

export default instance;

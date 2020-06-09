import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.baasic.com/v1/szecevic-cars",
});

export default instance;

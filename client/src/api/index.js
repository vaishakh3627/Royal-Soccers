import axios from "axios";

const configApp = require("../config");

let REACT_APP_API_URL = configApp.REACT_APP_API_URL;

export const postRequest = async (endpoint, data, params) => {
  let url = REACT_APP_API_URL + endpoint;
  return await axios.post(url, data, {
    params: params,
    timeout: 20000,
  });
};

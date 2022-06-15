import { postRequest } from "../../../../api";

export const getData = async (data) =>
  postRequest("/soccerdata/getSoccer", data);

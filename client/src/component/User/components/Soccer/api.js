import { postRequest } from "../../../../api";

export const createData = async (data) =>
  postRequest("/soccerdata/soccer", data);

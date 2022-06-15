import { postRequest } from "../../../../api";

export const createData = async (data) =>
  postRequest("/coffeeshopdata/coffeeshop", data);

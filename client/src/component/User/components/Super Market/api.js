import { postRequest } from "../../../../api";

export const createData = async (data) =>
  postRequest("/supermarketdata/supermarket", data);

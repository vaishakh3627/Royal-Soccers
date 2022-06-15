import { postRequest } from "../../../../api";

export const getData = async (data) =>
  postRequest("/supermarketdata/getSuperMarket", data);

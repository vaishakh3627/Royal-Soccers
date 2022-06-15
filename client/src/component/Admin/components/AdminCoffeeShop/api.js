import { postRequest } from "../../../../api";

export const getData = async (data) =>
  postRequest("/coffeeshopdata/getCoffeeShop", data);

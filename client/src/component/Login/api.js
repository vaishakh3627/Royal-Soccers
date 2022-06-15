import { postRequest } from "../../api";

export const createData = async (data) => postRequest("/auth/login", data);

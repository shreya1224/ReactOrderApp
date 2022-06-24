import httpClient from "../http-common3";



const create = (data) => {
  return httpClient.post("saveorder", data);
};
const getAll = () => {
  return httpClient.get("/getallorders");
};
export default {  create ,getAll};
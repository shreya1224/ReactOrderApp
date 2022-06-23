import httpClient from "../http-common3";



const create = (data) => {
  return httpClient.post("saveorder", data);
};
export default {  create };
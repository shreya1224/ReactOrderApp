import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8012/ems",
  headers: {
    "Content-Type": "application/json",
  },
});

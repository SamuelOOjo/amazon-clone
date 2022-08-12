import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-a6a0a.cloudfunctions.net/api"
});

export default instance;

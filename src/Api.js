import axios from "axios";

const CLIENTID = process.env.REACT_APP_CLIENT_ID;
const APIURL = process.env.REACT_APP_API_URL;

export default axios.create({
  baseURL: APIURL,
  headers: { Authorization: `Client-ID ${CLIENTID}` },
});

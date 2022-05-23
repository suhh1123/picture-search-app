import axios from "axios";

export default axios.create({
  baseURL: "https://api.pexels.com",
  headers: {
    Authorization: "563492ad6f9170000100000178fcc1498203442cb08a8e5bffa08da3",
  },
});

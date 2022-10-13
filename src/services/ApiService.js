import axios from "axios";

const api = axios.create({
  baseURL: "https://keep.jrwebdeveloper.com/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "Application/json",
  },
});

function getNotes() {
  return api.get("/notes");
}

export { getNotes };

import axios from "axios";

const api = axios.create({
  baseURL: "https://keep.jrwebdeveloper.com/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "Application/json",
  },
});

function getNotes(params) {
  return api.get("/notes", { params: params });
}

function removeNote(id) {
  return api.delete(`/notes/${id}`);
}

export { getNotes, removeNote };

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

function addNote(data) {
  return api.post("/notes", data);
}

function editNote(note) {
  return api.put(`/notes/${note.id}`, note);
}

function removeNote(id) {
  return api.delete(`/notes/${id}`);
}

export { getNotes, addNote, editNote, removeNote };

import axios from "axios"

//api in own file for reusability

export const createNote = (data) => {
    return axios.post('/api/create', data);
}

export const getNotes = () => {
    return axios.get('/api/notes');
}

export const deleteNote = (id) => {
    return axios.delete(`/api/delete/${id}`);
}

export const getNote = (id) => {
    return axios.get(`/api/note/${id}`);
}
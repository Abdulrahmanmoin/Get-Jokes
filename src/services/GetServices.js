import axios from "axios";

const api = axios.create({baseURL: "https://api.freeapi.app/api/v1"})


export const getJokes = () => {
    return api.get("/public/randomjokes")
}
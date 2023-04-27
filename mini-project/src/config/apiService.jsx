import axios from "axios";

export const baseApi = axios.create({
    baseURL: "https://644a603d79279846dce69e8f.mockapi.io/inventaris",
})
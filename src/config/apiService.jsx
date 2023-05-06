import axios from "axios";

export const baseApi = axios.create({
    baseURL: "https://644a603d79279846dce69e8f.mockapi.io/inventaris",
})

export const baseApi2 = axios.create({
    baseURL: 'https://6450a378a3221969114e470f.mockapi.io/aspirasi',
})
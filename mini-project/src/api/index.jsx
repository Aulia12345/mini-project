import { baseApi, baseApi2 } from "../config/apiService"

export const Api = {
    // API inventaris
    getInventaris: () => {
        return baseApi.get(`/inventaris`);
    },
    getInventarisById: (id) => {
        return baseApi.get(`/inventaris/${id}`);
    },
    createInventaris: (body) => {
        return baseApi.post(`/inventaris`, body);
    },
    updateInventaris: (id, body) => {
        return baseApi.put(`/inventaris/${id}`, body);
    },
    deleteInventaris: (id) => {
        return baseApi.delete(`/inventaris/${id}`);
    },

    // API aspirasi
    getAspirasi: () => {
        return baseApi2.get('/users');
    },
    createAspirasi: (body) => {
        return baseApi2.post(`/users`, body);
    },
    deleteAspirasi: (id) => {
        return baseApi2.delete(`/users/${id}`);
    },
}
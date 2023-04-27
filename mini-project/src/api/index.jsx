import { baseApi } from "../config/apiService"

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
    }

}
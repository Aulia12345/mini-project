import { useCallback } from "react"
import { useState } from "react"
import { Api } from "../../../api"
import { message } from "antd"

// Get Inventaris
export const useGetInventaris = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [inventaris, setInventaris] = useState()

    const getInventaris = useCallback(async () => {
        try {
            const res = await Api.getInventaris()
            setInventaris(res?.data)
        } catch (err) {
            message.open({
                type: 'error',
                content: `${err?.message}`,
            });
        } finally {
            setIsLoading(false);
        }
    }, []);

    return [isLoading, inventaris, getInventaris]

}

// Create Inventaris
export const usePostInventaris = () => {
    const [isLoading, setIsLoading] = useState(false)

    const createInventaris = useCallback(async (body, onSuccess) => {
        try {
            setIsLoading(true);
            await Api.createInventaris(body)
            onSuccess && onSuccess();
            message.open({
                type: 'success',
                content: `success add a new inventaris`,
            });
        } catch (err) {
            message.open({
                type: 'error',
                content: `${err?.message}`,
            });
        } finally {
            setIsLoading(false);
        }
    }, []);

    return [isLoading, createInventaris]
}

// Delete Inventaris
export const useDeleteInventaris = () => {
    const [isLoading, setIsLoading] = useState(false)

    const deleteInventaris = useCallback(async (id, onSuccess) => {
        try {
            setIsLoading(true);
            await Api.deleteInventaris(id)
            onSuccess && onSuccess();
        } catch (err) {
            message.open({
                type: 'error',
                content: `${err?.message}`,
            });
        } finally {
            setIsLoading(false);
            message.open({
                type: 'success',
                content: `success delete an inventaris`,
            });
        }
    }, []);

    return [isLoading, deleteInventaris]
}


// Update Inventaris
export const useUpdateInventaris = () => {
    const [isLoading, setIsLoading] = useState(false)

    const updateInventaris = useCallback(async (id, body, onSuccess) => {
        try {
            setIsLoading(true);
            await Api.updateInventaris(id, body)
            onSuccess && onSuccess();
            message.open({
                type: 'success',
                content: `success update inventaris`,
            });
        } catch (err) {
            message.open({
                type: 'error',
                content: `${err?.message}`,
            });
        } finally {
            setIsLoading(false);
        }
    }, []);

    return [isLoading, updateInventaris]
}
import { useCallback } from "react"
import { useState } from "react"
import { Api } from "../../../api"
import { message } from "antd"

// Get Aspirasi
export const useGetAspirasi = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [aspirasi, setAspirasi] = useState()

    const getAspirasi = useCallback(async () => {
        try {
            const res = await Api.getAspirasi()
            setAspirasi(res?.data)
        } catch (err) {
            message.open({
                type: 'error',
                content: `${err?.message}`,
            });
        } finally {
            setIsLoading(false);
        }
    }, []);

    return [isLoading, aspirasi, getAspirasi]

}

// Create Aspirasi
export const usePostAspirasi = () => {
    const [isLoading, setIsLoading] = useState(false)

    const createAspirasi = useCallback(async (body, onSuccess) => {
        try {
            setIsLoading(true);
            await Api.createAspirasi(body)
            onSuccess && onSuccess();
            message.open({
                type: 'success',
                content: `success add your aspiration`,
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

    return [isLoading, createAspirasi]
}

// Delete Aspirasi
export const useDelAspirasi = () => {
    const [isLoading, setIsLoading] = useState(false)

    const deleteAspirasi = useCallback(async (id, onSuccess) => {
        try {
            setIsLoading(true);
            await Api.deleteAspirasi(id)
            onSuccess && onSuccess();
            message.open({
                type: 'success',
                content: 'success delete aspiration',
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
    return [isLoading, deleteAspirasi]
}
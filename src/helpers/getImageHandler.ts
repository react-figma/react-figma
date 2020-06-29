import { api } from '../rpc';

const base64ToBlob = async (data) => {
    const result = await fetch(data);
    const blob = await result.blob();
    const reader = new FileReader();
    const promise = new Promise((resolve) => {
        reader.onload = () => {
            // @ts-ignore
            resolve(new Uint8Array(reader.result));
        };
    });
    reader.readAsArrayBuffer(blob);
    return await promise;
};

export const getImageHash = async (data: string): Promise<String> => {
    const response: any = await base64ToBlob(data);
    return await api.createImage(response);
};

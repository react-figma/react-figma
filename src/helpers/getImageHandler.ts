import { pluginToUIMessagePromise } from './messagePromise';

export const getImageHandler = async (data: string): Promise<Image> => {
    const response = await pluginToUIMessagePromise({ type: 'base64ToBlobWorker', value: data });
    return figma.createImage(response);
};

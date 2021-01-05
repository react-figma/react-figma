import * as usePromise from 'react-fetch-hook/usePromise';
import { getImageHash } from '../helpers/getImageHandler';

export const toDataURL = (url: string): Promise<string> =>
    fetch(url)
        .then(response => response.blob())
        .then(
            blob =>
                new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    // @ts-ignore
                    reader.onloadend = () => resolve(reader.result);
                    reader.onerror = reject;
                    reader.readAsDataURL(blob);
                })
        );

export const useImageHash = (source: string | { uri: string } | { default: string } | void) => {
    const src = source && (typeof source === 'string' ? source : 'uri' in source ? source.uri : source.default);
    const { data: dataUrl } = usePromise(
        src => (src && (src.slice(0, 5) === 'data:' ? Promise.resolve(src) : toDataURL(src))) || Promise.resolve(null),
        src
    );

    const { data: imageHash } = usePromise(
        dataUrl => (dataUrl && getImageHash(dataUrl)) || Promise.resolve(null),
        dataUrl
    );
    return imageHash;
};

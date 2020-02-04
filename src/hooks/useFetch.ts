import { messagePromise } from '../helpers/messagePromise';
const usePromise = require('react-fetch-hook/usePromise');

export const useFetch = (path, options?: any, specialOptions?: any) => {
    const blocked = ((specialOptions && specialOptions.depends) || (options && options.depends) || []).reduce(function(
        acc,
        dep
    ) {
        return acc || !dep;
    },
    false);
    return usePromise(
        !blocked &&
            function(path, options) {
                return messagePromise({ type: 'fetch', value: { path, options } });
            },
        path,
        options || {},
        specialOptions || {}
    );
};

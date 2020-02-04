import { messagePromise } from '../helpers/messagePromise';
import { HookOptions, HookOptionsWithFormatter, FetchResult } from 'react-fetch-hook';
const usePromise = require('react-fetch-hook/usePromise');

export const useFetch = <T>(
    path: RequestInfo,
    options?: HookOptions | HookOptionsWithFormatter<T>,
    specialOptions?: HookOptions
): FetchResult<T> => {
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

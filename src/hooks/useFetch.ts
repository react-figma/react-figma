import { HookOptions, HookOptionsWithFormatter, FetchResult } from 'react-fetch-hook';

export const useFetch = <T>(
    path: RequestInfo,
    options?: HookOptions | HookOptionsWithFormatter<T>,
    specialOptions?: HookOptions
): FetchResult<T> => require('react-fetch-hook');

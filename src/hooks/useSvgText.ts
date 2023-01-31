import * as usePromise from 'react-fetch-hook/usePromise';

export const getSvg = (svgUrl: string): Promise<string> => fetch(svgUrl).then(response => response.text());

export const useSvgText = (svgUrl: string) => {
    const { data: svgText } = usePromise(svgUrl => getSvg(svgUrl) || Promise.resolve(null), svgUrl);
    return svgText;
};

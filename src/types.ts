export type Color = string;

export interface BaseNodeProps {
    name?: string;
    pluginData?: {
        [key: string]: string;
    };
}

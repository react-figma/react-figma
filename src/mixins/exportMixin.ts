import { ExportProps } from '../types';

export const exportMixin = (node: ExportMixin) => (props: ExportProps) => {
    if (props.exportSettings) {
        node.exportSettings = props.exportSettings;
    }
    if (props.exportAsyncCallback) {
        node.exportAsync(props.exportAsyncSettings).then(props.exportAsyncCallback);
    }
};

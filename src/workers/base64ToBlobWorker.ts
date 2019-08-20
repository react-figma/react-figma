export const base64ToBlobWorker = () => async message => {
    if (!message.value || message.value.type !== 'base64ToBlobWorker') {
        return;
    }

    const data = message.value.value;

    const result = await fetch(data);
    const blob = await result.blob();
    const reader = new FileReader();
    reader.onload = () => {
        parent.postMessage(
            {
                pluginMessage: {
                    id: message.id,
                    // @ts-ignore
                    value: new Uint8Array(reader.result)
                }
            },
            '*'
        );
    };
    reader.readAsArrayBuffer(blob);
};

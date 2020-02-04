export const fetchWorker = message => {
    if (!message.value || message.value.type !== 'fetch') {
        return;
    }

    const { path, options } = message.value.value;

    fetch(path, options)
        .then(response => {
            return response.json();
        })
        .then(data => {
            parent.postMessage(
                {
                    pluginMessage: {
                        id: message.id,
                        value: data
                    }
                },
                '*'
            );
        });
};

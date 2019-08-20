var __awaiter =
    (this && this.__awaiter) ||
    function(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : new P(function(resolve) {
                          resolve(result.value);
                      }).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
export const base64ToBlobWorker = () => message =>
    __awaiter(this, void 0, void 0, function*() {
        if (!message.value || message.value.type !== 'base64ToBlobWorker') {
            return;
        }
        const data = message.value.value;
        const result = yield fetch(data);
        const blob = yield result.blob();
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
    });

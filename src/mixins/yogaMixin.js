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
import { messagePromise } from '../helpers/messagePromise';
export const yogaMixin = node => props =>
    __awaiter(this, void 0, void 0, function*() {
        const result = yield messagePromise({
            type: 'calculateLayout',
            value: {
                width: props.width,
                height: props.height,
                children: props.children.map(child => ({
                    width: child.width,
                    height: child.height
                }))
            }
        });
        props.children.forEach((child, id) => {
            const layout = result.children[id];
            if (layout && child.resize) {
                child.x = layout.left;
                child.y = layout.top;
                child.resize(layout.width, layout.height);
            }
        });
    });

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
import { getImageHandler } from './getImageHandler';
export const fillsPreprocessor = props =>
    __awaiter(this, void 0, void 0, function*() {
        if (props.fills) {
            const newFills = props.fills.map(fill =>
                __awaiter(this, void 0, void 0, function*() {
                    if (fill.type !== 'IMAGE' || !fill.image) {
                        return fill;
                    }
                    const mappedFill = Object.assign({}, fill);
                    const imageHandler = yield getImageHandler(mappedFill.image);
                    delete mappedFill.image;
                    mappedFill.imageHash = imageHandler.hash;
                    mappedFill.scaleMode = mappedFill.scaleMode || 'FILL';
                    return mappedFill;
                })
            );
            return yield Promise.all(newFills);
        }
        return [];
    });

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
import * as React from 'react';
import { renderer, subscribeOnMessages } from '../../../src/';
import { App } from './App';
figma.showUI(__html__, { visible: false });
figma.ui.onmessage = message => {
    subscribeOnMessages(message);
};
(() =>
    __awaiter(this, void 0, void 0, function*() {
        yield renderer(React.createElement(App, null));
        figma.closePlugin();
    }))();

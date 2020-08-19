import * as React from 'react';
const renderer = require('react-test-renderer');
import { Rectangle } from '../Rectangle';
import { createFigma } from 'figma-api-stub';
import { wait } from '../../../helpers/wait';
import { render } from '../../../renderer';
import { removeNodeBatchId } from '../../../helpers/removeNodeBatchId';
import { removeTempId } from '../../../helpers/removeTempId';
import { Page } from '../../..';

const removeMeta = node => {
    return removeNodeBatchId(removeTempId(node));
};

describe('<Rectangle />', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });
    });

    it('Rectangle without props', () => {
        const tree = renderer.create(<Rectangle />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Rectangle with layout style properties', () => {
        const tree = renderer
            .create(
                <Rectangle
                    style={{
                        width: 100,
                        height: 200,
                        top: 50,
                        left: 20
                    }}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Rectangle with color background', () => {
        const tree = renderer
            .create(
                <Rectangle
                    style={{
                        backgroundColor: '#1bff00'
                    }}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Rectangle with image background', () => {
        const tree = renderer
            .create(
                <Rectangle
                    style={{
                        backgroundColor: '#ff8b29',
                        backgroundSize: 'cover',
                        backgroundImage: './image.png'
                    }}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Rectangle with border props', () => {
        const tree = renderer
            .create(
                <Rectangle
                    style={{
                        width: 200,
                        height: 100,
                        borderWidth: 10,
                        borderColor: '#ff8b29'
                    }}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Loading backgroundImage', async () => {
        // @ts-ignore
        global.figma.createImage = () => {
            return {
                hash: '<image hash>'
            };
        };

        // @ts-ignore
        global.FileReader = () => {
            const obj: any = {
                readAsDataURL: () => {},
                readAsArrayBuffer: () => {}
            };

            setTimeout(() => {
                obj.result = '<test hash>';
                if (obj.onloadend) {
                    obj.onloadend();
                }
                if (obj.onload) {
                    obj.onload();
                }
            });

            return obj;
        };

        await render(
            <Page>
                <Rectangle
                    style={{
                        backgroundImage: 'https://avatars1.githubusercontent.com/u/54585419'
                    }}
                />
            </Page>
        );
        await wait();
        await wait();
        await wait();
        await wait();
        expect(removeMeta(figma.root)).toMatchSnapshot();
    });
});

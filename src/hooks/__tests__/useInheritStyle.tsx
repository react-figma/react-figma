import { createFigma } from 'figma-api-stub';
import { render } from '../../renderer';
import { wait } from '../../helpers/wait';
import * as React from 'react';
import { Component, Page, Text, View } from '../..';
import { removeNodeBatchId } from '../../helpers/removeNodeBatchId';
import { removeTempId } from '../../helpers/removeTempId';

const removeMeta = node => {
    return removeNodeBatchId(removeTempId(node));
};

describe('useInheritStyle', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });
        process.env.REACT_FIGMA_STYLE_INHERITANCE_ENABLED = '1';
    });

    afterEach(() => {
        delete process.env.REACT_FIGMA_STYLE_INHERITANCE_ENABLED;
    });

    it('styles propagating works', async () => {
        await render(
            <Page name="New page" isCurrent>
                <View style={{ fontSize: 50, fontWeight: 'bold', fontFamily: 'Roboto' } as any}>
                    <View style={{ fontSize: 48 } as any}>
                        <View style={{ width: 200, height: 100, backgroundColor: '#dd55aa' }} />
                        <Text style={{ color: '#ffffff' }}>text</Text>
                    </View>
                </View>
            </Page>
        );
        await wait();

        expect(removeMeta(figma.currentPage)).toMatchSnapshot();
    });

    it('styles propagating works over component without useInheritStyle', async () => {
        await render(
            <Page name="New page" isCurrent>
                <View style={{ fontSize: 50, fontWeight: 'bold', fontFamily: 'Roboto' } as any}>
                    <Component>
                        <View style={{ width: 200, height: 100, backgroundColor: '#dd55aa' }} />
                        <Text style={{ color: '#ffffff' }}>text</Text>
                    </Component>
                </View>
            </Page>
        );
        await wait();

        expect(removeMeta(figma.currentPage)).toMatchSnapshot();
    });

    it('styles propagating works with wrapping to component', async () => {
        const Component = () => {
            return (
                <View style={{ fontSize: 48 } as any}>
                    <View style={{ width: 200, height: 100, backgroundColor: '#dd55aa' }} />
                    <Text style={{ color: '#ffffff' }}>text</Text>
                </View>
            );
        };
        await render(
            <Page name="New page" isCurrent>
                <View style={{ fontSize: 50, fontWeight: 'bold', fontFamily: 'Roboto' } as any}>
                    <Component />
                </View>
            </Page>
        );
        await wait();

        expect(removeMeta(figma.currentPage)).toMatchSnapshot();
    });

    it('havent propagating without REACT_FIGMA_STYLE_INHERITANCE_ENABLED flag', async () => {
        delete process.env.REACT_FIGMA_STYLE_INHERITANCE_ENABLED;
        await render(
            <Page name="New page" isCurrent>
                <View style={{ fontSize: 50, fontWeight: 'bold', fontFamily: 'Roboto' } as any}>
                    <View style={{ fontSize: 48 } as any}>
                        <View style={{ width: 200, height: 100, backgroundColor: '#dd55aa' }} />
                        <Text style={{ color: '#ffffff' }}>text</Text>
                    </View>
                </View>
            </Page>
        );
        await wait();

        expect(removeMeta(figma.currentPage)).toMatchSnapshot();
    });
});

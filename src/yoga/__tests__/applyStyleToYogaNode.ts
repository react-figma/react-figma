import * as yoga from 'yoga-layout-prebuilt';
import { applyStyleToYogaNode } from '../applyStyleToYogaNode';
import { serializeYogaNodeStyle } from '../yogaSerializer';

const applyStyleToYogaNodeConnected = applyStyleToYogaNode(yoga);

describe('applyStyleToYogaNode', () => {
    it('width', () => {
        const yogaNode = yoga.Node.create();
        applyStyleToYogaNodeConnected(yogaNode, {
            width: 200
        });
        expect(serializeYogaNodeStyle(yogaNode)).toMatchSnapshot();
    });

    it('flexDirection', () => {
        const yogaNode = yoga.Node.create();
        applyStyleToYogaNodeConnected(yogaNode, {
            flexDirection: 'row'
        });
        expect(serializeYogaNodeStyle(yogaNode)).toMatchSnapshot();
    });

    it('alignItems', () => {
        const yogaNode = yoga.Node.create();
        applyStyleToYogaNodeConnected(yogaNode, {
            alignItems: 'center'
        });
        expect(serializeYogaNodeStyle(yogaNode)).toMatchSnapshot();
    });

    it('justifyContent', () => {
        const yogaNode = yoga.Node.create();
        applyStyleToYogaNodeConnected(yogaNode, {
            justifyContent: 'center'
        });
        expect(serializeYogaNodeStyle(yogaNode)).toMatchSnapshot();
    });

    it('paddingTop', () => {
        const yogaNode = yoga.Node.create();
        applyStyleToYogaNodeConnected(yogaNode, {
            paddingTop: 20
        });
        expect(serializeYogaNodeStyle(yogaNode)).toMatchSnapshot();
    });

    it('marginLeft', () => {
        const yogaNode = yoga.Node.create();
        applyStyleToYogaNodeConnected(yogaNode, {
            marginLeft: 20
        });
        expect(serializeYogaNodeStyle(yogaNode)).toMatchSnapshot();
    });
});

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

    it('width with percentage', () => {
        const yogaNode = yoga.Node.create();
        applyStyleToYogaNodeConnected(yogaNode, {
            width: '50%'
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

    it('position: absolute', () => {
        const yogaNode = yoga.Node.create();
        applyStyleToYogaNodeConnected(yogaNode, {
            position: 'absolute'
        });
        expect(serializeYogaNodeStyle(yogaNode)).toMatchSnapshot();
    });

    it('top / left / right / bottom', () => {
        const yogaNode = yoga.Node.create();
        applyStyleToYogaNodeConnected(yogaNode, {
            top: 10,
            left: 20,
            right: 30,
            bottom: 40
        });
        expect(serializeYogaNodeStyle(yogaNode)).toMatchSnapshot();
    });

    it('flexGrow', () => {
        const yogaNode = yoga.Node.create();
        applyStyleToYogaNodeConnected(yogaNode, {
            flexGrow: 2
        });
        expect(serializeYogaNodeStyle(yogaNode)).toMatchSnapshot();
    });

    it('flexShrink', () => {
        const yogaNode = yoga.Node.create();
        applyStyleToYogaNodeConnected(yogaNode, {
            flexShrink: 0.5
        });
        expect(serializeYogaNodeStyle(yogaNode)).toMatchSnapshot();
    });

    it('flexBasis', () => {
        const yogaNode = yoga.Node.create();
        applyStyleToYogaNodeConnected(yogaNode, {
            flexBasis: 100
        });
        expect(serializeYogaNodeStyle(yogaNode)).toMatchSnapshot();
    });

    it('flexBasis with percentage', () => {
        const yogaNode = yoga.Node.create();
        applyStyleToYogaNodeConnected(yogaNode, {
            flexBasis: '50%'
        });
        expect(serializeYogaNodeStyle(yogaNode)).toMatchSnapshot();
    });
});

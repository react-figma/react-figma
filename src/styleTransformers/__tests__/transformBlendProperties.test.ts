import { transformBlendProperties } from '../transformBlendProperties';

describe('transformBlendProperties', () => {
    it('shadow properties', () => {
        const result = transformBlendProperties({
            shadowColor: '#000000',
            shadowOpacity: 0.5,
            shadowRadius: 15,
            shadowOffset: {
                width: 10,
                height: 20
            }
        });
        expect(result).toMatchObject({
            effects: [
                {
                    type: 'DROP_SHADOW',
                    color: {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0.5
                    },
                    offset: {
                        x: 10,
                        y: 20
                    },
                    radius: 15,
                    visible: true,
                    blendMode: 'NORMAL'
                }
            ]
        });
    });

    it('multiple shadow properties', () => {
        const result = transformBlendProperties({
            shadows: [
                {
                    shadowColor: '#000000',
                    shadowOpacity: 0.5,
                    shadowRadius: 15,
                    shadowOffset: {
                        width: 10,
                        height: 20
                    }
                },
                {
                    shadowColor: '#ffffff',
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    shadowOffset: {
                        width: 30,
                        height: 40
                    }
                }
            ]
        });
        expect(result).toMatchObject({
            effects: [
                {
                    type: 'DROP_SHADOW',
                    color: {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0.5
                    },
                    offset: {
                        x: 10,
                        y: 20
                    },
                    radius: 15,
                    visible: true,
                    blendMode: 'NORMAL'
                },
                {
                    type: 'DROP_SHADOW',
                    color: {
                        r: 1,
                        g: 1,
                        b: 1,
                        a: 0.5
                    },
                    offset: {
                        x: 30,
                        y: 40
                    },
                    radius: 10,
                    visible: true,
                    blendMode: 'NORMAL'
                }
            ]
        });
    });
});

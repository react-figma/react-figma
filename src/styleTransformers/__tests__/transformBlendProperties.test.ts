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
});

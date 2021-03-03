import { StatusBar } from '../StatusBar';

describe('StatusBar', () => {
    it('currentHeight is number', () => {
        const currentHeight = StatusBar.currentHeight;
        expect(typeof currentHeight).toBe('number');
    });
});

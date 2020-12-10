import { transformAutoLayoutToYoga } from '../transformAutoLayoutToYoga';

describe('transformAutoLayoutToYoga', () => {
    it('transform layoutMode: HORIZONTAL to flexDirection: row', () => {
        const result = transformAutoLayoutToYoga({
            layoutMode: 'HORIZONTAL'
        });
        expect(result.flexDirection).toEqual('row');
    });

    it('transform layoutMode: VERTICAL to flexDirection: column', () => {
        const result = transformAutoLayoutToYoga({
            layoutMode: 'VERTICAL'
        });
        expect(result.flexDirection).toEqual('column');
    });
});

import { transformAutoLayoutToYoga } from '../transformAutoLayoutToYoga';

describe('transformAutoLayoutToYoga', () => {
    it('constraints MIN/CENTER', () => {
        const result = transformAutoLayoutToYoga({
            constraints: {
                horizontal: 'MIN',
                vertical: 'CENTER'
            }
        });
        expect(result).toMatchSnapshot();
    });
});

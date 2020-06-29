import { createFigma } from 'figma-api-stub';
import { render } from '../../renderer';
import { wait } from '../../helpers/wait';
import * as React from 'react';
import { useOnLayoutHandler } from '../useOnLayoutHandler';

describe('useOnLayoutHandler', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });
    });

    it('triggers handler when calculated initially', async () => {
        const yogaProps = { x: 0, y: 0, width: 100, height: 100 };
        const handler = jest.fn();

        const Component = () => {
            useOnLayoutHandler(yogaProps, { onLayout: handler });
            return null;
        };
        await render(<Component />);
        await wait();

        expect(handler).toHaveBeenCalledWith(yogaProps);
    });

    it('does not trigger on rerender when result is the same', async () => {
        const yogaProps = { x: 0, y: 0, width: 100, height: 100 };
        const handler = jest.fn();
        const incrementRerenders = jest.fn();

        const Component = () => {
            const [, setDummyState] = React.useState(1);

            useOnLayoutHandler(yogaProps, { onLayout: handler });
            incrementRerenders();

            React.useEffect(() => {
                setDummyState(2);
            });

            return null;
        };
        await render(<Component />);
        await wait();

        expect(handler).toHaveBeenCalledTimes(1);
        expect(incrementRerenders.mock.calls.length).toBeGreaterThanOrEqual(2);
    });

    it('triggers handler when calculated and result is different', async () => {
        let yogaProps = { x: 0, y: 0, width: 100, height: 100 };
        const handler = jest.fn();
        const incrementRerenders = jest.fn();

        const Component = () => {
            const [, setDummyState] = React.useState(1);

            useOnLayoutHandler(yogaProps, { onLayout: handler });
            incrementRerenders();

            React.useEffect(() => {
                yogaProps = { ...yogaProps, width: 200 };
                setDummyState(2);
            });

            return null;
        };
        await render(<Component />);
        await wait();

        expect(handler).toHaveBeenCalledTimes(2);
        expect(incrementRerenders.mock.calls.length).toBeGreaterThanOrEqual(2);
    });
});

import * as React from 'react';
import { render } from '../renderer';
import { Rectangle, Page, Text, Group, Frame } from '..';
import { createFigma } from 'figma-api-stub';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';

describe('renderer', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });
    });

    it('render single component', () => {
        figma.createRectangle = jest.fn().mockImplementation(figma.createRectangle);
        render(<Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />, figma.currentPage);
        expect(figma.createRectangle).toHaveBeenCalledTimes(1);
        expect(figma.root).toMatchSnapshot();
    });

    it('rerender single component', () => {
        figma.createRectangle = jest.fn().mockImplementation(figma.createRectangle);
        render(<Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />, figma.currentPage);
        render(<Rectangle style={{ width: 200, height: 100, backgroundColor: '#ff3500' }} />, figma.currentPage);
        expect(figma.createRectangle).toHaveBeenCalledTimes(1);
        expect(figma.root).toMatchSnapshot();
    });

    it('insert new component between', () => {
        figma.createRectangle = jest.fn().mockImplementation(figma.createRectangle);
        figma.createPage = jest.fn().mockImplementation(figma.createPage);
        render(
            <Page>
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#ff3500' }} />
            </Page>,
            figma.root
        );
        render(
            <Page>
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#005aff' }} />
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#ff3500' }} />
            </Page>,
            figma.root
        );
        expect(figma.createRectangle).toHaveBeenCalledTimes(3);
        expect(figma.createPage).toHaveBeenCalledTimes(3);
        expect(figma.root).toMatchSnapshot();
    });

    it('remove component between', () => {
        figma.createRectangle = jest.fn().mockImplementation(figma.createRectangle);
        figma.createText = jest.fn().mockImplementation(figma.createText);
        figma.createPage = jest.fn().mockImplementation(figma.createPage);
        render(
            <Page>
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#0050ff' }} />
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#ff3500' }} />
            </Page>,
            figma.root
        );
        render(
            <Page>
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#ff3500' }} />
            </Page>,
            figma.root
        );
        expect(figma.createRectangle).toHaveBeenCalledTimes(3);
        expect(figma.createPage).toHaveBeenCalledTimes(3);
        expect(figma.root).toMatchSnapshot();
    });

    it('remove component between (equal components)', () => {
        figma.createRectangle = jest.fn().mockImplementation(figma.createRectangle);
        figma.createPage = jest.fn().mockImplementation(figma.createPage);
        render(
            <Page>
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#0048ff' }} />
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#00ff00' }} />
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#ff3500' }} />
            </Page>,
            figma.root
        );
        render(
            <Page>
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#0048ff' }} />
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#ff3500' }} />
            </Page>,
            figma.root
        );
        expect(figma.createRectangle).toHaveBeenCalledTimes(3);
        expect(figma.createPage).toHaveBeenCalledTimes(3);
        expect(figma.root).toMatchSnapshot();
    });

    it('text instance without Text component', () => {
        figma.createRectangle = jest.fn().mockImplementation(figma.createRectangle);
        figma.createText = jest.fn().mockImplementation(figma.createText);
        render(
            <Page>
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} /> fff
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#ff3500' }} />
            </Page>,
            figma.root
        );
        expect(figma.createRectangle).toHaveBeenCalledTimes(2);
        expect(figma.createText).toHaveBeenCalledTimes(0);
        expect(figma.root).toMatchSnapshot();
    });

    it('text instance without Text component (with hydration page)', () => {
        figma.createRectangle = jest.fn().mockImplementation(figma.createRectangle);
        figma.createText = jest.fn().mockImplementation(figma.createText);
        render(<Page></Page>, figma.root);
        render(
            <Page>
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} /> fff
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#ff3500' }} />
            </Page>,
            figma.root
        );
        expect(figma.createRectangle).toHaveBeenCalledTimes(2);
        expect(figma.createText).toHaveBeenCalledTimes(0);
        expect(figma.root).toMatchSnapshot();
    });

    it('creates single group', () => {
        figma.createRectangle = jest.fn().mockImplementation(figma.createRectangle);
        figma.createText = jest.fn().mockImplementation(figma.createText);
        figma.createPage = jest.fn().mockImplementation(figma.createPage);
        figma.group = jest.fn().mockImplementation(figma.group);

        render(
            <Page>
                <Group>
                    <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
                </Group>
            </Page>,
            figma.root
        );

        expect(figma.group).toHaveBeenCalledTimes(1);
        expect(figma.root).toMatchSnapshot();
    });

    it('creates nested groups', () => {
        figma.createRectangle = jest.fn().mockImplementation(figma.createRectangle);
        figma.createText = jest.fn().mockImplementation(figma.createText);
        figma.createPage = jest.fn().mockImplementation(figma.createPage);
        figma.group = jest.fn().mockImplementation(figma.group);

        render(
            <Page>
                <Group>
                    <Group>
                        <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
                    </Group>
                    <Group>
                        <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
                        <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
                    </Group>
                </Group>
            </Page>,
            figma.root
        );

        expect(figma.group).toHaveBeenCalledTimes(3);
        expect(figma.root).toMatchSnapshot();
    });

    it('Groups inserting', async () => {
        const waiting = new Subject();

        const Component = () => {
            const [flag, setFlag] = React.useState(false);
            React.useEffect(() => {
                setTimeout(() => {
                    setFlag(true);
                    waiting.next();
                });
            }, []);

            return (
                <Frame>
                    <Group>
                        <Rectangle style={{ width: 200, height: 100, backgroundColor: '#0054ff' }} />
                    </Group>
                    {flag && (
                        <Group>
                            <Rectangle style={{ width: 200, height: 100, backgroundColor: '#ff0017' }} />
                        </Group>
                    )}
                    <Group>
                        <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
                    </Group>
                </Frame>
            );
        };

        render(<Component />, figma.currentPage);

        return new Promise(resolve => {
            waiting.pipe(take(1)).subscribe(() => {
                expect(figma.root).toMatchSnapshot();
                resolve();
            });
        });
    });

    it('mark page isCurrent=true', () => {
        render(<Page isCurrent name={'New page'} />, figma.root);
        expect(figma.currentPage).toMatchSnapshot();
    });

    it('mark page isCurrent=false', () => {
        render(<Page name={'New page'} />, figma.root);
        expect(figma.currentPage).toMatchSnapshot();
    });

    it('Text component supported text instance children', async () => {
        figma.createText = jest.fn().mockImplementation(figma.createText);
        render(<Text>Some text</Text>, figma.currentPage);
        return new Promise(resolve => {
            setTimeout(() => {
                expect(figma.createText).toHaveBeenCalledTimes(1);
                expect(figma.root).toMatchSnapshot();
                resolve();
            });
        });
    });

    it('Text instance hydration', async () => {
        figma.createText = jest.fn().mockImplementation(figma.createText);
        render(<Text>Some text</Text>, figma.currentPage);
        render(<Text>Some text 2</Text>, figma.currentPage);

        return new Promise(resolve => {
            setTimeout(() => {
                expect(figma.createText).toHaveBeenCalledTimes(1);
                expect(figma.root).toMatchSnapshot();
                resolve();
            });
        });
    });

    it('Text characters applied', async () => {
        figma.createText = jest.fn().mockImplementation(figma.createText);

        render(<Text characters="some text" />, figma.currentPage);

        return new Promise(resolve => {
            setTimeout(() => {
                expect(figma.root).toMatchSnapshot();
                resolve();
            }, 20);
        });
    });

    it('Text instance updating', async () => {
        const waiting = new Subject();
        figma.createText = jest.fn().mockImplementation(figma.createText);

        const Component = () => {
            const [text, setText] = React.useState('text 1');
            React.useEffect(() => {
                setTimeout(() => {
                    setText('text 2');
                    waiting.next();
                });
            }, []);

            return <Text>{text}</Text>;
        };

        render(<Component />, figma.currentPage);

        return new Promise(resolve => {
            waiting.pipe(take(1)).subscribe(() => {
                expect(figma.root).toMatchSnapshot();
                resolve();
            });
        });
    });
});

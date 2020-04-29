import * as React from 'react';
import { render } from '../renderer';
import { Rectangle, Page, Text, Group, Frame, Svg, createComponent } from '..';
import { createFigma } from 'figma-api-stub';
import { Subject } from 'rxjs';
import { delay, take } from 'rxjs/operators';
import { wait } from '../helpers/wait';
import '../rpc';
import { removeTempId } from '../helpers/removeTempId';
import { removeNodeBatchId } from '../helpers/removeNodeBatchId';

const removeMeta = node => {
    return removeNodeBatchId(removeTempId(node));
};

describe('renderer', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });
    });

    it('render single component', async () => {
        figma.createRectangle = jest.fn().mockImplementation(figma.createRectangle);
        await render(
            <Page>
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
            </Page>
        );
        expect(figma.createRectangle).toHaveBeenCalledTimes(1);
        expect(removeMeta(figma.root)).toMatchSnapshot();
    });

    it('rerender single component', async () => {
        figma.createRectangle = jest.fn().mockImplementation(figma.createRectangle);
        await render(
            <Page>
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
            </Page>
        );
        await render(
            <Page>
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#ff3500' }} />
            </Page>
        );
        expect(figma.createRectangle).toHaveBeenCalledTimes(1);
        expect(removeMeta(figma.root)).toMatchSnapshot();
    });

    it('insert new component between', async () => {
        figma.createRectangle = jest.fn().mockImplementation(figma.createRectangle);
        figma.createPage = jest.fn().mockImplementation(figma.createPage);
        await render(
            <Page>
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#ff3500' }} />
            </Page>
        );
        await render(
            <Page>
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#005aff' }} />
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#ff3500' }} />
            </Page>
        );
        expect(figma.createRectangle).toHaveBeenCalledTimes(3);
        expect(figma.createPage).toHaveBeenCalledTimes(1);
        expect(removeMeta(figma.root)).toMatchSnapshot();
    });

    it('remove component between', async () => {
        figma.createRectangle = jest.fn().mockImplementation(figma.createRectangle);
        figma.createText = jest.fn().mockImplementation(figma.createText);
        figma.createPage = jest.fn().mockImplementation(figma.createPage);
        await render(
            <Page>
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
                <Text style={{ width: 200, height: 100 }} characters="test" />
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#ff3500' }} />
            </Page>
        );
        await render(
            <Page>
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#ff3500' }} />
            </Page>
        );
        expect(figma.createRectangle).toHaveBeenCalledTimes(2);
        expect(figma.createText).toHaveBeenCalledTimes(1);
        expect(figma.createPage).toHaveBeenCalledTimes(1);
        expect(removeMeta(figma.root)).toMatchSnapshot();
    });

    it('remove component between (equal components)', async () => {
        figma.createRectangle = jest.fn().mockImplementation(figma.createRectangle);
        figma.createPage = jest.fn().mockImplementation(figma.createPage);
        await render(
            <Page>
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#0048ff' }} />
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#00ff00' }} />
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#ff3500' }} />
            </Page>
        );
        await render(
            <Page>
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#0048ff' }} />
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#ff3500' }} />
            </Page>
        );
        expect(figma.createRectangle).toHaveBeenCalledTimes(3);
        expect(figma.createPage).toHaveBeenCalledTimes(1);
        expect(removeMeta(figma.root)).toMatchSnapshot();
    });

    it('text instance without Text component', async () => {
        figma.createRectangle = jest.fn().mockImplementation(figma.createRectangle);
        figma.createText = jest.fn().mockImplementation(figma.createText);
        await render(
            <Page>
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} /> fff
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#ff3500' }} />
            </Page>
        );
        expect(figma.createRectangle).toHaveBeenCalledTimes(2);
        expect(figma.createText).toHaveBeenCalledTimes(0);
        expect(removeMeta(figma.root)).toMatchSnapshot();
    });

    it('text instance without Text component (with hydration page)', async () => {
        figma.createRectangle = jest.fn().mockImplementation(figma.createRectangle);
        figma.createText = jest.fn().mockImplementation(figma.createText);
        await render(<Page></Page>);
        await render(
            <Page>
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} /> fff
                <Rectangle style={{ width: 200, height: 100, backgroundColor: '#ff3500' }} />
            </Page>
        );
        expect(figma.createRectangle).toHaveBeenCalledTimes(2);
        expect(figma.createText).toHaveBeenCalledTimes(0);
        expect(removeMeta(figma.root)).toMatchSnapshot();
    });

    it('creates single group', async () => {
        figma.createRectangle = jest.fn().mockImplementation(figma.createRectangle);
        figma.createText = jest.fn().mockImplementation(figma.createText);
        figma.createPage = jest.fn().mockImplementation(figma.createPage);
        figma.group = jest.fn().mockImplementation(figma.group);

        await render(
            <Page>
                <Group>
                    <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
                </Group>
            </Page>
        );

        expect(figma.group).toHaveBeenCalledTimes(1);
        expect(removeMeta(figma.root)).toMatchSnapshot();
    });

    it('creates nested groups', async () => {
        figma.createRectangle = jest.fn().mockImplementation(figma.createRectangle);
        figma.createText = jest.fn().mockImplementation(figma.createText);
        figma.createPage = jest.fn().mockImplementation(figma.createPage);
        figma.group = jest.fn().mockImplementation(figma.group);

        await render(
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
            </Page>
        );

        expect(figma.group).toHaveBeenCalledTimes(3);
        expect(removeMeta(figma.root)).toMatchSnapshot();
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
                <Page>
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
                </Page>
            );
        };

        await render(<Component />);

        return new Promise(resolve => {
            waiting
                .pipe(
                    take(1),
                    delay(0)
                )
                .subscribe(() => {
                    expect(removeMeta(figma.root)).toMatchSnapshot();
                    resolve();
                });
        });
    });

    it('mark page isCurrent=true', () => {
        render(<Page isCurrent name={'New page'} />);
        expect(figma.currentPage).toMatchSnapshot();
    });

    it('mark page isCurrent=false', () => {
        render(<Page name={'New page'} />);
        expect(figma.currentPage).toMatchSnapshot();
    });

    it('Text component supported text instance children', async () => {
        figma.createText = jest.fn().mockImplementation(figma.createText);
        await render(
            <Page>
                <Text>Some text</Text>
            </Page>
        );
        await wait();
        expect(figma.createText).toHaveBeenCalledTimes(1);
        expect(removeMeta(figma.root)).toMatchSnapshot();
    });

    it('Text instance hydration', async () => {
        figma.createText = jest.fn().mockImplementation(figma.createText);
        await render(
            <Page>
                <Text>Some text</Text>
            </Page>
        );
        await wait();
        await render(
            <Page>
                <Text>Some text 2</Text>
            </Page>
        );
        await wait();

        expect(figma.createText).toHaveBeenCalledTimes(1);
        expect(removeMeta(figma.root)).toMatchSnapshot();
    });

    it('Text characters applied', async () => {
        render(<Text characters="some text" />);
        await wait();
        await wait();
        expect(figma.root).toMatchSnapshot();
    });

    it('Text with custom font applied', async () => {
        render(<Text style={{ fontFamily: 'Helvetica', fontWeight: 'bold' }}>some text</Text>);

        await wait();
        await wait();
        expect(figma.root).toMatchSnapshot();
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

        render(<Component />);

        return new Promise(resolve => {
            waiting.pipe(take(1)).subscribe(() => {
                expect(figma.root).toMatchSnapshot();
                resolve();
            });
        });
    });

    it('Svg render', () => {
        figma.createNodeFromSvg = jest.fn(source => {
            const rect = figma.createRectangle();
            rect.fills = [
                {
                    color: {
                        b: 1,
                        g: 0,
                        r: 0
                    },
                    type: 'SOLID'
                }
            ];

            const frame = figma.createFrame();
            frame.appendChild(rect);
            return frame;
        });

        render(<Svg source={'<svg />'} />);
        expect(figma.createNodeFromSvg).toHaveBeenCalledTimes(1);
        expect(figma.root).toMatchSnapshot();
    });

    it('Svg hydration', () => {
        figma.createNodeFromSvg = jest.fn(source => {
            const rect = figma.createRectangle();
            rect.fills = [
                {
                    color: {
                        b: source === 'source1' ? 1 : 0,
                        g: source === 'source2' ? 1 : 0,
                        r: 0
                    },
                    type: 'SOLID'
                }
            ];

            const frame = figma.createFrame();
            frame.appendChild(rect);
            return frame;
        });

        render(<Svg source="source1" />);
        render(<Svg source="source2" />);
        expect(figma.createNodeFromSvg).toHaveBeenCalledTimes(2);
        expect(figma.root).toMatchSnapshot();
    });

    it('Svg instance updating', async () => {
        figma.createNodeFromSvg = jest.fn(source => {
            const rect = figma.createRectangle();
            rect.fills = [
                {
                    color: {
                        b: source === 'source1' ? 1 : 0,
                        g: source === 'source2' ? 1 : 0,
                        r: 0
                    },
                    type: 'SOLID'
                }
            ];

            const frame = figma.createFrame();
            frame.appendChild(rect);
            return frame;
        });

        const waiting = new Subject();
        const Component = () => {
            const [source, setSource] = React.useState('source1');
            React.useEffect(() => {
                setTimeout(() => {
                    setSource('source2');
                    waiting.next();
                });
            }, []);

            return <Svg source={source} />;
        };

        render(<Component />);

        return new Promise(resolve => {
            waiting.pipe(take(1)).subscribe(() => {
                expect(figma.createNodeFromSvg).toHaveBeenCalledTimes(2);
                expect(figma.root).toMatchSnapshot();
                resolve();
            });
        });
    });

    it('createComponent basic', () => {
        const Rect = createComponent();
        render(
            <>
                <Rect.Component>
                    <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
                </Rect.Component>
                <Rect.Instance />
            </>
        );
        expect(figma.root).toMatchSnapshot();
    });

    it('createComponent hydration', () => {
        const Rect = createComponent();
        render(
            <>
                <Rect.Component>
                    <Rectangle style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
                </Rect.Component>
                <Rect.Instance />
            </>
        );
        render(
            <>
                <Rect.Component>
                    <Rectangle style={{ width: 200, height: 100, backgroundColor: '#0051ff' }} />
                </Rect.Component>
                <Rect.Instance />
            </>
        );
        expect(figma.root).toMatchSnapshot();
    });

    it('createComponent overriding', async () => {
        const Rect = createComponent();
        render(
            <>
                <Rect.Component>
                    <Rectangle name="rect" style={{ width: 200, height: 100, backgroundColor: '#12ff00' }} />
                </Rect.Component>
                <Rect.Instance
                    overrides={{
                        rect: {
                            style: {
                                backgroundColor: '#0000ff'
                            }
                        }
                    }}
                />
            </>
        );
        await wait();
        expect(figma.root).toMatchSnapshot();
    });
});

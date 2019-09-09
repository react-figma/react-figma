import * as React from 'react';
import { yogaHandler } from '../yogaHandler';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const YogaContext = React.createContext({});

export const YogaContextProvider = props => {
    const yogaContext = React.useContext(YogaContext);
    const { yogaRef, ...otherProps } = props;
    const [yogaProps, setYogaProps] = React.useState();
    const $subjectRef = React.useRef(new Subject());
    const $recalculateRef = React.useRef(new Subject());

    React.useEffect(() => {
        const instance = yogaRef.current;
        // @ts-ignore
        if (!instance) {
            return;
        }
        const calculate = () => {
            yogaHandler(instance, otherProps).then(newProps => {
                console.log('yoga mixin result', newProps);
                const { children: yogaChildren, ...yogaPropsWithoutChildren } = newProps;
                // @ts-ignore
                setYogaProps(yogaPropsWithoutChildren);
                // @ts-ignore
                instance.children.forEach((child, index) => {
                    $subjectRef.current.next({ instance: child, props: yogaChildren[index] });
                });
                // @ts-ignore
                yogaContext.recalculate && yogaContext.recalculate.next();
            });
        };
        calculate();

        // @ts-ignore
        if (!yogaContext.recalculate) {
            return;
        }

        // @ts-ignore
        yogaContext.recalculate.subscribe(calculate);
    }, []);
    return (
        <YogaContext.Provider value={{ subject: $subjectRef.current, recalculate: $recalculateRef.current }}>
            {props.children({ yogaProps })}
        </YogaContext.Provider>
    );
};

export const useYogaLayout = props => {
    const { yogaRef } = props;
    const [yogaProps, setYogaProps] = React.useState({});
    const context = React.useContext(YogaContext);

    React.useEffect(() => {
        const instance = yogaRef.current;

        // @ts-ignore
        if (!context.subject) {
            return;
        }
        // @ts-ignore
        const subject = context.subject.pipe(
            filter((message: any) => message.instance === instance),
            map((message: any) => message.props)
        );

        subject.subscribe(setYogaProps);
    }, []);

    return yogaProps;
};

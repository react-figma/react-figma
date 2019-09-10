import * as React from 'react';
import { yogaHandler } from '../yogaHandler';
import { interval, Subject } from 'rxjs';
import { debounce, filter, map } from 'rxjs/operators';

const YogaContext = React.createContext<any>({});

export const YogaContextProvider = props => {
    const yogaContext = React.useContext(YogaContext);
    const { yogaRef, ...otherProps } = props;
    const [yogaProps, setYogaProps] = React.useState<any>({});
    const $subjectRef = React.useRef(new Subject());
    const $recalculateRef = React.useRef<any>(new Subject());

    React.useEffect(() => {
        setTimeout(() => {
            yogaContext.recalculate && yogaContext.recalculate.next();
        });
    }, [yogaProps.width, yogaProps.height]);

    React.useEffect(() => {
        const instance = yogaRef.current;
        if (!instance) {
            return;
        }
        const calculate = () => {
            yogaHandler(instance, otherProps).then(newProps => {
                console.log('yoga mixin result', newProps);
                const { children: yogaChildren, ...yogaPropsWithoutChildren } = newProps;

                setYogaProps(yogaPropsWithoutChildren);

                instance.children.forEach((child, index) => {
                    $subjectRef.current.next({ instance: child, props: yogaChildren[index] });
                });
            });
        };
        calculate();

        const recalculationPipe = $recalculateRef.current.pipe(debounce(() => interval(50)));

        recalculationPipe.subscribe(calculate);
        return () => recalculationPipe.unsubscribe();
    }, []);
    return (
        <YogaContext.Provider value={{ subject: $subjectRef.current, recalculate: $recalculateRef.current }}>
            {props.children({ yogaProps })}
        </YogaContext.Provider>
    );
};

export const useYogaLayout = props => {
    const { yogaRef } = props;
    const [yogaProps, setYogaProps] = React.useState<any>({});
    const context = React.useContext(YogaContext);

    React.useEffect(() => {
        const instance = yogaRef.current;

        if (!context.subject) {
            return;
        }
        const subject = context.subject.pipe(
            filter((message: any) => message.instance === instance),
            map((message: any) => message.props)
        );

        subject.subscribe(setYogaProps);

        return () => subject.unsubscribe();
    }, []);

    React.useEffect(() => {
        const instance: any = yogaRef.current;
        if (!instance) {
            return;
        }

        if (instance.width !== yogaProps.width || instance.height !== yogaProps.height) {
            context.recalculate && context.recalculate.next();
        }
    }, [yogaProps.width, yogaProps.height]);

    return yogaProps;
};

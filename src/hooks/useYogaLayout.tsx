import * as React from 'react';
import { yogaHandler } from '../yogaHandler';
import { interval, Subject } from 'rxjs';
import { debounce, filter, map } from 'rxjs/operators';

const YogaContext = React.createContext<any>({});

export const YogaContextProvider = props => {
    const { yogaRef, ...otherProps } = props;
    const $subjectRef = React.useRef(new Subject());
    const $recalculateRef = React.useRef<any>(new Subject());

    React.useEffect(() => {
        const instance = yogaRef.current;
        if (!instance) {
            return;
        }
        const handleYogaProps = (newProps, instance) => {
            const { children: yogaChildren, ...yogaPropsWithoutChildren } = newProps;
            if (instance.parent && instance.parent.type === 'GROUP') {
                yogaPropsWithoutChildren.x += instance.parent.x;
                yogaPropsWithoutChildren.y += instance.parent.y;
            }

            $subjectRef.current.next({ instance, props: yogaPropsWithoutChildren });
            if (instance.children) {
                instance.children.forEach((child, index) => {
                    handleYogaProps(newProps.children[index], child);
                });
            }
        };
        const calculate = () => {
            yogaHandler(instance).then(newProps => {
                console.log('yoga mixin result', newProps);
                handleYogaProps(newProps, instance);
            });
        };
        calculate();

        const recalculationPipe = $recalculateRef.current.pipe(debounce(() => interval(50)));

        recalculationPipe.subscribe(calculate);
        return () => recalculationPipe.unsubscribe();
    }, []);
    return (
        <YogaContext.Provider value={{ subject: $subjectRef.current, recalculate: $recalculateRef.current }}>
            {props.children}
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

        if (instance.width !== props.width || instance.height !== props.height) {
            context.recalculate && context.recalculate.next();
        }
    }, [props.width, props.height]);

    return yogaProps;
};

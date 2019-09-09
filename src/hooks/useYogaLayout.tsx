import * as React from 'react';
import { yogaHandler } from '../yogaHandler';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const YogaContext = React.createContext({});

export const YogaContextProvider = props => {
    const [yogaProps, setYogaProps] = React.useState();
    const $subjectRef = React.useRef(new Subject());
    const ref = React.useRef();
    React.useEffect(() => {
        const instance = ref.current;
        // @ts-ignore
        if (!instance) {
            return;
        }
        yogaHandler(instance, props).then(newProps => {
            console.log('yoga mixin result', newProps);
            const { children: yogaChildren, ...yogaPropsWithoutChildren } = newProps;
            // @ts-ignore
            setYogaProps(yogaPropsWithoutChildren);
            // @ts-ignore
            instance.children.forEach((child, index) => {
                $subjectRef.current.next({ instance: child, props: yogaChildren[index] });
            });
        });
    }, []);
    return (
        <YogaContext.Provider value={{ subject: $subjectRef.current }}>
            {props.children({ ref, yogaProps })}
        </YogaContext.Provider>
    );
};

export const useYogaLayout = props => {
    const [yogaProps, setYogaProps] = React.useState({});
    const ref = React.useRef();
    const context = React.useContext(YogaContext);

    React.useEffect(() => {
        const instance = ref.current;

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

    return [ref, yogaProps];
};

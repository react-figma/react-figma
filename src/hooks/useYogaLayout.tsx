import * as React from 'react';
import { $updatedYogaCoords } from '../yoga';
import { filter, map } from 'rxjs/operators';

export const useYogaLayout = props => {
    const { yogaRef } = props;
    const [yogaProps, setYogaProps] = React.useState<any>({});

    React.useEffect(() => {
        const instance = yogaRef.current;
        const subject = $updatedYogaCoords.pipe(
            filter((message: any) => message.instance === instance),
            map((message: any) => message.props)
        );

        const subscription = subject.subscribe(setYogaProps);

        return () => subscription.unsubscribe();
    }, []);

    return yogaProps;
};

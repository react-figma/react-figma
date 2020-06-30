import * as React from 'react';
import { NullableCalculatedYogaLayoutProps, CalculatedYogaLayoutProps } from './useYogaLayout';
import { areEqualShallow } from '../helpers/areEqualShallow';

export interface OnLayoutHandlerProps {
    onLayout?: (props: CalculatedYogaLayoutProps) => void;
}

export const useOnLayoutHandler = (newYogaProps: NullableCalculatedYogaLayoutProps, props: OnLayoutHandlerProps) => {
    const [prevYogaProps, setPrevYogaProps] = React.useState<NullableCalculatedYogaLayoutProps>(null);

    React.useEffect(() => {
        if (newYogaProps === null || areEqualShallow(prevYogaProps, newYogaProps)) {
            return;
        }

        setPrevYogaProps(newYogaProps);

        if (!props.onLayout) {
            return;
        }
        props.onLayout(newYogaProps);
    });
};

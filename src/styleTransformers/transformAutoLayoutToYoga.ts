import { AutoLayoutProps } from '../types';

const layoutModeToFlexDirection = {
    HORIZONTAL: 'row',
    VERTICAL: 'column'
};

export const transformAutoLayoutToYoga = (props: AutoLayoutProps) => {
    return {
        ...(props.layoutMode && layoutModeToFlexDirection[props.layoutMode]
            ? {
                  flexDirection: layoutModeToFlexDirection[props.layoutMode]
              }
            : {}),
        ...(props.horizontalPadding
            ? {
                  paddingLeft: props.horizontalPadding,
                  paddingRight: props.horizontalPadding
              }
            : {}),
        ...(props.verticalPadding
            ? {
                  paddingTop: props.verticalPadding,
                  paddingBottom: props.verticalPadding
              }
            : {})
    };
};

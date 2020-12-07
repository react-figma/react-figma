import { AutoLayoutProps, LayoutProps } from '../types';

const layoutModeToFlexDirection = {
    HORIZONTAL: 'row',
    VERTICAL: 'column'
};

const layoutAlignToAlignSelf = {
    MIN: 'flex-start',
    CENTER: 'center',
    MAX: 'flex-end',
    STRETCH: 'stretch'
};

const constraintToJustifyContent = {
    MIN: 'flex-start',
    CENTER: 'center',
    MAX: 'flex-end',
    STRETCH: 'space-between'
};

const constraintToAlignItems = {
    MIN: 'flex-start',
    CENTER: 'center',
    MAX: 'flex-end',
    STRETCH: 'stretch'
};

interface AutoLayoutAllProps extends AutoLayoutProps, LayoutProps {}

export const transformAutoLayoutToYoga = (props: AutoLayoutAllProps) => {
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
            : {}),
        ...(props.layoutAlign && layoutAlignToAlignSelf[props.layoutAlign]
            ? {
                  alignSelf: layoutAlignToAlignSelf[props.layoutAlign]
              }
            : {}),
        ...(props.constraints &&
        props.constraints.horizontal &&
        constraintToJustifyContent[props.constraints.horizontal]
            ? {
                  justifyContent: constraintToJustifyContent[props.constraints.horizontal]
              }
            : {}),
        ...(props.constraints && props.constraints.vertical && constraintToAlignItems[props.constraints.vertical]
            ? {
                  alignItems: constraintToAlignItems[props.constraints.vertical]
              }
            : {}),
        ...(props.paddingLeft
            ? {
                  paddingLeft: props.paddingLeft
              }
            : {}),
        ...(props.paddingRight
            ? {
                  paddingRight: props.paddingRight
              }
            : {}),
        ...(props.paddingTop
            ? {
                  paddingTop: props.paddingTop
              }
            : {}),
        ...(props.paddingBottom
            ? {
                  paddingBottom: props.paddingBottom
              }
            : {})
    };
};

import { AutoLayoutProps, LayoutProps } from '../types';
import { YogaStyleProperties } from '../yoga/YogaStyleProperties';

const layoutModeToFlexDirection: Partial<
    { [k in AutoLayoutProps['layoutMode']]: YogaStyleProperties['flexDirection'] }
> = {
    HORIZONTAL: 'row',
    VERTICAL: 'column'
};

const layoutAlignToAlignSelf: Partial<{ [k in LayoutProps['layoutAlign']]: YogaStyleProperties['alignItems'] }> = {
    MIN: 'flex-start',
    CENTER: 'center',
    MAX: 'flex-end',
    STRETCH: 'stretch'
};

interface AutoLayoutAllProps extends AutoLayoutProps, LayoutProps {}

export const transformAutoLayoutToYoga = (props: AutoLayoutAllProps): Partial<YogaStyleProperties> => {
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

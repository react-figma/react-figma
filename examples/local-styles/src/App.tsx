import * as React from 'react';
import {
    Page,
    View,
    Text,
    StyleSheet,
    useFillPaintStyle,
    useStrokePaintStyle,
    useTextStyle,
    useEffectStyle
} from 'react-figma';

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#76ff1c',
        borderColor: '#ffffff',
        borderWidth: 5
    },
    blurContainer: {
        backgroundColor: '#30885E',
        borderColor: '#ffffff',
        borderWidth: 5
    },
    heading: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 24,
        color: '#000000'
    },
    innerShadow: {
        shadowColor: '#0300AE',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset: { width: -10, height: -10 }
    },
    dropShadow: {
        shadowColor: '#E5187B',
        shadowOpacity: 0.5,
        shadowRadius: 4,
        shadowOffset: { width: 2, height: 4 }
    },
    layerBlur: {
        blurRadius: 4
    }
});

export const App = () => {
    const rootFillStyle = useFillPaintStyle(styles.root, {
        name: 'root/background',
        description: 'Background color'
    });

    const blurFillStyle = useFillPaintStyle(styles.blurContainer, {
        name: 'blur/background',
        description: 'Blur Background color'
    });

    const rootStrokeStyle = useStrokePaintStyle(styles.root, {
        name: 'root/border'
    });

    const headingTextStyle = useTextStyle(styles.heading, {
        name: 'heading'
    });

    const shadowStyle = useEffectStyle(
        {
            shadows: [
                { ...styles.innerShadow, shadowType: 'INNER_SHADOW', shadowSpread: 2 },
                { ...styles.dropShadow, shadowType: 'DROP_SHADOW' }
            ]
        },
        {
            name: 'Shadow Effect'
        }
    );

    const blurShadowElevationStyle = useEffectStyle(
        {
            shadows: [{ ...styles.innerShadow, shadowType: 'INNER_SHADOW' }],
            blurs: [{ ...styles.layerBlur, blurType: 'LAYER_BLUR' }]
        },
        {
            name: 'Blur Shadow Effect'
        }
    );

    return (
        <Page name="New page" isCurrent>
            <View>
                <View
                    style={{
                        width: 200,
                        height: 100,
                        ...styles.root,
                        ...rootFillStyle,
                        ...rootStrokeStyle,
                        ...shadowStyle
                    }}
                />
                <View
                    style={{
                        width: 200,
                        height: 50,
                        ...blurFillStyle,
                        ...rootStrokeStyle,
                        ...blurShadowElevationStyle
                    }}
                />
                <Text style={{ ...headingTextStyle }}>Local styles</Text>
            </View>
        </Page>
    );
};

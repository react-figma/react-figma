import * as React from 'react';
import * as checkedIcon from './checkbox-checked.svg';
import * as unCheckedIcon from './checkbox-unchecked.svg';
import { View, StyleSheet, Svg, Text } from '../../../../../src';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 64,
        height: 64
    },
    label: {
        marginLeft: 32,
        fontSize: 64,
        fontFamily: 'Roboto'
    }
});

export const Checkbox = props => {
    const { label, checked, ...otherProps } = props;
    return (
        <View style={styles.container} {...otherProps}>
            <Svg source={checked ? checkedIcon : unCheckedIcon} style={styles.icon} />
            <Text style={styles.label}>{label}</Text>
        </View>
    );
};

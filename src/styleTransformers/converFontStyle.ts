const capitalize = (w: string) => {
    return w[0].toUpperCase() + w.substr(1).toLowerCase();
};

const numberToWeightMapping = {
    '100': 'Thin',
    '200': 'ExtraLight',
    '300': 'Light',
    '400': 'Regular',
    '500': 'Medium',
    '600': 'SemiBold',
    '700': 'Bold',
    '800': 'ExtraBold',
    '900': 'Black',
    '950': 'ExtraBlack'
};

const transformFontWeight = fontWeight => {
    if (`${parseInt(fontWeight)}` === `${fontWeight}`) {
        return numberToWeightMapping[`${fontWeight}`];
    } else {
        return capitalize(fontWeight);
    }
};

export const convertFontStyle = (fontWeight: string | number = 'normal', fontStyle = 'normal') => {
    if (fontStyle === 'normal') {
        return fontWeight === 'normal' ? 'Regular' : transformFontWeight(fontWeight);
    } else if (fontWeight === 'normal') {
        return capitalize(fontStyle);
    } else {
        return `${transformFontWeight(fontWeight)} ${capitalize(fontStyle)}`;
    }
};

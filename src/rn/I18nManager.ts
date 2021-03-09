import { I18nManagerStatic } from 'react-native';

class I18nManagerImpl implements I18nManagerStatic {
    allowRTL(allowRTL: boolean): void {}

    doLeftAndRightSwapInRTL: boolean;

    forceRTL(forceRTL: boolean): void {}

    getConstants(): { isRTL: boolean; doLeftAndRightSwapInRTL: boolean } {
        return { doLeftAndRightSwapInRTL: false, isRTL: false };
    }

    isRTL: boolean = false;

    swapLeftAndRightInRTL(swapLeftAndRight: boolean): void {}
}

export const I18nManager: I18nManagerStatic = new I18nManagerImpl();

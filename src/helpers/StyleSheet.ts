import { CommonStyle } from '../types';

export class StyleSheet {
    static create<T extends { [P in keyof T]: Partial<CommonStyle> }>(styles: T): T {
        return styles;
    }

    static flatten<C extends Partial<CommonStyle>>(styles: C | C[]): C {
        if (Array.isArray(styles)) {
            return styles.reduce((acc, item) => ({ ...acc, ...item }), {} as any);
        } else {
            return styles;
        }
    }

    static resolve<T extends { [key: string]: Partial<CommonStyle> }>(value: T): T {
        return value;
    }
}

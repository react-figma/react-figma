import { CommonStyle } from '../types';

type StyleProp<P, T> = { [P in keyof T]: Partial<CommonStyle> };

export class StyleSheet {
    static create<T extends StyleProp<any, T>>(styles: T): T {
        return styles;
    }

    static flatten<C extends Partial<CommonStyle>>(styles: C | C[] | void): C {
        if (Array.isArray(styles)) {
            return styles.reduce((acc, item) => ({ ...acc, ...item }), {} as any);
        } else {
            return styles || ({} as C);
        }
    }

    static resolve<T extends { [key: string]: Partial<CommonStyle> }>(value: T): T {
        return value;
    }

    static compose<C1 extends StyleProp<any, C1>, C2 extends StyleProp<any, C2>>(style1: C1, style2: C2): C1 & C2 {
        const result = { ...style1, ...style2 } as (C1 & C2);
        Object.keys(style1).map(style1Key => {
            if (style2[style1Key]) {
                result[style1Key] = { ...style1[style1Key], ...style2[style1Key] };
            }
        });
        return result;
    }
}

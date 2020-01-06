import { CommonStyle } from '../types';
import { Assign } from 'utility-types';

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

    static compose<C1 extends Partial<CommonStyle>, C2 extends Partial<CommonStyle>>(
        style1: C1,
        style2: C2
    ): Assign<C1, C2> {
        return { ...(style1 || ({} as C1)), ...(style2 || ({} as C2)) };
    }

    static hairlineWidth = 1;
}

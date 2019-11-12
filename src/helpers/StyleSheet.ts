export class StyleSheet {
    static create<T extends Object>(value: T): T {
        return value;
    }

    static flatten<C extends Object>(styles: C | C[]): C {
        if (Array.isArray(styles)) {
            return styles.reduce((acc, item) => ({ ...acc, ...item }), {} as any);
        } else {
            return styles;
        }
    }

    static resolve<T extends Object>(value: T): T {
        return value;
    }
}

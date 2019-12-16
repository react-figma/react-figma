export class Platform {
    static OS = 'figma';
    static Version = 1;
    static select(params: { figma?: Function; [key: string]: Function }) {
        if (params && params.figma) {
            return params.figma();
        }
    }
}

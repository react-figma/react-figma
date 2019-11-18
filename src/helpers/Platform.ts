export class Platform {
    static OS = 'figma';
    static Version = 1;
    static select(params: { figma: Function }) {
        if (params && params.figma) {
            return params.figma();
        }
    }
}

export type Color = string;

export interface BaseNodeProps {
    name?: string;
    pluginData?: {
        [key: string]: string;
    };
    sharedPluginData?: {
        [namespace: string]: {
            [key: string]: string;
        };
    };
}

export interface LayoutProps {
    relativeTransform?: Transform;
    x?: number;
    y?: number;
    rotation?: number;
    width?: number;
    height?: number;
    isWithoutConstraints?: boolean;
}

export interface ChildrenProps {
    children?: ReadonlyArray<BaseNode>;
}

export interface GeometryProps {
    fills: ReadonlyArray<Paint> | symbol;
    strokes: ReadonlyArray<Paint>;
    strokeWeight: number;
    strokeAlign: 'CENTER' | 'INSIDE' | 'OUTSIDE';
    strokeCap: StrokeCap | symbol;
    strokeJoin: StrokeJoin | symbol;
    dashPattern: ReadonlyArray<number>;
    fillStyleId: string | symbol;
    strokeStyleId: string;
}

export interface DefaultShapeProps extends BaseNodeProps, LayoutProps, GeometryProps {}

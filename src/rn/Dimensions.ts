import { Dimensions as DimensionsRN, ScaledSize } from 'react-native';

const DEFAULT_SCALED_SIZE: ScaledSize = {
    fontScale: 1,
    height: Number.MAX_SAFE_INTEGER,
    scale: 1,
    width: Number.MAX_SAFE_INTEGER
};

class DimensionsImpl implements DimensionsRN {
    private dims: { [p: string]: ScaledSize } = {
        window: DEFAULT_SCALED_SIZE,
        screen: DEFAULT_SCALED_SIZE
    };
    private changeListeners = [];

    addEventListener(
        type: 'change',
        handler: ({ window, screen }: { window: ScaledSize; screen: ScaledSize }) => void
    ): void {
        this.changeListeners = [...this.changeListeners.filter(l => l !== handler), handler];
    }

    get(dim: 'window' | 'screen'): ScaledSize {
        return this.dims[dim];
    }

    removeEventListener(
        type: 'change',
        handler: ({ window, screen }: { window: ScaledSize; screen: ScaledSize }) => void
    ): void {
        this.changeListeners = [...this.changeListeners.filter(l => l !== handler)];
    }

    set(dims: { [p: string]: any }): void {
        this.dims = dims;
        this.changeListeners.forEach(listener => listener(this.dims));
    }
}

export const Dimensions: DimensionsRN = new DimensionsImpl();

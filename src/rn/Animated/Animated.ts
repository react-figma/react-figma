import {
    _Image,
    _ScrollView,
    _Text,
    _View,
    DefaultSectionT,
    FlatListProps,
    NativeSyntheticEvent,
    SectionListProps
} from 'react-native';
import { nanoid } from 'nanoid/non-secure';
import * as React from 'react';

type AnimatedValue = Value;
type AnimatedValueXY = ValueXY;

class Animated {
    // Internal class, no public API.
}

class AnimatedWithChildren extends Animated {
    // Internal class, no public API.
}

class AnimatedInterpolation extends AnimatedWithChildren {
    interpolate(config: InterpolationConfigType): AnimatedInterpolation {
        return new AnimatedInterpolation();
    }
}

type ExtrapolateType = 'extend' | 'identity' | 'clamp';

type InterpolationConfigType = {
    inputRange: number[];
    outputRange: number[] | string[];
    easing?: (input: number) => number;
    extrapolate?: ExtrapolateType;
    extrapolateLeft?: ExtrapolateType;
    extrapolateRight?: ExtrapolateType;
};

type ValueListenerCallback = (state: { value: number }) => void;

/**
 * Standard value for driving animations.  One `Animated.Value` can drive
 * multiple properties in a synchronized fashion, but can only be driven by one
 * mechanism at a time.  Using a new mechanism (e.g. starting a new animation,
 * or calling `setValue`) will stop any previous ones.
 */
export class Value extends AnimatedWithChildren {
    value: number;
    offset: number;
    private changeListeners = {};

    constructor(value: number) {
        super();
        this.value = value;
    }

    /**
     * Directly set the value.  This will stop any animations running on the value
     * and update all the bound properties.
     */
    setValue(value: number): void {
        this.value = value;
    }

    /**
     * Sets an offset that is applied on top of whatever value is set, whether via
     * `setValue`, an animation, or `Animated.event`.  Useful for compensating
     * things like the start of a pan gesture.
     */
    setOffset(offset: number): void {
        this.offset = offset;
    }

    /**
     * Merges the offset value into the base value and resets the offset to zero.
     * The final output of the value is unchanged.
     */
    flattenOffset(): void {
        this.value += this.offset;
        this.offset = 0;
    }

    /**
     * Sets the offset value to the base value, and resets the base value to zero.
     * The final output of the value is unchanged.
     */
    extractOffset(): void {
        this.offset = this.value;
        this.value = 0;
    }

    /**
     * Adds an asynchronous listener to the value so you can observe updates from
     * animations.  This is useful because there is no way to
     * synchronously read the value because it might be driven natively.
     */
    addListener(callback: ValueListenerCallback): string {
        const id = nanoid();
        this.changeListeners[id] = id;
        return id;
    }

    removeListener(id: string): void {
        delete this.changeListeners[id];
    }

    removeAllListeners(): void {
        Object.keys(this.changeListeners).forEach(this.removeListener);
    }

    /**
     * Stops any running animation or tracking.  `callback` is invoked with the
     * final value after stopping the animation, which is useful for updating
     * state to match the animation position with layout.
     */
    stopAnimation(callback?: (value: number) => void): void {}

    /**
     * Interpolates the value before updating the property, e.g. mapping 0-1 to
     * 0-10.
     */
    interpolate(config: InterpolationConfigType): AnimatedInterpolation {
        return new AnimatedInterpolation();
    }
}

type ValueXYListenerCallback = (value: { x: number; y: number }) => void;

/**
 * 2D Value for driving 2D animations, such as pan gestures.  Almost identical
 * API to normal `Animated.Value`, but multiplexed.  Contains two regular
 * `Animated.Value`s under the hood.
 */
export class ValueXY extends AnimatedWithChildren {
    x: AnimatedValue;
    y: AnimatedValue;
    private offsetX: number;
    private offsetY: number;
    private changeListeners: {};

    constructor(valueIn?: { x: number | AnimatedValue; y: number | AnimatedValue }) {
        super();
        this.x = typeof valueIn.x === 'number' ? new Value(valueIn.x) : valueIn.x;
        this.y = typeof valueIn.y === 'number' ? new Value(valueIn.y) : valueIn.y;
    }

    setValue(value: { x: number; y: number }): void {
        this.x = new Value(value.x);
        this.y = new Value(value.y);
    }

    setOffset(offset: { x: number; y: number }): void {
        this.offsetX = offset.x;
        this.offsetY = offset.y;
    }

    flattenOffset(): void {
        this.x.setValue(this.x.value + this.offsetX);
        this.y.setValue(this.y.value + this.offsetY);
        this.offsetX = 0;
        this.offsetY = 0;
    }

    extractOffset(): void {
        this.offsetX = this.x.value;
        this.offsetY = this.y.value;
        this.x.setValue(0);
        this.y.setValue(0);
    }

    stopAnimation(callback?: (value: { x: number; y: number }) => void): void {}

    addListener(callback: ValueXYListenerCallback): string {
        const id = nanoid();
        this.changeListeners[id] = id;
        return id;
    }

    removeListener(id: string): void {
        delete this.changeListeners[id];
    }

    /**
     * Converts `{x, y}` into `{left, top}` for use in style, e.g.
     *
     *```javascript
     *  style={this.state.anim.getLayout()}
     *```
     */
    getLayout(): { [key: string]: AnimatedValue } {
        return {
            left: this.x,
            top: this.y
        };
    }

    /**
     * Converts `{x, y}` into a useable translation transform, e.g.
     *
     *```javascript
     *  style={{
     *    transform: this.state.anim.getTranslateTransform()
     *  }}
     *```
     */
    getTranslateTransform(): [{ translateX: AnimatedValue }, { translateY: AnimatedValue }] {
        return [
            {
                translateX: this.x
            },
            {
                translateY: this.y
            }
        ];
    }
}

type EndResult = { finished: boolean };
type EndCallback = (result: EndResult) => void;

export interface CompositeAnimation {
    /**
     * Animations are started by calling start() on your animation.
     * start() takes a completion callback that will be called when the
     * animation is done or when the animation is done because stop() was
     * called on it before it could finish.
     *
     * @param callback - Optional function that will be called
     *      after the animation finished running normally or when the animation
     *      is done because stop() was called on it before it could finish
     *
     * @example
     *   Animated.timing({}).start(({ finished }) => {
     *    // completion callback
     *   });
     */
    start: (callback?: EndCallback) => void;
    /**
     * Stops any running animation.
     */
    stop: () => void;
    /**
     * Stops any running animation and resets the value to its original.
     */
    reset: () => void;
}

class EmptyCompositeAnimation implements CompositeAnimation {
    reset(): void {}

    start(callback: EndCallback | undefined): void {}

    stop(): void {}
}

interface AnimationConfig {
    isInteraction?: boolean;
    useNativeDriver: boolean;
}

/**
 * Animates a value from an initial velocity to zero based on a decay
 * coefficient.
 */
export function decay(value: AnimatedValue | AnimatedValueXY, config: DecayAnimationConfig): CompositeAnimation {
    return new EmptyCompositeAnimation();
}

interface DecayAnimationConfig extends AnimationConfig {
    velocity: number | { x: number; y: number };
    deceleration?: number;
}

/**
 * Animates a value along a timed easing curve.  The `Easing` module has tons
 * of pre-defined curves, or you can use your own function.
 */
export const timing: (
    value: AnimatedValue | AnimatedValueXY,
    config: TimingAnimationConfig
) => CompositeAnimation = () => {
    return new EmptyCompositeAnimation();
};

interface TimingAnimationConfig extends AnimationConfig {
    toValue: number | AnimatedValue | { x: number; y: number } | AnimatedValueXY | AnimatedInterpolation;
    easing?: (value: number) => number;
    duration?: number;
    delay?: number;
}

interface SpringAnimationConfig extends AnimationConfig {
    toValue: number | AnimatedValue | { x: number; y: number } | AnimatedValueXY;
    overshootClamping?: boolean;
    restDisplacementThreshold?: number;
    restSpeedThreshold?: number;
    velocity?: number | { x: number; y: number };
    bounciness?: number;
    speed?: number;
    tension?: number;
    friction?: number;
    stiffness?: number;
    mass?: number;
    damping?: number;
    delay?: number;
}

interface LoopAnimationConfig {
    iterations?: number; // default -1 for infinite
    /**
     * Defaults to `true`
     */
    resetBeforeIteration?: boolean;
}

/**
 * Creates a new Animated value composed from two Animated values added
 * together.
 */
export function add(a: Animated, b: Animated): AnimatedAddition {
    return new AnimatedAddition();
}

class AnimatedAddition extends AnimatedInterpolation {}

/**
 * Creates a new Animated value composed by subtracting the second Animated
 * value from the first Animated value.
 */
export function subtract(a: Animated, b: Animated): AnimatedSubtraction {
    return new AnimatedSubtraction();
}

class AnimatedSubtraction extends AnimatedInterpolation {}

/**
 * Creates a new Animated value composed by dividing the first Animated
 * value by the second Animated value.
 */
export function divide(a: Animated, b: Animated): AnimatedDivision {
    return new AnimatedDivision();
}

class AnimatedDivision extends AnimatedInterpolation {}

/**
 * Creates a new Animated value composed from two Animated values multiplied
 * together.
 */
export function multiply(a: Animated, b: Animated): AnimatedMultiplication {
    return new AnimatedMultiplication();
}

class AnimatedMultiplication extends AnimatedInterpolation {}

/**
 * Creates a new Animated value that is the (non-negative) modulo of the
 * provided Animated value
 */
export function modulo(a: Animated, modulus: number): AnimatedModulo {
    return new AnimatedModulo();
}

class AnimatedModulo extends AnimatedInterpolation {}

/**
 * Create a new Animated value that is limited between 2 values. It uses the
 * difference between the last value so even if the value is far from the bounds
 * it will start changing when the value starts getting closer again.
 * (`value = clamp(value + diff, min, max)`).
 *
 * This is useful with scroll events, for example, to show the navbar when
 * scrolling up and to hide it when scrolling down.
 */
export function diffClamp(a: Animated, min: number, max: number): AnimatedDiffClamp {
    return new AnimatedDiffClamp();
}

class AnimatedDiffClamp extends AnimatedInterpolation {}

/**
 * Starts an animation after the given delay.
 */
export function delay(time: number): CompositeAnimation {
    return new EmptyCompositeAnimation();
}

/**
 * Starts an array of animations in order, waiting for each to complete
 * before starting the next.  If the current running animation is stopped, no
 * following animations will be started.
 */
export function sequence(animations: Array<CompositeAnimation>): CompositeAnimation {
    return new EmptyCompositeAnimation();
}

/**
 * Array of animations may run in parallel (overlap), but are started in
 * sequence with successive delays.  Nice for doing trailing effects.
 */

export function stagger(time: number, animations: Array<CompositeAnimation>): CompositeAnimation {
    return new EmptyCompositeAnimation();
}

/**
 * Loops a given animation continuously, so that each time it reaches the end,
 * it resets and begins again from the start. Can specify number of times to
 * loop using the key 'iterations' in the config. Will loop without blocking
 * the UI thread if the child animation is set to 'useNativeDriver'.
 */

export function loop(animation: CompositeAnimation, config?: LoopAnimationConfig): CompositeAnimation {
    return new EmptyCompositeAnimation();
}

/**
 * Spring animation based on Rebound and Origami.  Tracks velocity state to
 * create fluid motions as the `toValue` updates, and can be chained together.
 */
export function spring(value: AnimatedValue | AnimatedValueXY, config: SpringAnimationConfig): CompositeAnimation {
    return new EmptyCompositeAnimation();
}

type ParallelConfig = {
    stopTogether?: boolean; // If one is stopped, stop all.  default: true
};

/**
 * Starts an array of animations all at the same time.  By default, if one
 * of the animations is stopped, they will all be stopped.  You can override
 * this with the `stopTogether` flag.
 */
export function parallel(animations: Array<CompositeAnimation>, config?: ParallelConfig): CompositeAnimation {
    return new EmptyCompositeAnimation();
}

type Mapping = { [key: string]: Mapping } | AnimatedValue;
interface EventConfig<T> {
    listener?: (event: NativeSyntheticEvent<T>) => void;
    useNativeDriver: boolean;
}

/**
 *  Takes an array of mappings and extracts values from each arg accordingly,
 *  then calls `setValue` on the mapped outputs.  e.g.
 *
 *```javascript
 *  onScroll={Animated.event(
 *    [{nativeEvent: {contentOffset: {x: this._scrollX}}}]
 *    {listener},          // Optional async listener
 *  )
 *  ...
 *  onPanResponderMove: Animated.event([
 *    null,                // raw event arg ignored
 *    {dx: this._panX},    // gestureState arg
 *  ]),
 *```
 */
export function event<T>(argMapping: Array<Mapping | null>, config?: EventConfig<T>): (...args: any[]) => void {
    return () => {};
}

export type ComponentProps<T> = T extends React.ComponentType<infer P> | React.Component<infer P> ? P : never;

export type LegacyRef<C> = { getNode(): C };

type Nullable = undefined | null;
type Primitive = string | number | boolean | symbol;
type Builtin = Function | Date | Error | RegExp;

interface WithAnimatedArray<P> extends Array<WithAnimatedValue<P>> {}
type WithAnimatedObject<T> = {
    [K in keyof T]: WithAnimatedValue<T[K]>;
};

export type WithAnimatedValue<T> = T extends Builtin | Nullable
    ? T
    : T extends Primitive
    ? T | Value | AnimatedInterpolation // add `Value` and `AnimatedInterpolation` but also preserve original T
    : T extends Array<infer P>
    ? WithAnimatedArray<P>
    : T extends {}
    ? WithAnimatedObject<T>
    : T; // in case it's something we don't yet know about (for .e.g bigint)

type NonAnimatedProps = 'key' | 'ref';

type TAugmentRef<T> = T extends React.Ref<infer R> ? React.Ref<R | LegacyRef<R>> : never;

export type AnimatedProps<T> = {
    [key in keyof T]: key extends NonAnimatedProps
        ? key extends 'ref'
            ? TAugmentRef<T[key]>
            : T[key]
        : WithAnimatedValue<T[key]>;
};

export interface AnimatedComponent<T extends React.ComponentType<any>>
    extends React.FC<AnimatedProps<React.ComponentPropsWithRef<T>>> {}

const AnimatedComponentImpl = () => null;

/**
 * Make any React component Animatable.  Used to create `Animated.View`, etc.
 */
export function createAnimatedComponent<T extends React.ComponentType<any>>(component: T): AnimatedComponent<T> {
    return AnimatedComponentImpl;
}

/**
 * Animated variants of the basic native views. Accepts Animated.Value for
 * props and style.
 */
export const View: AnimatedComponent<typeof _View> = AnimatedComponentImpl;
export const Image: AnimatedComponent<typeof _Image> = AnimatedComponentImpl;
export const Text: AnimatedComponent<typeof _Text> = AnimatedComponentImpl;
export const ScrollView: AnimatedComponent<typeof _ScrollView> = AnimatedComponentImpl;

/**
 * FlatList and SectionList infer generic Type defined under their `data` and `section` props.
 */
export class FlatList<ItemT = any> extends React.Component<AnimatedProps<FlatListProps<ItemT>>> {}
export class SectionList<ItemT = any, SectionT = DefaultSectionT> extends React.Component<
    AnimatedProps<SectionListProps<ItemT, SectionT>>
> {}

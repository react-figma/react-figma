---
id: Easing
title: Easing
---

Analog of the `Easing` module from [React Native](https://reactnative.dev/docs/Easing).

#### API

**step0()**

```ts
static step0(n)
```

A stepping function, returns 1 for any positive value of `n`.


**step1()**

```ts
step1()
```

A stepping function, returns 1 if `n` is greater than or equal to 1.

**linear()**

```ts
static linear(t)
```

A linear function, `f(t) = t`. Position correlates to elapsed time one to one.

[http://cubic-bezier.com/#0,0,1,1](http://cubic-bezier.com/#0,0,1,1)

**ease()**

```ts
static ease(t)
```

A basic inertial interaction, similar to an object slowly accelerating to speed.

[http://cubic-bezier.com/#.42,0,1,1](http://cubic-bezier.com/#.42,0,1,1)

**quad()**

```ts
static quad(t)
```

A quadratic function, `f(t) = t * t`. Position equals the square of elapsed time.

[http://easings.net/#easeInQuad](http://easings.net/#easeInQuad)

**cubic()**

```ts
static cubic(t)
```

A cubic function, `f(t) = t * t * t`. Position equals the cube of elapsed time.

[http://easings.net/#easeInCubic](http://easings.net/#easeInCubic)

**poly()**

```ts
static poly(n)
```

A power function. Position is equal to the Nth power of elapsed time.

n = 4: [http://easings.net/#easeInQuart](http://easings.net/#easeInQuart) n = 5: [http://easings.net/#easeInQuint](http://easings.net/#easeInQuint)

**sin()**

```ts
static sin(t)
```

A sinusoidal function.

[http://easings.net/#easeInSine](http://easings.net/#easeInSine)

**circle()**

```ts
static circle(t)
```

A circular function.

[http://easings.net/#easeInCirc](http://easings.net/#easeInCirc)

**exp()**

```ts
static exp(t)
```

An exponential function.

[http://easings.net/#easeInExpo](http://easings.net/#easeInExpo)

**elastic()**

```ts
static elastic(bounciness)
```

A basic elastic interaction, similar to a spring oscillating back and forth.

Default bounciness is 1, which overshoots a little bit once. 0 bounciness doesn't overshoot at all, and bounciness of N > 1 will overshoot about N times.

[http://easings.net/#easeInElastic](http://easings.net/#easeInElastic)

**back()**

```ts
static back(s)
```

Use with `Animated.parallel()` to create a basic effect where the object animates back slightly as the animation starts.

**bounce()**

```ts
static bounce(t)
```

Provides a basic bouncing effect.

[http://easings.net/#easeInBounce](http://easings.net/#easeInBounce)

**bezier()**

```ts
static bezier(x1, y1, x2, y2)
```

Provides a cubic bezier curve, equivalent to CSS Transitions' `transition-timing-function`.

A useful tool to visualize cubic bezier curves can be found at [http://cubic-bezier.com/](http://cubic-bezier.com/)

**in()**

```ts
static in(easing);
```

Runs an easing function forwards.

**out()**

```ts
static out(easing)
```

Runs an easing function backwards.

**inOut()**

```ts
static inOut(easing)
```

Makes any easing function symmetrical. The easing function will run forwards for half of the duration, then backwards for the rest of the duration.

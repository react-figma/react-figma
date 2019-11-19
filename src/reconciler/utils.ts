/**
 * Calculates difference between given objects (typically props)
 * @return Array<string> props names where difference occurs
 */
export const shallowDiff = (oldObject: object, newObject: object): Array<string> => {
    const uniqueProps = new Set([...Object.keys(oldObject), ...Object.keys(newObject)]);
    return Array.from(uniqueProps).filter(propName => oldObject[propName] !== newObject[propName]);
};

/**
 * Creates object containing patch to transform oldProps into newProps
 */
export const propsDiff = (oldProps: object, newProps: object, updatePayload: Array<string>) => {
    const diff = {};
    let isDirty = false;

    updatePayload.forEach(propName => {
        if (propName === 'children') {
            return;
        }

        isDirty = true;
        diff[propName] = newProps[propName];
    });

    return [isDirty, diff];
};

export class ReconcilerMethodNotImplemented extends Error {}

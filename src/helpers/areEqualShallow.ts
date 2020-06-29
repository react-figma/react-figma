export const areEqualShallow = (obj1?: Object, obj2?: Object): boolean => {
    if (Object.is(obj1, obj2)) {
        return true;
    }

    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }

    return (
        Object.keys(obj1).length === Object.keys(obj2).length &&
        Object.keys(obj1).every(key => obj2.hasOwnProperty(key) && obj1[key] === obj2[key])
    );
};

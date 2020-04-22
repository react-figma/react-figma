export const cleanNode = node => {
    if (!node) {
        return;
    }
    const { children, parent, ref, innerRef, ...other } = node;
    return other;
}
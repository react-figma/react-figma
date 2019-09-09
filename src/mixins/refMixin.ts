export const refMixin = node => props => {
    if (props.ref) {
        props.ref.current = node;
    }
    if (props.innerRef) {
        props.innerRef.current = node;
    }
};

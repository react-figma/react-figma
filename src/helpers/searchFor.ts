function* walkTree(node) {
    yield node;
    let children = node.children;
    if (children) {
        for (let child of children) {
            yield* walkTree(child);
        }
    }
}

export function searchFor(
    root,
    predicat: (node: BaseNodeMixin) => boolean,
    handler: (results: Array<BaseNodeMixin>) => any
) {
    let walker = walkTree(root);

    function processOnce() {
        let results = [];
        let count = 0;
        let done = true;
        let res;
        while (!(res = walker.next()).done) {
            let node = res.value;
            if (predicat(node)) {
                results.push(node);
            }
            if (++count === 1000) {
                done = false;
                setTimeout(processOnce, 20);
                break;
            }
        }

        handler(results);
    }

    processOnce();
}

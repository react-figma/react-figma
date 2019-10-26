import { PregroupNode } from './pregroupNode';

export class GroupsProcessor {
    // Stores the order of components' grouping while traversing the components tree
    private groupsStack: PregroupNode[] = [];

    // Following properties are used to determine the group index in children list
    // Number of children collapsed into the groups for each parent node
    private groupedChildren: Map<Object, number> = new Map<Object, number>();
    // Number of groups in each parent node
    private groupsCount: Map<Object, number> = new Map<Object, number>();

    scheduleGroup(parentNode, childNode) {
        const groupedChildrenCount = this.groupedChildren.get(parentNode) || 0;
        const groupsCreatedCount = this.groupsCount.get(parentNode) || 0;

        this.groupsStack.push(childNode);

        this.groupsCount.set(parentNode, groupsCreatedCount + 1);
        this.groupedChildren.set(parentNode, groupedChildrenCount + childNode.children.length);

        childNode.order = parentNode.children.length - groupedChildrenCount + groupsCreatedCount + 1;

        childNode.children.forEach(child => {
            parentNode.appendChild(child);
        });
    }

    mountGroups() {
        // As we only can append group to real Figma node, we have to reverse the list
        // and we then we will group items top-down
        this.groupsStack.reverse().forEach(group => {
            group.figmaNode = figma.group(group.children, group.children[0].parent, group.order);

            group.didMount();
        });

        this.groupsStack = [];
    }
}

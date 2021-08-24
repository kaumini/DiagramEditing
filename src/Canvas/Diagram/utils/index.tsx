import * as diagramComponents from '../components/index';

export function getComponent(node: any) {
    const DiagramComponent = (diagramComponents as any)[node.kind];

    if (DiagramComponent) {
        return <DiagramComponent model={node} />
    }

    return <></>;
}
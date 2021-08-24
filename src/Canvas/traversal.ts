import { Visitor } from "./Visitors/base-visitor";
import { Shape, ShapeType } from "./types";

export class ShapeKindChecker {
    public static isTriangle(node: Shape) : boolean {
        return node.type === ShapeType.TRIANGLE;
    }

    public static isCircle(node: Shape) : boolean {
        return node.type === ShapeType.CIRCLE;
    }

    public static isSquareShape(node: Shape) : boolean {
        return node.type === ShapeType.SQUARE;
    } 
}

export function traverseNode(node: Shape, visitor: Visitor, parent?: Shape): void {
    let beginVisitFn = (visitor as any)[`beginVisit${node.type}`];

    if (!beginVisitFn) {
        beginVisitFn = visitor.beginVisitNode;
    }

    if (beginVisitFn) {
        beginVisitFn.bind(visitor)(node, parent);
    }

    const keys = Object.keys(node);
    keys.forEach((key) => {
        const childNode = (node as any)[key] as any;
        if (Array.isArray(childNode)) {
            childNode.forEach((child) => {
                if (!child.kind) {
                    return;
                }

                traverseNode(child, visitor, node);
            });
            return;
        }

        if (!childNode.kind) {
            return;
        }

        traverseNode(childNode, visitor, node);
    });

    let endVisitFn = (visitor as any)[`endVisit${node.type}`];
    if (!endVisitFn) {
        endVisitFn = visitor.endVisitNode;
    }

    if (endVisitFn) {
        endVisitFn.bind(visitor)(node, parent);
    }

}

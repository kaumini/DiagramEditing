import { Visitor } from "./base-visitor";
import { Shape, ShapeType, Circle, Square, Triangle } from "./types";

export class ShapeKindChecker {
    public static isTriangleShape(el: Shape) : boolean {
        return el.type === ShapeType.TRIANGLE;
    }

    public static isCircleShape(el: Shape) : boolean {
        return el.type === ShapeType.CIRCLE;
    }

    public static isSquareShape(el: Shape) : boolean {
        return el.type === ShapeType.SQUARE;
    } 
}

export function traverseNode(node: Shape, visitor: Visitor, parent?: Shape): void {
    let beginVisitFn = (visitor as any)[`beginVisit${node.kind}`];

    if (!beginVisitFn) {
        beginVisitFn = visitor.beginVisitShape;
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

    let endVisitFn = (visitor as any)[`endVisit${node.kind}`];
    if (!endVisitFn) {
        endVisitFn = visitor.endVisitShape;
    }

    if (endVisitFn) {
        endVisitFn.bind(visitor)(node, parent);
    }

}

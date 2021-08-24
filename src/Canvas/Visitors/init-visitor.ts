import { Visitor } from "./base-visitor";
import { Circle, Shape, Square, Triangle } from "../types";
import { ShapeViewState } from "../viewstates/shapeViewstate";
import { CircleViewState } from "../viewstates/circleViewstate";
import { SquareViewState } from "../viewstates/squareViewstate";
import { TriangleViewState } from "../viewstates/triangleViewstate";

export class InitVisitor implements Visitor {
    beginVisitNode(node: Shape, parent?: Shape) {
        if (!node.viewState) {
            node.viewState = new ShapeViewState();
        }
    }

    beginVisitCircle(node: Circle, parent?: Shape) {
        if (!node.viewState) {
            node.viewState = new CircleViewState();
        }
    }

    beginVisitSquare(node: Square, parent?: Shape) {
        if (!node.viewState) {
            node.viewState = new SquareViewState();
        }
    }

    beginVisitTriangle(node: Triangle, parent?: Shape) {
        if (!node.viewState) {
            node.viewState = new TriangleViewState();
        }
    }
}

export const initVisitor = new InitVisitor();
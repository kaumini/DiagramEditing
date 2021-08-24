import { Visitor } from "./base-visitor";
import { Circle, Shape, Square, Triangle } from "../types";
import { ShapeViewState } from "../viewstates/shapeViewstate";
import { CircleViewState } from "../viewstates/circleViewstate";
import { SquareViewState } from "../viewstates/squareViewstate";
import { TriangleViewState } from "../viewstates/triangleViewstate";

export const DEFAULT_DIMENSION = 100;
export const COMPONENT_HEIGHT = 25;

export class SizingVisitor implements Visitor {

    beginVisitTriangle(node: Triangle, parent?: Shape) {
        if (node.viewState) {
            const viewState: TriangleViewState = node.viewState as TriangleViewState;
            viewState.bBox.h = DEFAULT_DIMENSION;
            viewState.bBox.w = DEFAULT_DIMENSION;
        }
    }

    endVisitSquare(node: Square, parent?: Shape) {
        if (node.viewState) {
            const viewState: SquareViewState = node.viewState as SquareViewState;

            if (node.children.length > 0) {
                let height = COMPONENT_HEIGHT;

                node.children.forEach(child => {
                    const childVS: ShapeViewState = child.viewState as ShapeViewState;
                    height += childVS.bBox.h + COMPONENT_HEIGHT;
                })

                viewState.bBox.h = height;
                viewState.bBox.w = height;
            } else {
                viewState.bBox.h = DEFAULT_DIMENSION;
                viewState.bBox.w = DEFAULT_DIMENSION;
            }
        }
    }

    endVisitCircle(node: Circle, parent?: Shape) {
        if (node.viewState) {
            const viewState: CircleViewState = node.viewState as CircleViewState;

            if (node.children.length > 0) {
                let height = COMPONENT_HEIGHT;

                node.children.forEach((child: Shape) => {
                    const childVS: ShapeViewState = child.viewState as ShapeViewState;
                    height += childVS.bBox.h + COMPONENT_HEIGHT;
                });

                viewState.bBox.r = height/2;
                viewState.bBox.h = height;
                viewState.bBox.w = height;
                
            } else {
                viewState.bBox.r = DEFAULT_DIMENSION;
                viewState.bBox.h = DEFAULT_DIMENSION;
                viewState.bBox.w = DEFAULT_DIMENSION;
            }
        }
    }
}

export const sizingVisitor = new SizingVisitor();

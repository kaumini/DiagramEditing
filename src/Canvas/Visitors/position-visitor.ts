import { Visitor } from "./base-visitor";
import { Circle, Square, Shape } from "../types";
import { ShapeViewState } from "../viewstates/shapeViewstate";
import { CircleViewState } from "../viewstates/circleViewstate";
import { SquareViewState } from "../viewstates/squareViewstate";
import { COMPONENT_HEIGHT } from "./sizing-visitor";

export class PositionVisitor implements Visitor {

    beginVisitCircle(node: Circle, parent?: Shape) {
        if (node.viewState) {
            const viewState: CircleViewState = node.viewState as CircleViewState;
            viewState.bBox.cx = viewState.bBox.r;
            viewState.bBox.cy = viewState.bBox.r;
            viewState.bBox.x = 10;
            viewState.bBox.y = 20;

            let height = viewState.bBox.y + COMPONENT_HEIGHT;
            node.children.forEach((child, index) => {
                const childVS: ShapeViewState = child.viewState as ShapeViewState;

                childVS.bBox.x = viewState.bBox.r - (childVS.bBox.w / 2);
                childVS.bBox.y = height;
                height += childVS.bBox.h + COMPONENT_HEIGHT;
            })
        }
    }

    beginVisitSquare(node: Square, parent?: Shape) {
        if (node.viewState) {
            const viewState: SquareViewState = node.viewState as SquareViewState;

            let height = viewState.bBox.y + COMPONENT_HEIGHT;
            node.children.forEach((child, index) => {
                const childVS: ShapeViewState = child.viewState as ShapeViewState;

                childVS.bBox.x = viewState.bBox.x + viewState.bBox.w / 2 - childVS.bBox.w / 2;
                childVS.bBox.y = height;

                height += childVS.bBox.h + COMPONENT_HEIGHT;
            })
        }
    }
}

export const positionVisitor = new PositionVisitor();

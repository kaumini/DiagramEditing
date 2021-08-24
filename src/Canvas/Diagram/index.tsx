import { Shape, ShapeType } from "../types";
import { getComponent } from "./utils";


export class ShapeKindChecker {
    public static isTriangle(node: Shape) : boolean {
        return node.type === ShapeType.TRIANGLE;
    }

    public static isCircle(node: Shape) : boolean {
        return node.type === ShapeType.CIRCLE;
    }

    public static isSquare(node: Shape) : boolean {
        return node.type === ShapeType.SQUARE;
    } 
}

export function Diagram() {
    const { state: { model } } = useAppContext();

    const components: JSX.Element[] = [];

    let height = 0
    let width = 0;

    if (model) {
        components.push(getComponent(model));

        const viewState = (model as Shape).viewState;
        height = viewState.bBox.h;
        width = viewState.bBox.h;
    }

    return (
        <svg width={width} height={height}>
            {components}
        </svg>
    )

}
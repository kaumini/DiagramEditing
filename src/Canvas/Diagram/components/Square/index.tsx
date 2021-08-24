import { Square } from "../../../types";
import { getComponent } from "../../utils";

interface SquareProps {
    model: Square;
}

export function SquareComponent(props: SquareProps) {
    const { model } = props;
    const viewState = model.viewState;
    const components: JSX.Element[] = [];
    const rectProps = {
        x: viewState.bBox.x,
        y: viewState.bBox.y,
        width: viewState.bBox.w,
        height: viewState.bBox.h
    };

    model.children.forEach(child => {
        components.push(getComponent(child));
    })

    return (
        <>
            <rect className={"square-rect"} {...rectProps} />
            {components}
        </>
    )
}

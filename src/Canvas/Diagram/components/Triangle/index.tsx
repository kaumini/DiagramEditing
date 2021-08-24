import { Triangle } from "../../../types";
import { getComponent } from "../../utils";

interface TriangleProps {
    model: Triangle;
}

export function TriangleComponent(props: TriangleProps) {
    const { model } = props;
    const viewState = model.viewState;
    const components: JSX.Element[] = [];
    const rectProps = {
        x: viewState.bBox.x,
        y: viewState.bBox.y,
        width: viewState.bBox.w,
        height: viewState.bBox.h
    };

    return (
        <>
            <rect className={"triangle-rect"} {...rectProps} />
            {components}
        </>
    )
}

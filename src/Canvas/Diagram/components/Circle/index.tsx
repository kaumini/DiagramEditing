import { Circle } from "../../../types";
import { getComponent } from "../../utils";

interface CircleProps {
    model: Circle;
}

export function CircleComponent(props: CircleProps) {
    const { model } = props;
    const viewState = model.viewState;
    const components: JSX.Element[] = [];
    const rectProps = {
        cx: viewState.bBox.cx,
        cy: viewState.bBox.cy,
        r: viewState.bBox.r
    };

    model.children.forEach(child => {
        components.push(getComponent(child));
    })

    return (
        <>
            <rect className={"circle-rect"} {...rectProps} />
            {components}
        </>
    )
}

export interface BBox {
    x1: number;
    y1: number;
    height: number;
    width: number;
}

export interface Shape {
    name: string;
    type: string;
    visualizationData: BBox;
    Children?: []
}

export interface Triangle extends Shape {
}

export interface Square extends Shape {
    children: Triangle[];
}

export interface Circle extends Shape {
    children: Square[];
}

export enum ShapeType {
    CIRCLE = 'Circle',
    TRIANGLE = 'Triangle',
    SQUARE = 'Square',
}
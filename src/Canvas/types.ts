import { ShapeViewState } from './viewstates/shapeViewstate';

export interface Shape {
    name: string;
    type: string;
    viewState: ShapeViewState;
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
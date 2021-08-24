import { Shape, Circle, Square, Triangle } from "../types";

export interface Visitor {
  beginVisitNode?(node: Shape, parent?: Shape): void;
  endVisitNode?(node: Shape, parent?: Shape): void;

  beginVisitCircle?(node: Circle, parent?: Shape): void;
  endVisitCircle?(node: Circle, parent?: Shape): void;

  beginVisitSquare?(node: Square, parent?: Shape): void;
  endVisitSquare?(node: Square, parent?: Shape): void;

  beginVisitTriangle?(node: Triangle, parent?: Shape): void;
  endVisitTriangle?(node: Triangle, parent?: Shape): void;
}
import { mouse, up, down, left, right, Point } from '@nut-tree/nut-js';

const moveUp = async (distance: number): Promise<void> => {
  await mouse.move(up(distance));
};

const moveDown = async (distance: number): Promise<void> => {
  await mouse.move(down(distance));
};

const moveLeft = async (distance: number): Promise<void> => {
  await mouse.move(left(distance));
};

const moveRight = async (distance: number): Promise<void> => {
  await mouse.move(right(distance));
};

const getMousePosition = async (): Promise<string> => {
  const mousePosition: Point = await mouse.getPosition();
  const stringifiedAnswer = `mouse_position ${mousePosition.x}px,${mousePosition.y}px`;
  console.log(stringifiedAnswer);
  return stringifiedAnswer;
};

export { moveUp, moveDown, moveLeft, moveRight, getMousePosition };

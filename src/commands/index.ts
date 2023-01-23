import internal from 'stream';
import { createWebSocketStream, WebSocket } from 'ws';
import { moveUp, moveDown, moveLeft, moveRight, getMousePosition } from './moveMouse';

const handleCommands = (ws: WebSocket): void => {
  const stream: internal.Duplex = createWebSocketStream(ws, {
    encoding: 'utf-8',
    decodeStrings: false,
  });

  stream.on('data', async (data: Buffer): Promise<void> => {
    const dataInfo: string[] = data.toString().split(' ');
    console.log(`Command: ${data.toString()}`);

    switch (dataInfo[0]) {
      case 'mouse_up':
        await moveUp(+dataInfo[1]);
        stream.write(dataInfo[0]);
        break;
      case 'mouse_down':
        await moveDown(+dataInfo[1]);
        stream.write(dataInfo[0]);
        break;
      case 'mouse_left':
        await moveLeft(+dataInfo[1]);
        stream.write(dataInfo[0]);
        break;
      case 'mouse_right':
        await moveRight(+dataInfo[1]);
        stream.write(dataInfo[0]);
        break;
      case 'mouse_position':
        stream.write(await getMousePosition());
        break;
      default:
        stream.write('! Such command does not exist');
    }
  });
};

export default handleCommands;

import { WebSocketServer } from 'ws';
import handleCommands from '../commands';

const handleWsServer = (port: number): void => {
  const wsServer: WebSocketServer = new WebSocketServer({ port });

  wsServer.on('listening', (): void => {
    console.log(`Started WebSocket server on the ${port} port!`);
  });

  wsServer.on('connection', handleCommands);

  process.on('SIGINT', (): void => {
    console.log(`WebSocket server on the ${port} port is being closed..`);
    wsServer.close();
  });
};

export default handleWsServer;

import express from 'express';
import { createServer} from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

const SERVER_PORT = 3000;

app.use(express.static('src/public'));

httpServer.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`);
});

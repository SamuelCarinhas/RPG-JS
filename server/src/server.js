import { createServer} from 'http';
import { Server } from 'socket.io';

const SERVER_PORT = 4001;
const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: '*'
    }
});

io.on('connection', (socket) => {
    console.log(`New player connected [${socket.id}]`);

    socket.on('disconnect', () => {
        console.log(`Player disconnected [${socket.id}]`);
    });
});

io.on("connect_error", (e) => {
    console.log(e);
});

httpServer.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`);
});

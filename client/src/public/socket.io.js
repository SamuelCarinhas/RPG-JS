const socket = io('ws://localhost:4001');

socket.on('connect', () => {
    console.log('Connected!');
});
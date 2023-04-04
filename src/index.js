import express from 'express';
import { Socket, Server as WebSocketServer } from 'socket.io'
import http from 'http';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const httpServer = http.createServer(app)
const io = new WebSocketServer(httpServer)

app.use(express.static(__dirname + '/public'));

const notes = []

io.on('connection', (socket) => {
    console.log('new connection', socket.id);
    socket.emit('server:loadnotes', notes)

    socket.on('client:newnote', (newNote) => {
        const note = { ...newNote, id: uuidv4() }


        notes.push({
            ...newNote,
            id: uuidv4()
        })

        socket.emit('server:newnote', note)

    })


})



const port = 3002
httpServer.listen(port)
console.log(`Server is running on http://localhost:${port}`);


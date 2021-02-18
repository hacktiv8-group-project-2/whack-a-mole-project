const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST'],
    credentials: true
  },
  allowEIO3: true
});

const Room = require('./room');

let room = new Room();

io.on('connection', (socket) => {
  console.log('a user is connected!');
  room.addList({ name: room.list.length + 1 })
  socket.on('newUser', (user) => {
    console.log('event dari client =>', user)
    // users.push(user);
    io.local.emit('serverUser', users)
  })

  // event start room


  socket.on('endRoom', (roomIndex) => {
    room.removeList(roomIndex);
  })

  // event random mole
})

http.listen(3000, () => {
  console.log('Server started!');
})
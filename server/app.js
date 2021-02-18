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

let users = [];

io.on('connection', (socket) => {
  console.log('a user is connected!');
  socket.on('newUser', (user) => {
    console.log('event dari client =>', user)
    users.push(user);
    io.local.emit('serverUser', users)
  })
})

http.listen(3000, () => {
  console.log('Server started!');
})
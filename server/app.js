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
    let userData = {
      name: user,
      id: socket.id,
      score: 0
    }
    users.push(userData);
    io.local.emit('serverUser', users)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
    for(let i=0 ; i<users.length ; i++){
      if(users[i].id === socket.id){
        users.splice(i,1)
        break
      }
    }
    io.local.emit('serverUser', users)
  })
})

http.listen(3000, () => {
  console.log('Server started!');
})
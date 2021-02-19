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
let { randomizeBoard, clearBoard, board } = require('./game/game')
let newBoard = []
let time = 0
let timer

function gameStart () {
  board = randomizeBoard(board)
  io.emit('updateBoard', board)
  let timer2 = setInterval(() => {
    console.log('reset ke -', time)
    time++
    board = randomizeBoard(board)
    io.emit('updateBoard', board)
    if (time == 10) {
      clearInterval(timer2)
      board = clearBoard(board)
      io.emit('updateBoard', board)
    }
  }, 2000)
}

let users = [];

io.on('connection', (socket) => {
  console.log('a user is connected!');
  socket.emit('updateBoard', board)

  socket.on('randomize', () => {
    board = randomizeBoard(board)
    io.emit('updateBoard', board)
  })

  socket.on('whack', (payload) => {
    board = payload
    io.emit('updateBoard', board)
  })

  socket.on('gameStart', () => {
    time = 0
    let timer1 = setInterval(() => {
      time++
      console.log('count down', time)
      if (time == 2) {
        clearInterval(timer1)
        time = 0
        gameStart()
      }
    }, 1000)
  })

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
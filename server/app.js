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
let { randomizeBoard, clearBoard, board: defaultBoard } = require('./game/game')
let newBoard = []
let time = 0
let timer

// function gameStart () {
//   board = randomizeBoard(board)
//   io.emit('updateBoard', board)
//   timer = setInterval(() => {
//     time++
//     board = randomizeBoard(board)
//     io.emit('updateBoard', board)
//     console.log(board)
//     if (time == 10) {
//       clearInterval(timer)
//       board = clearBoard(board)
//       io.emit('updateBoard', board)
//     }
//   }, 2000)
// }

let users = [];

io.on('connection', (socket) => {
  console.log('a user is connected!');
  // socket.emit('updateBoard', board)

  socket.on('randomize', () => {
    io.emit('updateBoard', randomizeBoard(defaultBoard))
  })

  socket.on('endGame', () => {
    io.emit('clearBoard', clearBoard(defaultBoard))
  })

  socket.on('whack', (payload) => {
    board = payload
    io.emit('updateBoard', board)
  })

  socket.on('gameStart', () => {
    io.emit('updateBoard', defaultBoard)
    setTimeout(() => {
      io.emit('updateBoard', randomizeBoard(defaultBoard));
    }, 3000)
  })

  socket.on('newUser', (user) => {
    console.log('event dari client =>', user)
    users.push(user);
    io.local.emit('serverUser', users)
  })
})

http.listen(3000, () => {
  console.log('Server started!');
})
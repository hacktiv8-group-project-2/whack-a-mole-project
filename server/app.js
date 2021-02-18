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
  timer = setInterval(() => {
    time++
    board = randomizeBoard(board)
    io.emit('updateBoard', board)
    if (time == 10) {
      clearInterval(timer)
      board = clearBoard(board)
      io.emit('updateBoard', board)
    }
  }, 2000)
}

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
    timer = setInterval(() => {
      time++
      if (time == 3) {
        clearInterval(timer)
        time = 0
        gameStart()
      }
    }, 1000)
  })
})

http.listen(3000, () => {
  console.log('Server started!');
})
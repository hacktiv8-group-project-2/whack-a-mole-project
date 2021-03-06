const app = require('express')();
app.get('/', (req, res) => {
  res.send('Whack a mole project')
})
const PORT = process.env.PORT || 3000;
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:8080',
    // origin: 'https://whack-a-mole-hacktiv8.web.app',
    methods: ['GET', 'POST'],
    credentials: true
  },
  allowEIO3: true
});
let { randomizeBoard, clearBoard, board } = require('./game/game')
let newBoard = []
let users = []
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

function updateScore (payload) {
  users.forEach(user => {
    if (user.id == payload.id) {
      user.score = payload.score
    }
  })
}

io.on('connection', (socket) => {
  console.log('a user is connected!');
  socket.emit('updateBoard', board)

  socket.on('updateScore', (payload) => {
    updateScore(payload)
    io.emit('serverUser', users)
  })

  socket.on('whack', (payload) => {
    console.log('whack')
    console.log(payload)
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
    socket.emit('userData', userData)
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

http.listen(PORT, () => {
  console.log('Server started!');
})
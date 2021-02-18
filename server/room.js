class Room {
  constructor() {
    this.list = []; // { name: String(roomIndex), player1: String(name), player2: String(name) }
  }

  addList(value) {
    this.list.push(value);
  }

  removeList(index) {
    this.list = this.list.filter(room => room.name !== index);
  }

  getRoomByIndex(index) {
    return this.list.find(room => room.name === index);
  }
}

module.exports = Room;
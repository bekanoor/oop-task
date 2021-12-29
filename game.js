const readlineSync = require('readline-sync')

class ConsoleWorker {
  constructor (readline) {
    this.readline = readline
  }

  readUserNumber () {
    return this.readline.question('Insert the number ')
  }

  write (text) {
    console.log(text)
  }
}

class RandomNumberGenerator {
  generate () {
    return Math.floor(Math.random() * 10) + 1
  }
}

class Informer {
  getInfo () {
    console.log(
      'Hello, in the game the computer generated number and you must guess the number. You have 4 lives. Good luck. \n'
    )
  }
}

class Game {
  constructor (cl, rg, info) {
    this.cl = cl
    this.rg = rg
    this.info = info
  }

  play () {
    const guess = rg.generate()
    let lives = 4

    info.getInfo()

    for (let index = 0; index < 4; index++) {
      const userNumber = parseInt(cl.readUserNumber())

      if (guess === userNumber) {
        cl.write(' You win! ')
        return
      } else if (guess < userNumber) {
        cl.write('Too high')
        lives--
        cl.write(`You have ${lives} lives`)
      } else if (guess > userNumber) {
        cl.write('Too low')
        lives--
        cl.write(`You have ${lives} lives`)
      }
    }

    cl.write('You lost. You can try again :)')
  }
}

const cl = new ConsoleWorker(readlineSync)
const rg = new RandomNumberGenerator()
const info = new Informer()
const g = new Game(cl, rg, info)

g.play()

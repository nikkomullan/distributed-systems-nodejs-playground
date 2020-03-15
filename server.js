const port = parseInt(process.argv[2], 10)
const Primus = require('primus')
const Democracy = require('democracy')

const color = getColor(port)
const primus = Primus.createServer({
  port,
  transformer: 'websockets',
  iknowhttpsisbetter: true
})
const democracy = new Democracy({
  source: `0.0.0.0:${port}`,
  peers: [`0.0.0.0:3001`, `0.0.0.0:3002`, `0.0.0.0:3003`, `0.0.0.0:3004`]
})

democracy.subscribe('global')
democracy.on('global', msg => {
  primus.write(msg)
})

primus.on('connection', ws => {
  console.log('CONNECTED', port)
  ws.on('data', msg => {
    msg.color = color
    primus.write(msg)
    democracy.publish('global', msg)
  })
})

function getColor(port) {
  switch (port) {
    case 3001:
      return 'blue'
    case 3002:
      return 'red'
    case 3003:
      return 'green'
    case 3004:
      return 'purple'
    default:
      return 'yellow'
  }
}

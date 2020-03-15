const Primus = require('primus')
const Democracy = require('democracy')

const ports = [3001, 3002, 3003, 3004]
const servers = {}

for (let port of ports) {
  const key = port.toString()
  const color = getColor(port)
  const primus = createPrimus(port)
  const democracy = createDemocracy(port)
  servers[key] = { color, primus, democracy }

  servers[key].democracy.subscribe('global')
  servers[key].democracy.on('global', msg => {
    servers[key].primus.write(msg)
  })

  servers[key].primus.on('connection', ws => {
    console.log('CONNECTED', port)
    ws.on('data', msg => {
      msg.color = servers[key].color
      servers[key].primus.write(msg)
      servers[key].democracy.publish('global', msg)
    })
  })
}

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

function createPrimus(port) {
  return Primus.createServer({
    port,
    transformer: 'websockets',
    iknowhttpsisbetter: true
  })
}

function createDemocracy(port) {
  return new Democracy({
    source: `0.0.0.0:${port}`,
    peers: ports.map(port => `0.0.0.0:${port}`)
  })
}

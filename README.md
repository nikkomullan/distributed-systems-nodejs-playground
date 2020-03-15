# Distributed Systems with Node JS Playground

Playground created to understand better the concepts behind [Primus](https://github.com/primus/primus#readme) and [Democracy.js](https://github.com/goldfire/democracy.js#readme).

## Notes

- This playground is based on a demo presented in the Nordic.js 2019 by James Simpson.
- [Repository with original project](https://github.com/goldfire/Building-Distributed-Systems-Node.js)
- [Nordic.js 2019 • James Simpson - Building Distributed Systems with Node.js](https://www.youtube.com/watch?v=GUtd-zEDgjQ&list=PLGP3VO5jDf8x0gh5H7dZ41F0nVDlwDMuy)

## Requirements

- Development server to run the client. I use the Visual Studio Code extension [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

## Use

- Install the dependencies via `yarn install` or `npm install`.
- `yarn start` to run the Load Balancer and the 4 servers.
- Lunch the index.html using a development local server.
- Open 2 or more clients in the browser and start clicking on each screen to see the events in the other screens.

## Architecture

![Architecture](Architecture.png 'Architecture')

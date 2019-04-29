const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(process.argv[2] || 'db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running: http://0.0.0.0:3000')
})
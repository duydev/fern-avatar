import http from 'http'
import chalk from 'chalk'

import app from 'app'

const PORT = process.env.PORT || 4000

const server = http.createServer(app)
server.listen(PORT, '127.0.0.1')

server.on('listening', () => {
  const port = server.address().port
  console.log(
    chalk.blue(
      `🖥 🌍 Server listening on 'http://${
        server.address().address
      }:${port}' with env '${process.env.NODE_ENV}'.`
    )
  )
})

server.on('error', err => {
  if (err.syscall !== 'listen') throw err
  switch (err.code) {
    case 'EACCES':
      console.error(chalk.red(`Port '${PORT}' requires elevated privileges.`))
      return process.exit(1)
    case 'EADDRINUSE':
      console.error(chalk.red(`Port '${PORT}' is already in use.`))
      return process.exit(1)
    default:
      throw err
  }
})

process.on('uncaughtException', err =>
  console.error(chalk.red(`Uncaught Error: ${err.stack}`))
)

process.on('unhandledRejection', err =>
  console.error(chalk.red(`Unhandled Rejection Error: ${err.stack}`))
)

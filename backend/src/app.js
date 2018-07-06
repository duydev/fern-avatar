import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import morgan from 'morgan'

const app = express()
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use((err, req, res) => {
  const httpCode = err.httpCode || 500
  res.status(httpCode).json({
    error: err.message
  })
})

export default app

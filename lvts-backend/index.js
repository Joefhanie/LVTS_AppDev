require('dotenv').config()
const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

// MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  multipleStatements: true,
})

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack)
    return
  }
  console.log('Connected to MySQL database.')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, '0.0.0.0', function () {
  console.log(`✅ Server running on port ${PORT}`)
})

// Sample API Route
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.status(500).send(err)
    }
    res.json(results)
  })
})

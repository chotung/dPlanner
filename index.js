const { response } = require('express')
const express = require('express')
const helmet = require('helmet')
require('dotenv')

const port = process.env.PORT || 5000
const app = express()

app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('homepage')
})


app.get('/date', (req, res) => {
  res.send('date') 
})

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`))


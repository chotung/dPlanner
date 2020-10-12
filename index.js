const { response } = require('express')
const express = require('express')
const helmet = require('helmet')
const mongoose = require('mongoose')
require('dotenv').config()

const port = process.env.PORT || 5000
const app = express()

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false 
}

mongoose.connect(process.env.DB_URL, options);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("connected to database")
});


app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/user', require('./routes/users'))
app.use('/api/date', require('./routes/dates'))

app.get('/', (req, res) => {
  res.send('homepage')
})

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`))


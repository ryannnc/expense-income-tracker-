const express = require('express');
const cors = require('cors');
const { db } = require('./DB/db');
const {readdirSync} = require('fs');
const { route } = require('./routes/transaction');
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

app.use(express.json())

//which host you want the server to be accessed by {cors}
app.use(cors())
//routes

readdirSync('./routes').map((route) => app.use('/api/v1',require('./routes/' + route)))

app.get('/',(req, res) => {
    res.send('Hello World')
})

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server ()
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
const port = 3333
const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)


mongoose.connect('mongodb+srv://anderson_costa:admin@cluster0-0ygvz.mongodb.net/test?retryWrites=true&w=majority',
{useUnifiedTopology: true,
    useNewUrlParser: true})

app.listen(port, () => console.log('executando.....'))
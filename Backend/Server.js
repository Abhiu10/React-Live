const App = require('./App')
const Mongoose = require('mongoose')
const dotenev = require('dotenv')
//configuring dotenv
dotenev.config({
    path: './config.env'
})

const port = process.env.port
const db = process.env.Db.replace('<password>',process.env.PASSWORD)

Mongoose.connect(db,{  // HAVE TO STUDY
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(con => {
    console.log('Connected Successfully To DataBase')
})

App.listen(port , () => {
    console.log(`listening to port ${port}`)
})


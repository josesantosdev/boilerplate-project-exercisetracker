const express = require('express')
const app = express()
const cors = require('cors')
const mongoose  = require('mongoose');
const apiRoutes = require('./src/routes/api');
const loggerMiddleware = require('./src/middlewares/logger.middleware');
require('dotenv').config()

app.use(cors())
app.use('/', apiRoutes)
app.use(loggerMiddleware);
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

uri = process.env.DATABASE_URI;

//Database Conection
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});




const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})

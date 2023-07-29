require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 5000;
const connectDb = require('./server/config/db')
app.use(express.static('public'))
app.use(expressLayout)
connectDb()
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');
app.use('/', require('./server/routes/main'))
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
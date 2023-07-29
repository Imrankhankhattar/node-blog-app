require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.static('public'))
app.use(expressLayout)
app.set('layout', './layout/main');
app.set('view engine', 'ejs');
app.use('/', require('./server/routes/main'))
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
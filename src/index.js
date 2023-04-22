const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

// initializations
const app = express();


// settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
}))
// middlewares
app.use(morgan('dev'));


// global variables

// routes
app.use(require('./routes/'));

// public


// starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
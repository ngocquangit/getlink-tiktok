const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const userRouter = require('./routers/download.router');

app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) =>
  res.render('index', {
    link: '',
  }),
);

app.use('/download', userRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

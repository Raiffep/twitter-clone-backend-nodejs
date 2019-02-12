const express = require('express');
const mongoose = require('mongoose');
const app = express();
const server = require ('http').Server(app);
const io = require('socket.io')(server);
const cors = require('cors');

mongoose.connect("mongodb://raiffe:1raiffe2@ds141043.mlab.com:41043/goweekraiffe", {
    useNewUrlParser: true
});

app.use(cors());
app.use((req, res, next) => {
    req.io = io;
    return next();
});
app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
    console.log('Server started on port 3000');
});
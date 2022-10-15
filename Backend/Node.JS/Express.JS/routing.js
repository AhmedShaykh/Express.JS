const express = require('express');
const app = express();

const router1 = express.Router();
const router2 = express.Router();
const router3 = express.Router();

router1.get('/', (req, res) => res.send('API is Live!'));
router1.get('/user', (req, res) => res.send('/User Calling'));
router1.get('/group', (req, res) => res.send('/Group Calling'));
router1.get('/post', (req, res) => res.send('/Post Calling'));

router2.get('/:username', (req, res) => res.send(req.params));

router3.get('/', (req, res) => res.send('API is Live Updated ......!'))

app.use('/apiV1', router1);
app.use('/usersApi', router2);
app.use('/apiV2', router3);

app.get('/', function (req, res) {
    res.send('Express.JS Work!');
});

app.listen(4000, function () {
    console.log(`Express Server Started on: http://localhost:4000`);
});
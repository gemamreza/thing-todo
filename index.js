const express = require('express');
const app = express();
const port = 9090;
const axios = require('axios');
const { activityRouter } = require('./router');

app.get(`/`, (req, res) => {
  res.send('Welcome to Bored Api Project');
});

app.use('/activity', activityRouter);

app.listen(port, () => {
  console.log(`Bored Running on ${port}`);
});

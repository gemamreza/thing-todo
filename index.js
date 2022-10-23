const express = require('express');
const app = express();
const port = 9090;
const axios = require('axios');

app.get(`/`, (req, res) => {
  res.send('Welcome to Bored Api Project');
});

app.get('/activity', (req, res) => {
  axios({
    url: 'http://www.boredapi.com/api/activity/',
    method: 'get'
  })
  .then(response => {
    res.send(response.data.activity)
    console.log(response.data);
  })
  .catch((err) => {
    console.log(err)
  });
});

app.listen(port, () => {
  console.log(`Bored Running on ${port}`);
});

const axios = require('axios');

module.exports = {
  activityList: (req, res) => {
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
  }
}
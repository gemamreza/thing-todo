const router = require('express').Router();
const { activityController } = require('./../controller');

router.get('/activity', activityController.activityList);

module.exports = router;

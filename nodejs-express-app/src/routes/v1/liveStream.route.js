const express = require('express');
const {liveStreamController} = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .post(liveStreamController.createLiveStream)
  .get(liveStreamController.getLiveStream);

module.exports = router;

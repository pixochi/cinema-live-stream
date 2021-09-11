const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { liveStreamService } = require('../services');

const createLiveStream = catchAsync(async (req, res) => {
  const liveStream = await liveStreamService.createLiveStream(req.body);
  res.status(httpStatus.CREATED).send(liveStream);
});

const getLiveStream = catchAsync(async (req, res) => {
  const liveStream = await liveStreamService.getLiveStream();
  if (!liveStream) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Live stream not found');
  }
  res.send(liveStream);
});

module.exports = {
  createLiveStream,
  getLiveStream,
};

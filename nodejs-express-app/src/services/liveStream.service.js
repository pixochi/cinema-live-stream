const { LiveStream } = require('../models');

/**
 * Create a live stream
 * @param {Object} liveStreamBody
 * @returns {Promise<LiveStream>}
 */
const createLiveStream = async (liveStreamBody) => {
  return LiveStream.create(liveStreamBody);
};

/**
 * Get the latest live stream
 * @returns {Promise<LiveStream>}
 */
const getLiveStream = async () => {
  return LiveStream.findOne({}, {}, { sort: { createdAt: -1 } });
};

module.exports = {
  createLiveStream,
  getLiveStream,
};

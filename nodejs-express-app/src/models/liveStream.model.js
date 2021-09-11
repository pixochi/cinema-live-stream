const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const liveStreamSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
      trim: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
liveStreamSchema.plugin(toJSON);

/**
 * @typedef LiveStream
 */
const LiveStream = mongoose.model('LiveStream', liveStreamSchema);

module.exports = LiveStream;

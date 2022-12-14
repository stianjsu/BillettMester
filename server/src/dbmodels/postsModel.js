const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, "No userId set"],
    },
    userName: {
      type: String,
      required: [true, "No username set"],
    },
    eventName: {
      type: String,
      required: [true, "No eventName set"],
    },
    eventType: {
      type: String,
      required: [true, "No eventType set"],
    },
    eventDate: {
      type: Date,
      required: [true, "No event date set"],
    },
    isSalesPost: {
      type: Boolean,
      required: [true, "isSalesPost bool not set"],
    },
    price: {
      type: Number,
      required: false,
    },
    price2: {
      type: Number,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    isSold: {
      type: Boolean,
      required: [true, "isSold bool not set"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Posts", postSchema);

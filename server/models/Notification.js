const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    message: { type: String, required: true },
    type: {
      type: String,
      enum: [
        "order_placed",
        "packed",
        "shipped",
        "delivered",
        "cancelled",
        "price_drop",
        "low_stock",
      ],
      required: true,
    },
    read: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
  },
  { indexes: [{ key: { userId: 1 } }] }
);

module.exports = mongoose.model("Notification", notificationSchema);

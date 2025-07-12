const mongoose = require("mongoose");

const orderLogSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    status: {
      type: String,
      enum: [
        "pending",
        "packed",
        "handed_to_agent",
        "shipped",
        "delivered",
        "cancelled",
      ],
      required: true,
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    updatedAt: { type: Date, default: Date.now },
  },
  { indexes: [{ key: { orderId: 1 } }] }
);

module.exports = mongoose.model("OrderLog", orderLogSchema);

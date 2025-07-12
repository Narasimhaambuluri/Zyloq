const mongoose = require("mongoose");

const priceLogSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    oldPrice: { type: Number },
    newPrice: { type: Number, required: true, min: 0 },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    updatedAt: { type: Date, default: Date.now },
  },
  { indexes: [{ key: { productId: 1 } }] }
);

module.exports = mongoose.model("PriceLog", priceLogSchema);

const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isActive: { type: Boolean, default: true },
    addedAt: { type: Date, default: Date.now },
  },
  { indexes: [{ key: { userId: 1 } }, { key: { productId: 1 } }] }
);

module.exports = mongoose.model("Wishlist", wishlistSchema);

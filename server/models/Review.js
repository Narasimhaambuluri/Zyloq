const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rating: { type: Number, required: true, min: 1, max: 5 },
    experience: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { indexes: [{ key: { product_id: 1 } }, { key: { userId: 1 } }] }
);

// Update updatedAt on save
reviewSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Review", reviewSchema);

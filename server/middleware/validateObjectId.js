import mongoose from "mongoose";

export const validateObjectId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.body.id))
    return res.status(404).send("Invalid ID.");

  next();
};

import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    //if user is not logged in
    if (!token)
      return res
        .status(401)
        .json({ msg: "Authorization denied, You must login first!" });
    //if user is actually logged in
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified)
      return res.status(401).json({ msg: "Authorization denied!" });
    req.user = verified.id;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//module.exports = auth;

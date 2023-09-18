exports.getApi = (req, res, next) => {
  res.status(200).json({ message: "Welcome To Safu API V1" });
};

const mongoos = require("mongoose");

const Schema = mongoos.Schema;

const userSchema = new Schema({
  ip: {
    type: String,
    require: true,
  },
  deviceDetails: {
    type: Object,
    unique: false,
    required: true,
  },
  query: [
    {
      type: Object,
      unique: false,
    },
  ],
});

userSchema.methods.addQuery = function (userData) {
  const date = new Date();
  let ISToffSet = 330;
  let offset = ISToffSet * 60 * 1000;
  let ISTTime = new Date(date.getTime() + offset);
  const updatedQuery = [...this.query];
  updatedQuery.push({ ...userData, dateIST: ISTTime });
  this.query = updatedQuery;
  return this.save();
};

module.exports = mongoos.model("User", userSchema);

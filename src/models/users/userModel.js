import User from "./userSchema.js";

export const createUser = (userObj) => {
  return User.insertOne(userObj);
};

export const getUserByEmail = ({ email }) => {
  return User.findOne({ email });
};

export const updateUser = async (filter, updateObj) => {
  return await User.findOneAndUpdate(filter, updateObj, { new: true });
};

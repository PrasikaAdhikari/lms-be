import User from "./userSchema.js";

export const createUser = (userObj) => {
  return User.insertOne(userObj);
};

export const getUserByEmail = (id) => {
  return User.findByOne({ email });
};

export const updateUser = async (filter, object) => {
  return await User.findOneAndUpdate(filter, updateObj, { new: true });
};

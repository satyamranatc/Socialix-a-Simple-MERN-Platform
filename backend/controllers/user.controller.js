import userModel from "../models/user.model.js";

export async function getUsers(req, res) {
  let users = await userModel.find();
  return res.json(users);
}


export async function getUserById(req, res) {
  let { uid } = req.params;
  let user = await userModel.findById(uid);
  return res.json(user);
}

export async function registerUser(req, res) {
  let newUser = req.body;

  try {
    await userModel.create(newUser);
  } catch (e) {
    return res.json({ err: e });
  }

  return res.json({ msg: "User Created Successfully!" });
}



export async function loginUser(req,res) 
{
  let {email} = req.body;
  let user = await userModel.findOne({email});
  return res.json(user);
}


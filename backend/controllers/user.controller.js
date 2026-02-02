import userModel from "../models/user.model";


export async function getUserById()
{
    let {uid} = req.params;
    let user = await userModel.findById(uid);
    return res.json(user);
}


export async function registerUser(req,res)
{
    let newUser = req.body;

   try
   {
     await userModel.create(newUser);
   }
   catch(e)
   {
    return res.json({err:e})
   }

    return res.json({msg:"User Created Successfully!"})

}
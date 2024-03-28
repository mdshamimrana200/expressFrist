const { v4 } = require("uuid");
const userSchema = require("../model/usersStructure");
const { boolean } = require("webidl-conversions");

const getUser = async (req, res) => {
  try {
    const allUsers = await userSchema.find();
    res.status(200).send(allUsers);
  } catch (error) {
    console.log(error);
  }
};
const getOneUser = async (req, res) => {
  try {
    const oneUser = await userSchema.findOne({ id: req.params.id });
    if(oneUser){
        res.status(200).send(oneUser);
    }else{
        res.status(404).send("id is not found");
        
    }
  } catch (error) {
    console.log(error);
  }
};
const getOneUserName = async (req, res) => {
  try {
    const oneUser = await userSchema.findOne({ name: req.params.name });
    if(oneUser){
        res.status(200).send(oneUser);
    }else{
        res.status(404).send("name is not found");
        
    }
  } catch (error) {
    console.log(error);
  }
};
const postUser = async (req, res) => {  
  try {
    const { name, email, contactNo } = req.body;
    const newUser = new userSchema({
      name,
      email,
      phonNumber: Number(contactNo), 
    });
    await newUser.save();
    res.status(201).send(newUser + "create user");
  } catch (error) {
    console.log(error);
  }
};
const putUser =async (req, res) => {
    try {
        const {name, email,contactNo} = req.body
        const id = req.params.id;
        const udpateUser =await userSchema.findOne({id:id})
        udpateUser.name = name
        udpateUser.email = email
        udpateUser.phonNumber = contactNo
        await udpateUser.save();
        res.status(200).send(udpateUser)
      } catch (error) {
        console.log(error);
      }
};
const deleteUser =async (req, res) => {
  try {
    const id = req.params.id;
    const deleteUser =await userSchema.deleteOne({id:id})
    res.status(200).send(deleteUser)
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getUser, postUser, putUser, deleteUser, getOneUser, getOneUserName };

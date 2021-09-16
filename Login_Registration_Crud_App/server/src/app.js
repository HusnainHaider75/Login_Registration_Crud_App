const express = require('express');
const cors = require("cors");
const app = express();
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 4000;
const bodyparser = require("body-parser");
app.use(bodyparser());
app.use(cors()); require("./DB/con");
const DataModel = require("./Model/model");


//Register User Validation and Autentication

app.post('/register', async (req, res) => {

  const { fname, lname, email, password } = req.body;
  const obj = new DataModel({ fname, lname, email, password });
  const register = await obj.save();
  try{
    register ? res.send(`Registered Successfully`): res.send("Invalid Iputs!");
  }
  catch(err){
      res.send(err);
  }
   

})

//Login User Authentication

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const userExist = await DataModel.findOne({ email, password })
  try {
    userExist ? res.send(true) : res.send(false)
  }
  catch {
    res.send(err);
  }
})


//Update Specific User Data

app.put(`/update/:id`, async (req, res) => {
  const usersExist = await DataModel.findByIdAndUpdate({ _id: req.params.id }, {
    $set: {
      fname: req.body.fname, lname: req.body.lname, email: req.body.email, password: req.body.password
    }
  })
  .then(res.send(true))
  .catch(res.send(false));

})


//Load One User info by ID

app.get(`/load/:id`, async (req, res) => {
  const userExist = await DataModel.findById({ _id: req.params.id });
  try {
    userExist ? res.send(userExist) : res.send(false)
  }
  catch {
    res.send(err);
  }

})


//Delete Specific User

app.delete(`/delete/:id`, async (req, res) => {
  const userDelete = await DataModel.remove({ _id: req.params.id });
  try { 
    userDelete ? res.send(true) : res.send(false) 
  }
  catch {
    res.send(err);
  }
})

//Show All User on Dashboard

app.get('/dashboard', async (req, res) => {
  const usersExist = await DataModel.find();
  try {
    usersExist ? res.send(usersExist) : res.send(false)
  }
  catch {
    res.send(err);
  }
})


//Pagination of User
app.get(`/users/:page`, async (req, res) => {
  const size=5;
  const page= req.params.page;
    const limit = parseInt(size);
    const skip = (page-1)*size;

  const usersExist = await DataModel.find().limit(limit).skip(skip);
  try {

    usersExist ? res.send(usersExist) : res.send(false)
  }
  catch {
    res.send(err);
  }
})





//Listen from Server
app.listen(port, console.log('Server is Running at port-4000'));
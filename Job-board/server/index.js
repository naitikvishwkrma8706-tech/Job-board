const express = require("express");
const mongoose = require("mongoose");
const Job = require("./models/Job");
const cors = require("cors")
const User=
require("./models/User")

const app = express();

app.use(cors())
app.use(express.json())

console.log("INDEX LOADED");

app.get("/", (req, res) => {
  res.send("HOME WORKING");
});

app.get("/jobs", (req, res) => {
  res.json([
    {
      title: "Frontend Developer",
      location: "Remote",
    },

    {
      title: "Backend Developer",
      location: "Indore",
    },

    {
      title: "UI Designer",
      location: "Bhopal",
    },
  ]);
});

mongoose
  .connect("mongodb://127.0.0.1:27017/jobboard")

  .then(() => {
    console.log("MongoDB Connected");
  })

  .catch(() => {
    console.log("Connection Failed");
  });


  app.use(express.json())

app.post("/login",(req,res)=>{

const {email,password}=req.body

if(!email || !password){

return res.status(401).json({
message:"Fill all fields"
})

}

return res.json({
message:"Login Success"
})

})
app.post("/apply",(req,res)=>{

console.log(req.body)

res.json({
message:"Application Submitted"
})

})

app.post("/post-job",(req,res)=>{

console.log(req.body)

res.json({
message:"Job Posted Successfully"
})

})

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

app.post(
"/register",
async(req,res)=>{

const user=
new User(req.body)

await user.save()

res.json({
message:
"Registered"
})

})
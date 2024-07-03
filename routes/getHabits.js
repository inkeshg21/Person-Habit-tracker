const router = require("express").Router();           // Import expres router
const User = require("../models/User");               // Import Uer model aka get access to User Collection
const verify = require("./verifyToken");              // Import Verify Middleware to verify JWT
const resetHabits = require("./reset");               // Import resetHabits Middleware
var mongoose = require("mongoose");


router.post("/getHabits", verify, resetHabits, async (req, res) => {


    try {
      // find the user and return all their habits
      const user = await User.findOne({ _id: req.user });
      res.json(user.habits);
     

    } catch (err) {
      res.send(err).status(400);
    }
  
});

module.exports = router;
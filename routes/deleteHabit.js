const router = require("express").Router();           // Import expres router
const User = require("../models/User");               // Import Uer model aka get access to User Collection
const verify = require("./verifyToken");              // Import Verify Middleware to verify JWT
const ObjectID = require('mongodb').ObjectID;         // Import MongoDB Object ID

const { deleteValid } = require("../validation");     // Import the validation function

/*
This API deletes a Habit from the User's habits array
based on the habit
 */
router.post("/deleteHabit", verify, async (req, res) => {

  // deleteValid validates the request body and returns an error if there is one
  const error = deleteValid(req.body);

  if (error == undefined) {
    try {
      // Delete the habit from the database based on the habit ID
      await User.updateOne(
        { _id: req.user },
        { $pull: { habits: { _id: ObjectID(req.body._id) } } }
      );
      const user = await User.findOne({ _id: req.user });

      res.json(user.habits);
    } catch (err) {
      res.send(err).status(400);
    }
  } else {
    res.send(error.details[0].message).status(400);
  }
});

module.exports = router;

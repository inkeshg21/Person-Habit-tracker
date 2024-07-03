const router = require("express").Router(); // Import expres router
const User = require("../models/User"); // Import Uer model aka get access to User Collection
const verify = require("./verifyToken"); // Import Verify Middleware to verify JWT
const ObjectID = require("mongodb").ObjectID; // Import MongoDB Object ID
const { addCheckin, undoCheckin } = require("../models/updateCheckin");

const { editValid } = require("../validation"); // Import the validation function

/*
This API deletes a Habit from the User's habits array
based on the habit
 */
router.post("/editHabit", verify, async (req, res) => {
  // editValid validates the request body and returns an error if there is one
  const error = editValid(req.body);

  if (error == undefined) {
    const newDesc = req.body.Description;
    const newColor = req.body.Color;
    const newTimesPer = req.body.TimesPer;
    const newOccur = req.body.Occurrence;

    // update the Active property based on the edited habbit occurrence
    const weekday = {
      0: "Sun",
      1: "Mon",
      2: "Tues",
      3: "Wed",
      4: "Thurs",
      5: "Fri",
      6: "Sat",
  };

  const date = new Date();

    try {
      
      // find the user
      let user = await User.findOne({ _id: req.user });

      let index = -1;
      for (let i = 0; i < user.habits.length; i++) {
        if (user.habits[i]._id.toString() === req.body._id.toString()) {
          index = i;
        }
      }

      const Progress = user.habits[index].Progress;
      const CheckIns = user.habits[index].CheckIns;
      const newActive = req.body.Occurrence[weekday[date.getDay()]];
      console.log(newActive)

      // Calculate a new completion percentage if the user edits the occurrence 
      let newPercent = Progress.UpdateCount < newTimesPer ? ((100 / newTimesPer) * Progress.UpdateCount) : 100;

      // update Checkins accordingly 
      if (newPercent < 100 && Progress.Percent == 100) {
        // pop Checkin
        undoCheckin(CheckIns)
      }

      if (newPercent == 100 && Progress.Percent < 100) {
        // push Checkin
        addCheckin(CheckIns)
      }

      // Update the habit from the database based on the habit ID
      await User.updateOne(
        {
          _id: req.user,
          "habits._id": ObjectID(req.body._id),
        },
        {
          $set: {
            "habits.$.Progress.Percent": newPercent,
            "habits.$.Progress.CurrDate": new Date(),
            "habits.$.Active": newActive,
            "habits.$.Description": newDesc,
            "habits.$.Color": newColor,
            "habits.$.CheckIns": CheckIns,
            "habits.$.TimesPer": newTimesPer,
            "habits.$.Occurrence": newOccur,   
          },
        }
      );
       user = await User.findOne({ _id: req.user });

      res.json(user.habits);
    } catch (err) {
      res.send(err).status(400);
    }
  } else {
    res.send(error.details[0].message).status(400);
  }
});

module.exports = router;

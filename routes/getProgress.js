const router = require("express").Router();           // Import expres router
const User = require("../models/User");               // Import Uer model aka get access to User Collection
const verify = require("./verifyToken");              // Import Verify Middleware to verify JWT
const resetHabits = require("./reset");               // Import resetHabits Middleware
var mongoose = require("mongoose");

router.post("/getProgress", verify, resetHabits, async (req, res) => {
  try {
    // find the user
    const user = await User.findOne({ _id: req.user });
    let total = 0;
    let current = 0;

// Add all the Times per Occurrences of Active Habits
// Add all  the current habit completions 
    for (let i = 0; i < user.habits.length; i++) {

      if (user.habits[i].Active === true) {
        if (parseInt(user.habits[i].TimesPer) >= parseInt(user.habits[i].Progress.UpdateCount)) {
          total = total + parseInt(user.habits[i].TimesPer);
          current = current + parseInt(user.habits[i].Progress.UpdateCount);
        }
        else {
          total = total + parseInt(user.habits[i].TimesPer);
          current = current + parseInt(user.habits[i].TimesPer);
        }
      }
    }


// calculate the percent of the progress bar 
// Current Habit Completions / All Habits TImes per Occurrences
    let num = current / total;
    percent = num * 100;

    /* When a user completes all habits it counts as a complete day */
    let date = new Date();
    date.setHours(0, 0, 0, 0);
    let completeDay = user.completeDay;

    // push to complete day array when the percent hits 100
    if (completeDay.length == 0 && percent == 100) {
      completeDay.push({ Streak:1, CurrDate: date })
    }
    else if (completeDay.length > 0) {
      if (percent == 100 && completeDay[completeDay.length - 1].CurrDate.valueOf() !== date.valueOf()) {
        completeDay.push({ Streak:1, CurrDate: date })
      }
      // if the percent is less than 100 and there is a complete day on that same date
      // pop the last object from the complete day array
      else if (percent < 100 && completeDay[completeDay.length - 1].CurrDate.valueOf() == date.valueOf()) {
        completeDay.pop();
      }
    }
    // update completeDay array in the database
    await User.updateOne(
      {
        _id: req.user,
      },
      {
        $set: {
          "completeDay": completeDay,
        },
      }
    );
   // send percent and array to be used in progress bar, bar graph, and calendar on dashboard
    res.json({percent: num, completeDay: completeDay});
  } catch (err) {
    console.log(err)
    res.send(err).status(400);
  }
});

module.exports = router;
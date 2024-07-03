
/*
This function adds a new CheckIn to the list of CheckIns for a habit.
It's called by the updatePercent API whenever percent hits 100
*/

function addCheckin(checkinsList) {

  // Get the last Checkin in the list to get the current streak and date info
  const lastCheckin = checkinsList[checkinsList.length - 1];

  // add 1 to the streak because we are adding another checkin
  let streak = lastCheckin.Streak + 1;

  let lstreak = lastCheckin.LongestStreak;

  let lastDate = lastCheckin.CurrDate;

  let today = new Date();

  /* 
  Compare todays date to the last Checkin date to make sure the user isn't 
  adding another checkin for the day. However, if there is a checkin for the 
  day, check if the streak is zero because it would be a reset Checkin
  */ 
  if ( 
    today.getMonth() === lastDate.getMonth() &&
    today.getDate() === lastDate.getDate() &&
    today.getFullYear() === lastDate.getFullYear() &&
    checkinsList.length > 1 &&
    checkinsList[checkinsList.length - 1].Streak != 0
  ) {
  } else {
    // if the Streak is greater than the Longest Streak, then update the Longest Streak
    if (streak > lstreak) {
      lstreak = streak;
    }

    // Create a new Checkin object and push it to the list
    let checkin = {
      Streak: streak,
      LongestStreak: lstreak,
      CurrDate: new Date(),
    };

    checkinsList.push(checkin);
  }
}
/* 
This function undos a Checkin when the undo button is pressed. However,
if the Checkin list length is only 1, that means there is only the create checkin.
This is called if the percent is currently at 100 and the undoPercent API is called
*/
function undoCheckin(checkinsList) {
  if (checkinsList.length !== 1) checkinsList.pop();
}

module.exports = {addCheckin, undoCheckin}


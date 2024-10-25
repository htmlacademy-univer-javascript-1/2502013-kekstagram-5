// eslint-disable-next-line no-unused-vars
function checkStringLen (line, number) {
  return line.lenght <= number;
}
// eslint-disable-next-line no-console, no-unused-vars
function palindrome(line) {
  let check = '';
  for (let i = line.length; i > 0; --i) {
    check += line[i];
  }
  // eslint-disable-next-line eqeqeq
  if (line == check) {
    return true;
  } else {
    return false;
  }
}

const minutes = 60;

const checkTime = (workingDayStart, workingDayEnd, meetingStart, meetingDuration) => {
  workingDayStart = workingDayStart.split(':');
  workingDayEnd = workingDayEnd.split(':');
  meetingStart = meetingStart.split(':');

  const timeOfWorkingDay = (minutes - parseInt(workingDayStart[1], 2)) + (parseInt(workingDayEnd[0], 2)
   - (parseInt(workingDayStart[0], 2) + 1)) * minutes + parseInt(workingDayEnd[1], 2);
  const timeUntilEnd = (minutes - parseInt(meetingStart[1], 2)) + (parseInt(workingDayEnd[0], 2)
   - (parseInt(meetingStart[0], 2) + 1)) * minutes + parseInt(workingDayEnd[1], 2);

  if (meetingDuration <= timeOfWorkingDay){
    if (workingDayStart[0] < meetingStart[0] && timeUntilEnd >= meetingDuration){
      return true;
    } else if (workingDayStart[0] === meetingStart[0] && workingDayStart[1] <= meetingStart[1]) {
      return true;
    }
  }
  return false;
};

checkTime('08:00', '17:30', '14:00', 90); // true
checkTime('8:0', '10:0', '8:0', 120); // true
checkTime('08:00', '14:30', '14:00', 90); // false
checkTime('14:00', '17:30', '08:0', 90); // false
checkTime('8:00', '17:30', '08:00', 900); // false

// Input: Array of employee objects
// Process: Compare the schedules of each employee based on coincidence of day and time
// Output: String of the result of the comparison: "Name1+Name2: Coincidence in day and time"
const compareEmployeeSchedule = (employeeJsonData) => {
  try {
    let result = "";

    //Iterate through the array of employee objects
    for (let i = 0; i < employeeJsonData.length; i++) {
      for (let j = i + 1; j < employeeJsonData.length; j++) {
        //Asign employee A-B to compare schedule to a variable
        const scheduleEmployeeA = employeeJsonData[i].schedule;
        const scheduleEmployeeB = employeeJsonData[j].schedule;

        //Count Variable to count the coincidence of day and time
        let count = 0;

        //Iterate through the array of schedules of each employee
        for (let k = 0; k < scheduleEmployeeA.length; k++) {
          for (let l = 0; l < scheduleEmployeeB.length; l++) {
            //If the day and time of the schedule of employee A is the same as the schedule of employee B
            //And the time of entry and exit of the schedule of employee A matches the schedule time of employee B
            //Count the coincidence of day and time
            if (
              scheduleEmployeeA[k].day === scheduleEmployeeB[l].day &&
              scheduleEmployeeA[k].time[0] <= scheduleEmployeeB[l].time[1] &&
              scheduleEmployeeA[k].time[1] >= scheduleEmployeeB[l].time[0]
            ) {
              count++;
            }
          }
        }
        //Result will be the name of the employees that have the same schedule and the coincidence of day and time
        result += `${employeeJsonData[i].name}-${employeeJsonData[j].name}: ${count}\n`;
      }
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};

// Export the function to be used in the other files.
module.exports = {
  compareEmployeeSchedule,
};

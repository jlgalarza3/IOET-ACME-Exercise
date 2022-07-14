// Input: Array of employee objects
// Process: Compare the schedules of each employee based on coincidence of day and time
// Output: String of the result of the comparison: "Name1+Name2: Coincidence in day and time"
const compareEmployeeSchedule = (employeeJsonData) => {
  try {
    let result = "";
    for (let i = 0; i < employeeJsonData.length; i++) {
      for (let j = i + 1; j < employeeJsonData.length; j++) {
        const scheduleEmployeeA = employeeJsonData[i].schedule;
        const scheduleEmployeeB = employeeJsonData[j].schedule;
        let count = 0;
        for (let k = 0; k < scheduleEmployeeA.length; k++) {
          for (let l = 0; l < scheduleEmployeeB.length; l++) {
            if (
              scheduleEmployeeA[k].day === scheduleEmployeeB[l].day &&
              scheduleEmployeeA[k].time[0] <= scheduleEmployeeB[l].time[1] &&
              scheduleEmployeeA[k].time[1] >= scheduleEmployeeB[l].time[0]
            ) {
              count++;
            }
          }
        }
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

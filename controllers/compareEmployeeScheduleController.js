const compareEmployeeSchedule = (employeeJsonData) => {
  try {
    let result = "";
    for (let i = 0; i < employeeJsonData.length; i++) {
      for (let j = i + 1; j < employeeJsonData.length; j++) {
        const scheduleA = employeeJsonData[i].schedule;
        const scheduleB = employeeJsonData[j].schedule;
        let count = 0;
        for (let k = 0; k < scheduleA.length; k++) {
          for (let l = 0; l < scheduleB.length; l++) {
            if (
              scheduleA[k].day === scheduleB[l].day &&
              scheduleA[k].time[0] <= scheduleB[l].time[1] &&
              scheduleA[k].time[1] >= scheduleB[l].time[0]
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

module.exports = {
  compareEmployeeSchedule,
};

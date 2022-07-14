//Employee Model
//** ID: number
//** Name: string
//** Schedule: array of objects with day and time
class Employee {
  constructor(id, name, schedule) {
    this.id = id;
    this.name = name;
    this.schedule = schedule;
  }
}

// Export the Employee class
module.exports = {
  Employee,
};

# IOET-ACME-Exercise
# Hi ioeter's :smiley: ! Here you can find all the information related to the proposed exercise for a trainee position.
## 1. Proposed Exercise :flushed:
The company ACME offers their employees the flexibility to work the hours they want. But due to some external circumstances they need to know what employees have been at the office within the same time frame

The goal of this exercise is to output a table containing pairs of employees and how often they have coincided in the office.

Input: the name of an employee and the schedule they worked, indicating the time and hours. This should be a .txt file with at least five sets of data. You can include the data from our examples below:

**Example 1:**

***INPUT***  
RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00- 21:00  
ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00  
ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00

  
***OUTPUT:***  
ASTRID-RENE: 2  
ASTRID-ANDRES: 3  
RENE-ANDRES: 2

**Example 2:**

***INPUT:***  
RENE=MO10:15-12:00,TU10:00-12:00,TH13:00-13:15,SA14:00-18:00,SU20:00-21:00  
ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00

***OUTPUT:***  
RENE-ASTRID: 3

## 2.  Overview of my solution :smirk:
My analysis of the solution was based on 5 key points:

 1. **Data Extraction**
Data extraction through a local txt file, can be done through functions given by the programming language.

 2. **Data Cleaning**
I performed a data cleaning, to avoid including unnecessary characters or blank spaces.

 3. **Data Separation**
The input format contains several special characters to separate the data, I analyzed what they are and how to separate them correctly.

 4. **Data Sorting**
Javascript is a programming language that handles JSON objects very well. My intention after separating the data is to sort them into an array of objects with their corresponding key and value.

 5. **Algorithm to compare employee schedules**
Finally, the algorithm was performed by comparing the schedule of an employee A, with an employee B, based on the day and time that have coincided.

## 3. Architecture :triangular_ruler:

I used the MVC architecture pattern as shown below.

![IOET-Exercise-ARCH](https://user-images.githubusercontent.com/44406615/179069309-e36c92f5-47a7-45d4-ae00-529f4c1db17b.png)

In which the user, through the main method sends the txt file and requests the controller to process his file. 
The controller is responsible for performing the data cleansing and performs the algorithm process to get the result.
The controller sends the result of the process to the view
Finally, the view displays the result to the user.

### Directory Tree

```
   .gitignore
│   index.js
│   package-lock.json
│   package.json
│   README.md
│   
├───controllers
│       compareEmployeeScheduleController.js
│       dataPreprocessingController.js
│       
├───data
│       employee-entry-control.txt
│       
├───models
│       employeeModel.js
│       
├───test
│       test.js
│       
└───views
        employeeView.js
```

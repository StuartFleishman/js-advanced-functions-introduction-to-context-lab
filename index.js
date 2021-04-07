// Your code here

function createEmployeeRecord(a) {
 
    return {firstName: a[0], familyName: a[1], title: a[2], payPerHour: a[3], timeInEvents: [], timeOutEvents: []}

}

function createEmployeeRecords(a) {
  return a.map(createEmployeeRecord)
}

function createTimeInEvent(obj, date) {
  const yo =  obj.timeInEvents = [{type: "TimeIn",hour: parseInt(date.split(' ')[1]), date: date.split(' ')[0]}]
  return obj 
}

function createTimeOutEvent(obj, date) {
  const yo =  obj.timeOutEvents = [{type: "TimeOut",hour: parseInt(date.split(' ')[1]), date: date.split(' ')[0]}]
  return obj 
}

function hoursWorkedOnDate(obj, date) {  
  const hi = obj.timeInEvents.find( e => e.date === date)
  const yup = obj.timeOutEvents.find( e => e.date === date)
  const le = parseInt(hi.hour, 10)
  const me = parseInt(yup.hour, 10)
  const work = (me - le) /100
  return work
  
}

function wagesEarnedOnDate(obj, date) {
  const hoursWorked = hoursWorkedOnDate(obj, date)
  const payRate = obj.payPerHour
  const wage = hoursWorked * payRate
  return wage 
}

function allWagesFor(obj) {
  const date = obj.timeInEvents.map(e => e.date)
  const wages = date.map(e => wagesEarnedOnDate(obj, e))
  const total =  wages.reduce((acc, cv) => acc + cv)
  return total 
}




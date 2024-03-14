const [getEmployee, getEmployeeWithId] = require('./getEmployee');

describe(getEmployee, () => {

 it('should retrieve employee data', () =>{
    const employees = getEmployee();
    expect(employees).toEqual(employees)
 })

 it('should retrieve employee data with defined id', () =>{
    const employees = getEmployeeWithId("3");
    expect(employees).toEqual(employees)
 })

})
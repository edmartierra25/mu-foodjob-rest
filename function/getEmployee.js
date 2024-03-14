const fromFile = require('../data/employees.js');

const getEmployee = () => {
    return fromFile.employees;
}

const getEmployeeWithId = (id) => {
    return fromFile.employees.map(emp => emp.id === id);
}

module.exports = [getEmployee, getEmployeeWithId];
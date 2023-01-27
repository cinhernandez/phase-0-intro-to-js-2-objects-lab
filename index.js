const employee = {
    name: "John",
    streetAddress: "180 Monterey",
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};

    newEmployee[key] = value;

    return newEmployee;
}

const employee1 = updateEmployeeWithKeyAndValue(employee1, "name", "sam", "streetAddress","11 Broadway");


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;

    return employee;
}

const employee3 = destructivelyUpdateEmployeeWithKeyAndValue(employee3, "streetAddress", "12 Broadway" );


function deleteFromEmployeeByKey(employee, key) {
    const newEmployee= {...employee};
    delete newEmployee[key];
    return newEmployee;

}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete employee[key];
    return employee;
}
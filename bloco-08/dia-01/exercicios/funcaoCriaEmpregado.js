const createEmployee = (firstName, lastName) => {
  const fullName = `${firstName} ${lastName}`;
  const email = `${firstName}${lastName}@trybe.com.br`;
  return {fullName, email}
};

const newEmployees = (createEmployee) => {
  const employees = {
    id1: createEmployee('Pedro', 'Guerra'),
    id2: createEmployee('Marina', 'Drummond'),
    id3: createEmployee('Carla', 'Paiva')
  }
  return employees;
};

console.log(newEmployees(createEmployee));

// Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const createEmployee = (firstName, lastName) => {
  const fullName = `${firstName} ${lastName}`;
  const email = `${firstName}_${lastName}@trybe.com.br`;
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

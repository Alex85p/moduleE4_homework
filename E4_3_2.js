//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const checkProperty = (propertyName, obj) => {
  return propertyName in obj;
};

// Тестируем функцию
const exampleObj = {
  name: 'Alice',
  age: 25,
  profession: 'Engineer'
};

const propertyToCheck = 'age';
console.log(`Свойство "${propertyToCheck}" присутствует: ${checkProperty(propertyToCheck, exampleObj)}`);
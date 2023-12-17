//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

const printOwnProperties = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`Ключ: ${key}, Значение: ${obj[key]}`);
    }
  }
};

// Тестируем функцию
const exampleObj = {
  name: 'John',
  age: 30,
  occupation: 'Developer'
};

printOwnProperties(exampleObj);
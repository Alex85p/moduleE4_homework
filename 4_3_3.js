//Написать функцию, которая создает пустой объект, но без прототипа.

const createEmptyObjectWithoutPrototype = () => {
  function EmptyObject() {}
  return new EmptyObject();
};

const emptyObject = createEmptyObjectWithoutPrototype();
console.log(Object.getPrototypeOf(emptyObject)); // Вернет "null"
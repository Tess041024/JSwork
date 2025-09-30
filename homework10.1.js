var arr = [
  {
    userName: "Test",
    lastName: "Test",
    email: "test.test@gmail.com"
  },
  {
    userName: "Dmitro",
    lastName: "Porohov",
    email: "dmitro.porohov@yahoo.com"
  },
  {
    userName: "Andrii",
    lastName: "",
    email: "andrii@mail.ru" // Нам такі не підходять
  },
];

const validEmail = /^[A-Za-z0-9]+\.{1}[A-Za-z0-9]+@(gmail\.com|yahoo\.com)$/;
const ValidatedArr = arr.filter(user => validEmail.test(user.email));
console.log(ValidatedArr)

var re = /^a-zA-Z
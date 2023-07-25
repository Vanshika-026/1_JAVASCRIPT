const person = {
  firstName: "Rahul",
  lastName: "Kumar",
  age: 50, 
};
person.firstName= "Aditya";
delete person.age;


document.getElementById("demo").innerHTML =  person.firstName +  " is " + person.age + " years old.";

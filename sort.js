/*2
const points = [40,100,1,5,25,10];
document.getElementById("demo").innerHTML=points;

function myfunction(){
  points.sort(function(){return 0.5-Math.random()});
  document.getElementById("demo").innerHTML = points;
}
*/


/*3
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {return a - b;});
document.getElementById("demo").innerHTML = points[0];*/

/*
const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];
displayCars();

function myFunction() {
  cars.sort(function (a, b) {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
  displayCars();
}
function displayCars() {
  document.getElementById("demo").innerHTML =
    cars[0].type +
    " " +
    cars[0].year +
    "<br>" +
    cars[1].type +
    " " +
    cars[1].year +
    "<br>" +
    cars[2].type +
    " " +
    cars[2].year;
}
*/
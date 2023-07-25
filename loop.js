let text = "";
let i=0;
while (i < 10){
    text += "<br>the number is " + i;
    i++;
}
document.getElementById("demo").innerHTML=text;
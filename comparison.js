function myfunction(){
    let voteable;
    let age=Number(document.getElementById("age").value);
    if (isNaN(age)){
        voteable="input is not a number";
    }else{
        voteable=(age<18)?"Too young":"Old enough";
    }
    document.getElementById("demo").innerHTML=voteable+ " to vote";
}
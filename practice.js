console.log("hello world");

var obj={
    authorName:"Ryan Dahl",
    language:"node"
}
console.log(obj.authorName);

function display(x)
{
    console.log(x);
}
display("parrot");

var a=10;
var b=10;
if(a>b){
    console.log('A');
}
else if(a<b){
    console.log('b');
}
else{
    console.log("equal");
}

let grade = 87;
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else {
  console.log("F");
}

var age = 18;
var beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage);


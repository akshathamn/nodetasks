function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  console.log(Math.random());


function Numbers(min,max){
    console.log(Math.floor(Math.random()*(max-min+1)+min));
    }
    Numbers(2,4)


const day = new Date().getDay()+1;
switch (day) {
    case 1:
        console.log(" Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("No day...");
}



var text="Hello"; 
switch (text)     
{   
    case "Hey":
        console.log("Hey");
        break;

    case "Hii":
        console.log("Hii");
        break;

    case "Hello":
        console.log("Hello");
        break;

    default:
        console.log("No Matched String");
        break;

}




const price = 26.5;    
const taxRate = 0.080; 
let totalPrice = price + (price * taxRate);
totalPrice.toFixed(2);
console.log("Total:", totalPrice);
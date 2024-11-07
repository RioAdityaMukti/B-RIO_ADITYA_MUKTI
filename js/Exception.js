function myFirst(callback){
    myDisplayer("Hello");
    callback();
}

function mySecond(){
    myDisplayer("Goodbye");
}

function myDisplayer(massage){
    console.log(massage);
}

myFirst(mySecond);

//set time out
console.log("I PRINT FIRST !");
setTimeout(()=>{
   console.log("I PRINT AFTER 3 SECONDS");
}, 3000);
console.log("I PRINT SECOND!");

//SETINTERVAl()
function setTime(){
    const header = document.getElementById("header");
    header.textContent = new Date().toString();
}

setInterval(setTime,1000);
console.log("program Finish");
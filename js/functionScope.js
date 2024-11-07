//LET
//function RioAM(){
//    let msg="I Like You";
//    msg;//outputnya akan keluar disni saja (didalam)
//}
//msg;//maka disni akan terjadi error, karena let tidak bisa digunakan diluar

//BLOCK SCOPE
//let radius = 8;
//if(radius >0){
//    const PI = 3.14;
//    let circ=2*PI*radius;
//}
//console.log(radius);//Outputnya yang dikeluarkan, karena diluar fungsi
//console.log(PI);//disini juga terdapat eror, karena pada PI terdapat didalam fungsi maka terjadi eror
//console.log(circ);//disini teerjadi eror, karena circ itu sama seperti PI terdapat didalam fungsi maka terjadi eror

//LEXICAL SCOPE
//function outer(){
//    let herio = "Superman";

 //   function inner(){
 //       let cryForHelp=`${herio}, please save me !`
 //       console.log(cryForHelp);
  //  }

  //  inner();
//}
//outer();

//ARROW FUNCTION
const square = (x)=>{
    return x*x;
}
const sum = (x,y)=>{
    return x+y;
}
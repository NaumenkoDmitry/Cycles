//1
function decrease(){
    for(let i=25;i>=0;i--){
        console.log(i);
      }
}
// decrease();
//2
function multiplicity(){
    for(let i=10;i<=50;i++){
          if(i%5===0)
          {
            console.log(i);
          }
       
        }
}
// multiplicity();

//3
function sumNumbers(sum){
    if(isNaN(sum)){
        return null;
    }
  for(let i=1;i<=100;i++){
     sum +=i;
  }
  return sum;
}
//4
function example(number){
  do{
    number = +prompt('2+2*2= ');
  }
  while(number != 6){
    return '2 + 2 * 2 = ' + number;
  }
}
// example();
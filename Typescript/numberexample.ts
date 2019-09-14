var num = prompt('Enter the number')
var count:number=1
var result:number=1;

for(var count=1;count<=Number(num);count++){    
    result=result*count;    
}

alert(result)

for (var count = 1; count <= 10; count++){
      console.log(Number(num) + "*" + count + " = " + (Number(num)*count));
  }

  if(Number(num) <= 1){
      alert('Number is less than or equal to 1 so not a prime number')
  }

  for(var idx=2;idx<Number(num);idx++){
      if(Number(num) % idx == 0){
          alert('Not a prime number')
          break
      }else{
          alert('Prime number')
          break;
      }
  }
var personname = prompt('enter the name of the person')
var address = prompt('enter the address of the person')
var phone = prompt('enter the phone no of the person')
var age = prompt('enter the age of the person')
var fare:number=1000;

if(Number(age) > 60){
 alert(fare-0.5*fare);   
}else if (Number(age) > 5 && Number(age) < 60){
    alert(fare-0.1*fare);
}else{
    alert(fare-0.8*fare);
}
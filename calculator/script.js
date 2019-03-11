

var operator = "";
function insert(num){
	if(num == '+' || num == 'X' || num=="-" || num=="/"){
        operator = num;
     }
      document.getElementById("mytext").value += num
} 

function clean(){
 	document.getElementById("mytext").value = "";	
}

function result(){
	var num1 = parseFloat(document.getElementById("mytext").value.split(`${operator}`)[0]);
	var num2 = parseFloat(document.getElementById("mytext").value.split(`${operator}`)[1]);

   switch(operator){
     case'+' : document.getElementById("mytext").value = num1 + num2;
     			break;
     case'X' : document.getElementById("mytext").value = num1 * num2;
     			break;
     case'/' : document.getElementById("mytext").value = num1 / num2;
     			break;
     case'-' : document.getElementById("mytext").value = num1 - num2;
     			break;
     default : document.getElementById("mytext").value = "Error"
   }	


}
let numbers = [];
let ent = document.querySelector(".main_input");
let buf = 0;
let oper = "";
//массив кнопок
for (let index = 0; index < 10; index++) {
   numbers[index]= document.getElementById(`${index}`); 
}
numbers[10]=document.getElementById("plus");
numbers[11]=document.getElementById("sub");
numbers[12]=document.getElementById("mul");
numbers[13]=document.getElementById("div");
numbers[14]=document.getElementById("dot");
numbers[15]=document.getElementById("result");
numbers[16]=document.getElementById("reset");

numbers[1].addEventListener('click', ()=>ent.value+="1");
numbers[2].addEventListener('click', ()=>ent.value+="2");
numbers[3].addEventListener('click', ()=>ent.value+="3");
numbers[4].addEventListener('click', ()=>ent.value+="4");
numbers[5].addEventListener('click', ()=>ent.value+="5");
numbers[6].addEventListener('click', ()=>ent.value+="6");
numbers[7].addEventListener('click', ()=>ent.value+="7");
numbers[8].addEventListener('click', ()=>ent.value+="8");
numbers[9].addEventListener('click', ()=>ent.value+="9");
numbers[0].addEventListener('click', ()=>ent.value+="0");
numbers[14].addEventListener('click', ()=>ent.value+=".");
numbers[10].addEventListener('click', plus);
numbers[11].addEventListener('click', sub);
numbers[12].addEventListener('click', mul);
numbers[13].addEventListener('click', div);
numbers[15].addEventListener('click', result)
numbers[16].addEventListener('click', ()=>{ent.value="";oper="";buf=0;});
 
 function result() {
     switch (oper) {
         case "+":
            ent.value=Number(ent.value)+buf; 
            buf=Number(ent.value);
            oper="=";
             break;
         case "-":
            ent.value=buf-Number(ent.value); 
            buf=Number(ent.value);
            oper="=";
             break;
         case "*":
            ent.value=buf*Number(ent.value); 
            buf=Number(ent.value);
            oper="=";
             break;
         case "/":
            ent.value=buf/Number(ent.value); 
            buf=Number(ent.value);
            oper="=";
             break;
         
     
         default:
             break;
     }
 }
 function plus(){
    switch (oper) {
        case "":
            oper="+";
            buf=Number(ent.value);
            ent.value=" "; 
            break;
         case "=":
            oper="+";
            ent.value=" "; 
            break;
         case "+":
            oper="+";
            ent.value=Number(ent.value)+buf; 
            buf=Number(ent.value);
            break;
        default:
            oper="+";
            buf=Number(ent.value);
            ent.value=" ";
            break;
     }
 }
 function sub(){
    switch (oper) {
        case "":
            oper="-";
            buf=Number(ent.value);
            ent.value=" "; 
            break;
         case "=":
            oper="-";
            ent.value=" "; 
            break;
         case "-":
            oper="-";
            ent.value=buf-Number(ent.value); 
            buf=Number(ent.value);
            break;
        default:
            oper="-";
            buf=Number(ent.value);
            ent.value=" ";
            break;
     }
 }

function mul(){
    switch (oper) {
        case "":
            oper="*";
            buf=Number(ent.value);
            ent.value=" "; 
            break;
         case "=":
            oper="*";
            ent.value=" "; 
            break;
         case "*":
            oper="*";
            ent.value=Number(ent.value)*buf; 
            buf=Number(ent.value);
            break;
        default:
            oper="*";
            buf=Number(ent.value);
            ent.value=" ";
            break;
     }
}
function div(){
    switch (oper) {
        case "":
            oper="/";
            buf=Number(ent.value);
            ent.value=" "; 
            break;
         case "=":
            oper="/";
            ent.value=" "; 
            break;
         case "/":
            oper="/";
            ent.value=buf/Number(ent.value); 
            buf=Number(ent.value);
            break;
        default:
            oper="/";
            buf=Number(ent.value);
            ent.value=" ";
            break;
     }
}




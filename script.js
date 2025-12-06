let buttons = document.querySelectorAll('button');
let operatorValue = document.querySelectorAll('.operator');
let  operand = document.querySelectorAll('.numberKeys')
let display = document.querySelector('.calculator-screen');
let clearScreen = document.getElementById('clear');
let equals = document.getElementById('equals');

 for(let i =0;i<buttons.length;i++){
  buttons[i].addEventListener('click',function disp(){
      display.value += buttons[i].value;
      buttonDisabled();
      if(buttons[i].innerText === '=' ){
        operatorFetch(display.value);
      };
      clearDisp();
      deleteElem();
     });
      function clearDisp()
      {
         if(buttons[i].value === 'CE'){
         display.value = '';
         };
      };
      function deleteElem()
         {
            if(buttons[i].innerText=== 'DEL'){
               let newVal = display.value.slice(0,-1);
               display.value = newVal;
                                             }
         }
}
        function buttonDisabled(){
           if( display.value === ''||display.value.includes("/") || display.value.includes("*") || display.value.includes('+')|| display.value.includes('-')){
           //  buttons[1].disabled = true;
              buttons[17].disabled = true;
               buttons[15].disabled = true;
                buttons[11].disabled = true;
                 buttons[7].disabled = true;
               }else{
                    // buttons[1].disabled = false;
                      buttons[17].disabled = false;
                      buttons[15].disabled = false;
                      buttons[11].disabled = false;
                       buttons[7].disabled = false;
                      }
  };
  function operatorFetch(val){
   let oper ;
   let sum,a,b;
   let str;
   if(val.includes('+')){
   oper = '+';
   }else  if(val.includes('-')){
   oper = '-';
   } else if(val.includes('/')){
   oper = '/';
   } else if(val.includes('*')){
   oper = '*';
   };
     str = val.split(oper);
      a = Number(str[0]);
       b = Number(str[1]);
      switch(oper){
         case '+':
            sum = a + b;
            display.value = sum;
            break;
             case '-':
            sum = a - b;
            display.value = sum;
            break;
             case '*':
            sum = a * b;
            display.value = sum;
            break;
             case '/':
               if(a === 0){
                  display.value = "cant divide by 0"
               }else{
            sum = a / b;
            display.value = sum;
               };
            break;
      }
     }


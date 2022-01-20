(function(){
"use strict";
let btn = document.querySelector('.boton');
let totalAtm = document.getElementById('total');







class allMoney{
    constructor(v,a){
    
      this.value = v;
      this.amount = a;
      this.imagen = new Image();

      this.imagen.src = imagenes[this.value]; 

    }
  }

  let imagenes = [];

  imagenes["500"] = "img/500.jpeg";
  imagenes["100"] = "img/100.jpeg";
  imagenes["200"] = "img/200.jpeg";
  imagenes["50"] = "img/50.jpeg";
  imagenes["20"] = "img/20.jpeg";
  imagenes["10"] = "img/10.jpeg";
  imagenes["5"] = "img/5.jpeg";


  let atm = [];
  let deliveredMoney = [];
  
  let principalText = document.querySelector('.paragraph');
  let fragmento = document.createDocumentFragment();
 
  // value,amount

  atm.push(new allMoney(500,1));
  atm.push(new allMoney(200,1));
  atm.push(new allMoney(100,4));
  atm.push(new allMoney(50,5));
  atm.push(new allMoney(20,10));
  atm.push(new allMoney(10,30));
  atm.push(new allMoney(5,30));
  let money;
  let div = 0;
  let bankNotes = 0;

 


  let total = atm.map(e => e.value * e.amount).reduce((pre,next) => pre + next);
  let mySpan = document.createElement('SPAN');
  mySpan.innerHTML = `The daily amount is = ${total} €`.toLocaleUpperCase();
  
            mySpan.classList.add('totally');
 
  fragmento.appendChild(mySpan);
  totalAtm.appendChild(fragmento);

  btn.addEventListener('click', myAtm);


function myAtm(){


    
    let t = document.querySelector('.number');
    money = parseInt(t.value);


    for (const quantity of atm) {


      if (money > 0) {
        div = Math.floor( money / quantity.value );

       
        if (div > quantity.amount) {

            bankNotes = quantity.amount;

        }else

        {
            bankNotes = div;
        }
        
        deliveredMoney.push(new allMoney(quantity.value , bankNotes));
        money = money - (quantity.value * bankNotes);
        quantity.amount -= bankNotes;
        
    
        
      }
     
      
    }
    
    

    if (money > 0) {

        let myAlert = document.createElement('P');
        myAlert.innerHTML = "Sorry, the operation can not be executed, money are limited, your request is over " + " " + money+ "€" + " , " + "have a nice day";
        myAlert.style.color = "#931314";
        fragmento.appendChild(myAlert);
        principalText.appendChild(fragmento);
        
        mySpan.innerHTML = `Your Daily Amount is = 0 € Try Tomorrow.....`.toLocaleUpperCase();
        mySpan.classList.add('error');
        

    }else{

        for (const e of deliveredMoney) {
            let mesResult = document.createElement('P');
            mesResult.style.color = "#048c74";
            mesResult.style.lineHeight = "30px";
            mesResult.style.borderBottom = "1px solid #dedede";
            fragmento.appendChild(mesResult);
            principalText.appendChild(fragmento);

            let dineroEntregado = deliveredMoney.map(e => e.value * e.amount).reduce((pre,next) => pre + next);
            //let operacionFinal = total - dineroEntregado;
            mySpan.innerHTML = `The daily amount is now = ${total - dineroEntregado} € " please, pay attention"`.toLocaleUpperCase();
            //mySpan.classList.add('span');
            


if (e.amount > 0) {
  
    mesResult.innerHTML = e.amount + " " + "Banknotes" + " " + "of" +  " " + "<img src = " + e.imagen.src + " />";
   
}




//elimino <p> innecesarias......
            if (e.amount == 0) {
                principalText.removeChild(mesResult);
            }

        } 
        
        
    } 

    //vacio input y texto

    let textInput = document.querySelector('.number');
    
textInput.addEventListener('click', (e)=>{
  
  let container = document.querySelector('.paragraph');

  container.innerHTML = " ";
       
       t.value = " ";
});
   
    
};//end function











}());

let random; 

let userchoice;
function zcc(){
    if(random<=1){return 'bat';}
    else if(random<=2){return'ball';}
     else{return'STUMP'; }
}
function bat(){ 
    random= Math.random()*3;
    userchoice= 'bat';
    uc.innerHTML=`YOUR CHOICE = ${userchoice}`;
 //findind computer choice
 let computerchoice= zcc();
  cc.innerHTML=` computer choice = ${computerchoice}`
//finding result
        if(computerchoice=='bat'){
        res.innerHTML=`RESULT = TIE`;
        } else if(computerchoice=='ball'){
            res.innerHTML=`RESULT = you win`;
            }else {
        res.innerHTML=`RESULT = Computer wins`;
           }
    }
    function ball(){ 
        random= Math.random()*3;
        userchoice= 'ball';
        uc.innerHTML=`YOUR CHOICE = ${userchoice}`;
         //findind computer choice
         let computerchoice= zcc();
  cc.innerHTML=` computer choice = ${computerchoice}`
    
        if(computerchoice=='bat'){
            res.innerHTML=`RESULT = COMPUTER WINS`;
            }else if(computerchoice=='ball'){
                res.innerHTML=`RESULT = ITS A TIE`;
                }else {res.innerHTML=`RESULT = YOU win`;}
        }

        function wicket(){ 
            random= Math.random()*3;
            userchoice= 'stump';
            uc.innerHTML=`YOUR CHOICE = ${userchoice}`;
//findind computer choice
    let computerchoice= zcc();
  cc.innerHTML=` computer choice = ${computerchoice}`
//finding reult  
    if(computerchoice=='bat'){
    res.innerHTML=`RESULT = you win`;
 }else if(computerchoice=='ball'){
        res.innerHTML=`RESULT = COMPUTER WINS`;
        } else { res.innerHTML=`RESULT = ITS A TIE`;
    }
}

let uc= document.querySelector('#uc');
let cc= document.querySelector('#cc');
let res= document.querySelector('#result');
document.querySelector('#bat').addEventListener('click',bat)
document.querySelector('#ball').addEventListener('click',ball)
document.querySelector('#stump').addEventListener('click',wicket)
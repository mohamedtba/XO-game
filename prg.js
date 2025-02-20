let turn='x';
let title=document.querySelector('.title')
let squares=[];
function winner(){
for(let i=1;i<10;i++){

squares[i]= document .getElementById( 's'+i) .innerHTML;

}
if(squares[1]===squares[2] && squares[2]===squares[3] &&squares[1]!='')
{
    title.innerHTML=`winner is ${squares[1]}`;
    document.getElementById('s1').style.background='#000000'
    document.getElementById('s2').style.background='#000000'
    document.getElementById('s3').style.background='#000000'
    setInterval(function(){title.innerHTML+='.'},500)
setTimeout(function(){location.reload()},1000)

}
if(squares[4]===squares[5] && squares[5]===squares[6] &&squares[6]!=''){

    title.innerHTML=`winner is ${squares[4]}`;
    document.getElementById('s4').style.background='#000000'
    document.getElementById('s5').style.background='#000000'
    document.getElementById('s6').style.background='#000000'
    setInterval(function(){title.innerHTML+='.'},500)
    setTimeout(function(){location.reload()},1000)
}
if(squares[7]===squares[8] && squares[8]===squares[9] &&squares[9]!=''){

    title.innerHTML=`winner is ${squares[7]}`;
    document.getElementById('s7').style.background='#000000'
    document.getElementById('s8').style.background='#000000'
    document.getElementById('s9').style.background='#000000'
    setInterval(function(){title.innerHTML+='.'},500)
    setTimeout(function(){location.reload()},1000)
}
if(squares[1]===squares[4] && squares[4]===squares[7] &&squares[7]!=''){
    title.innerHTML=`winner is ${squares[1]}`;
    document.getElementById('s1').style.background='#000000'
    document.getElementById('s4').style.background='#000000'
    document.getElementById('s7').style.background='#000000'
    setInterval(function(){title.innerHTML+='.'},500)
    setTimeout(function(){location.reload()},1000)

}
if(squares[2]===squares[5] && squares[5]===squares[8] &&squares[8]!=''){
    title.innerHTML=`winner is ${squares[2]}`;
     document.getElementById('s2').style.background='#000000'
    document.getElementById('s5').style.background='#000000'
    document.getElementById('s8').style.background='#000000'
    setInterval(function(){title.innerHTML+='.'},500)
    setTimeout(function(){location.reload()},1000)

}if(squares[3]===squares[6] && squares[6]===squares[9] &&squares[3]!=''){

    title.innerHTML=`winner is ${squares[3]}`;
    document.getElementById('s3').style.background='#000000'
    document.getElementById('s6').style.background='#000000'
    document.getElementById('s9').style.background='#000000'
    setInterval(function(){title.innerHTML+='.'},500)
    setTimeout(function(){location.reload()},1000)

}
if(squares[1]===squares[5] && squares[5]===squares[9] &&squares[9]!=''){
    title.innerHTML=`winner is ${squares[1]}`;
    document.getElementById('s1').style.background='#000000'
    document.getElementById('s5').style.background='#000000'
    document.getElementById('s9').style.background='#000000'
    setInterval(function(){title.innerHTML+='.'},500)
    setTimeout(function(){location.reload()},1000)

}
if(squares[3]===squares[5] && squares[5]===squares[7] &&squares[3]!=''){

    title.innerHTML=`winner is ${squares[3]}`;
    document.getElementById('s3').style.background='#000000'
    document.getElementById('s5').style.background='#000000'
    document.getElementById('s7').style.background='#000000'
    setInterval(function(){title.innerHTML+='.'},500)
    setTimeout(function(){location.reload()},1000)
}
else
{
  if(squares[1]!='' && squares[2]!='' && squares[3]!='' && squares[4]!='' && squares[5]!='' && squares[6]!='' && squares[7]!='' && squares[8]!='' && squares[9]!=''  )
  {

    title.innerHTML='its a draw';
    setInterval(function(){title.innerHTML+='.'},500)
    setTimeout(function(){location.reload()},1000)

  }  
    


}
}

function writ(id){
    let element=document.getElementById(id);
    if(turn==='x' && element.innerHTML==''){
     element.innerHTML='X';
     turn='o'
     title.innerHTML='O turn';
    }
    
    if(turn==='o' && element.innerHTML==''){
element.innerHTML='O';
turn='x';
title.innerHTML='X turn';
    }
winner();
}

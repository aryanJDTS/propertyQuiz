
export function selectedAnswer(a1,a2,a3){
    const a1_1= document.getElementById('a1.1');
    const a1_2= document.getElementById('a1.2');
    const a1_3= document.getElementById('a1.3');
    const a2_1=document.getElementById('a2.1');
    const a2_2=document.getElementById('a2.2');
    const a2_3=document.getElementById('a2.3');
    const a3_1= document.getElementById('a3.1');
    const a3_2= document.getElementById('a3.2');

    if(a1[0]==1){
        a1_1.style.backgroundColor='rgb(217, 235, 252)';
        a1_2.style.background='aliceblue';
        a1_3.style.background='aliceblue';
    }
    if(a1[1]===1){
        a1_2.style.background='rgb(217, 235, 252)';
        a1_1.style.background='aliceblue';
        a1_3.style.background='aliceblue';
    }
    if(a1[2]===1){
        a1_3.style.background='rgb(217, 235, 252)';
        a1_2.style.background='aliceblue';
        a1_1.style.background='aliceblue';
    }
    
    if(a2[0]===1){
        a2_1.style.background='rgb(217, 235, 252)';
        a2_2.style.background='aliceblue';
        a2_3.style.background='aliceblue';
    }
    if(a2[1]===1){
        a2_2.style.background='rgb(217, 235, 252)';
        a2_1.style.background='aliceblue';
        a2_3.style.background='aliceblue';
    }
    if(a2[2]===1){
        a2_3.style.background='rgb(217, 235, 252)';
        a2_2.style.background='aliceblue';
        a2_1.style.background='aliceblue';
    }

    if(a3[0]==1){
        a3_1.style.background='rgb(217, 235, 252)';
        a3_2.style.background='aliceblue';
    }
    if(a3[1]==1){
        a3_2.style.background='rgb(217, 235, 252)';
        a3_1.style.background='aliceblue';
    }
};
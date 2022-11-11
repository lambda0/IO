var f = {
    "FP":0,
    "a1Series":[0,0,false],
    "a1Cost":[200,1000,10000],
    "a1_2M":1,
    "a1_3M":1,
    "FSM":1,
    "FSLB":10000,
    "FAon":false,
    "FAD":1,
    "Exp":1,
    "FnCU":false,
    "inFnChallange":[false,false,false,false,false],
    "FnCCompleted":[false,false,false,false,false],
    "HCR":false,
    "AchC":[false,false,false,false,false,false,false,false,false],
}

function refresh() {
    setInterval(function(){
        document.getElementById('fantasyPoints').innerHTML=f.FP.toFixed(6);
    },10)
};

function a1_1() {
    if (f.FP >= f.a1Cost[0]) {
        f.a1Series[0]++;
        f.FP -= f.a1Cost[0];
        f.a1Cost[0] *= 3;
        document.getElementById('e2a').innerHTML = "Fantasy Upgrade a1,1<br>Produce Level<sup>1.5</sup> FP/s<br>" + f.a1Cost[0] + " FP<br>Level " + f.a1Series[0];
        if (f.a1Series[0]>0) {
            setInterval(function(){f.FP+=(((f.a1Series[0]**1.5)*f.a1_2M*f.a1_3M/f.FAD)**f.Exp/100)},10);
        }
    }
}

function a1_2() {
    if (f.FP >= f.a1Cost[1]) {
        f.a1Series[1]++;
        f.FP -= f.a1Cost[1];
        f.a1Cost[1] *= 2;
        f.a1_2M=1.26**f.a1Series[1];
        document.getElementById('e2b').innerHTML = "Fantasy Upgrade a1,2<br>Multiply a1,1 by 1.26<sup>Level</sup>x<br>" + f.a1Cost[1] + " FP</br>Level " + f.a1Series[1];
    }
}

function a1_3() {
    if (f.FP >= f.a1Cost[2]) {
        f.a1Series[2]=true;
        f.FP -= f.a1Cost[2];
        setInterval(function(){
            f.a1_3M=Math.log(Math.log(f.FP + 1) + 2,
            document.getElementById('e2c').innerHTML = "Fantasy Upgrade a1,3<br>Multiply a1,1 by " + f.a1_3M.toFixed(6) + "x<br>MAXED")
        },10);
        
    }
}

refresh();
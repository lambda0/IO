var canMerge0 = { 
    0: "Fantasy",
    1: "Absolutely Nothing"
};
var canConvertToVirtualCoin = {
    "Absolutely Nothing": 1
};
var time = [0,0,0,0,0,0,0];
// year month day hour minute second millisecond
function MainToStats() {
    document.getElementById('a').style.display='none';
    document.getElementById('b').style.display='none';
    document.getElementById('c').style.display='block';
}
function StatsToMain() {
    document.getElementById('a').style.display='block';
    document.getElementById('b').style.display='block';
    document.getElementById('c').style.display='none';
}
function DisplayPlayTime() {
    setInterval(function(){
        time[6]+=1;
    },1)
}
// ------------------------------------------------------------------------
setInterval(document.getElementsByClassName('playtime_milli').innerHTML=time[6],1)

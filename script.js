function currentDate(){
    var date=new Date();
    var day=date.getDay();
    var dd=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var am_pm="am";
    // var day = 3;
    var imagesArr=["./images/car1.jpg","./images/car2.jpg","./images/car3.jpg","./images/car4.jpg","./images/car5.jpg","./images/car6.jpg","./images/car7.jpg"];
    document.body.style.backgroundImage=`url(${imagesArr[day]})`;
    var days=["sunday","monday","tuesday","wednesday","thursday","friday",
"saturdey"];
day=days[day];
 
var month=["Jan","Feb","Mar","Apr","Jun","Jul",
"Aug","Sep","Oct","Nov","Dec"];
 
mo=month[mo];
if(hh==0){
    hh=12;
}
if(hh>=12){
    am_pm="pm";
    if(hh>12){
        hh=hh-12;
    }
}
if
(hh<10){
    hh=`0${hh}`;
}
if
(mm<10){
    mm=`0${mm}`;
}
if
(ss<10){
    ss=`0${ss}`;
}
// console.log(`${hh} :${mm}`);
document.querySelector("#time").innerHTML=`${hh} :${mm} ${am_pm}`;
 document.querySelector("#date").innerHTML=`${dd}/${mo}/${yy}`;
 document.querySelector("#day").innerHTML=`${day}`
 document.querySelector("#sec").innerHTML=`${ss}`;
 localStorage.setItem("currentTime",`${hh} :${mm} ${am_pm}`);
 setTimeout(currentDate,1000);
}
currentDate();

var cont=document.querySelector("#containerHours");

for(i=1;i<=12;i++){
    var buttons=document.createElement("input");
    buttons.type="button";
    buttons.value=i;
    cont.appendChild(buttons);
    buttons.className="hrs";
    // buttons.addEventListener("click",function(){
    //     var userHours=buttons.value;
    //     console.log(userHours);
    // })
}

var cont1=document.querySelector("#containerMin");
for(i=0;i<=59;i++){
    var buttons=document.createElement("input");
    buttons.type="button";
    buttons.value=i;
    cont1.appendChild(buttons);
    buttons.className="min";
}

function  closewindow(){
    document.querySelector("#setAlarm").style.display="none";
}

function  openwindow(){
    document.querySelector("#setAlarm").style.display="flex";
}

var allhrsButtons=document.querySelectorAll(".hrs");
for(i=0;i<=11;i++){
    allhrsButtons[i].addEventListener('click',function(){
        var userHours=allhrsButtons[this.value-1].value;
        localStorage.setItem("hrs",userHours);

    })
}
console.log(allhrsButtons);

var usermin;
var allminButtons=document.querySelectorAll(".min");
for(i=0;i<=59;i++){
    allminButtons[i].addEventListener('click',function(){
        var usermin=allminButtons[this.value].value;
        localStorage.setItem("min",usermin);

    })
}
console.log(usermin);
console.log(allminButtons);

var am;
function amzone(){
    localStorage.setItem("am_pm","am");

}
console.log(am);

var pm;
function pmzone(){
    localStorage.setItem("am_pm","pm");

}
console.log(pm);

var aud=new Audio();
aud.src="./assets/alarm.mp3";

function setAlarm(){
    var userHours=localStorage.getItem("hrs");
    if(userHours<10){
        userHours='0'+userHours;
    }

    var usermin=localStorage.getItem("min");
    if(usermin<10){
        usermin='0'+usermin;
    }
    var am_pm=localStorage.getItem("am_pm");
    var userTime=`${userHours} :${usermin} ${am_pm}`;
    console.log(userTime);
    var currentTime=localStorage.getItem("currentTime");

    if(userTime==currentTime){
        console.log("play alarm");
        aud.play();
    }
    else if(userTime!=currentTime){
        console.log("pause alarm");
        aud.pause();

    }
    console.log(currentTime);
    setTimeout(setAlarm,1000);
}
setAlarm();
function update(){
    document.getElementById("text").value = soulcount;
    document.title = soulcount + "Souls";
    document.getElementById("amountAcolytes").innerHTML = "There are " + acolytes + " Acolytes in your covent";
    document.getElementById("costRecruitAcolyte").innerHTML = ((acolytes + 1) *12) + " Souls";
    document.getElementById("amountElders").innerHTML = "There are " + elders + " Elders in your covent";
    document.getElementById("costRecruitElder").innerHTML = ((elders + 1) *120) + " Souls";
    document.getElementById("amountAncients").innerHTML = "There are " + ancients + " Ancients in your covent";
    document.getElementById("costRecruitAncient").innerHTML = ((ancients + 1) *1200) + " Souls";
    document.getElementById("amountSacrifice").innerHTML = "Your sacrificial power is " + sacrifice;
    document.getElementById("costUpgradeSacrifice").innerHTML = ((sacrifice + 1) *10000) + " Souls";
    document.getElementById("s").innerHTML = "Your covent is harvesting " + (((acolytes)+(elders*2)+(ancients*5))*multiplier) + " souls per second";
}
var multiplier = 1;
var soulcount = 0;
var acolytes = 0;
var elders = 0;
var ancients = 0;
var sacrifice = 1;
function timer(){
    soulcount = soulcount + acolytes;
    soulcount = soulcount + elders *2;
    soulcount = soulcount + ancients *5;
    update()
}
setInterval(timer, 1000)
function add() {
soulcount = soulcount + (1*sacrifice);
update();

}
function recruitAcolyte(){
   if (soulcount >= ((acolytes + 1) *12)){
       soulcount = soulcount - ((acolytes + 1) *12);
       acolytes = acolytes + 1;
       update();
   }
}
function recruitElder(){
    if (soulcount >= ((elders + 1) *120)){
        soulcount = soulcount - ((elders + 1) *120);
        elders = elders + 1;
        update();
    }
}
function recruitAncient(){
    if (soulcount >= ((ancients + 1) *1200)){
        soulcount = soulcount - ((ancients + 1) *1200);
        ancients = ancients + 1;
        update();
    }
}
function upgradeSacrifice(){
    if (soulcount >= ((sacrifice + 1) *10000)){
        soulcount = soulcount - ((sacrifice + 1) *10000);
        sacrifice = sacrifice + 1;
        update();
    }
}
//Save and load
function save(){
    localStorage.setItem("Sicko", "Cheater");
    localStorage.setItem("soulcount", soulcount);
    localStorage.setItem("acolytes", acolytes);
    localStorage.setItem("elders", elders);
    localStorage.setItem("ancients", ancients);
    localStorage.setItem("sacrifice", sacrifice);
}
function load(){
    soulcount = localStorage.getItem("soulcount");
    soulcount = parseInt(soulcount);
    acolytes = localStorage.getItem("acolytes");
    acolytes = parseInt(acolytes);
    elders = localStorage.getItem("elders");
    elders = parseInt(elders);
    ancients = localStorage.getItem("ancients");
    ancients = parseInt(ancients);
    sacrifice = localStorage.getItem("sacrifice");
    sacrifice = parseInt(sacrifice);
    gamestate = localStorage.getItem("gamestate");
    gamestate = parseInt(gamestate);

    update();
}
function reset(){
    localStorage.clear();
    location.reload();
}
function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}
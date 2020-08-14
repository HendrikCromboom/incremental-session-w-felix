function update(){
    document.getElementById("text").value = soulcount;
    document.title = soulcount + "Souls";
    document.getElementById("amountAcolytes").innerHTML = "There are " + acolytes + " Acolytes in your covent";
    document.getElementById("costRecruitAcolyte").innerHTML = ((acolytes + 1) *12) + " Souls";
    document.getElementById("amountElders").innerHTML = "There are " + elders + " Elders in your covent";
    document.getElementById("costRecruitElder").innerHTML = ((elders + 1) *120) + " Souls";
    document.getElementById("amountAncients").innerHTML = "There are " + ancients + " Ancients in your covent";
    document.getElementById("costRecruitAncient").innerHTML = ((ancients + 1) *1200) + " Souls";
    document.getElementById("s").innerHTML = "Your covent is harvesting " + (((acolytes)+(elders*2)+(ancients*5))*multiplier) + " souls per second";
}
var multiplier = 1;
var soulcount = 0;
var acolytes = 0;
var elders = 0;
var ancients = 0;
function timer(){
    soulcount = soulcount + acolytes;
    soulcount = soulcount + elders *2;
    soulcount = soulcount + ancients *5;
    update()
}
setInterval(timer, 1000)
function add() {
soulcount = soulcount + 1;
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
//Save and load
function save(){
    localStorage.setItem("Sicko", "Cheater");
    localStorage.setItem("soulcount", soulcount);
    localStorage.setItem("acolytes", acolytes);
    localStorage.setItem("elders", elders);
    localStorage.setItem("ancients", ancients);
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
    update();
}

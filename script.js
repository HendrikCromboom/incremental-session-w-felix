function update(){
    document.getElementById("text").value = soulcount;
    document.title = soulcount + "Souls";
    document.getElementById("amountAcolytes").innerHTML = "There are" + acolytes + "Acolytes in your covent";
    document.getElementById("costRecruitAcolyte").innerHTML = ((acolytes + 1) *12) + "Souls";
    document.getElementById("amountElders").innerHTML = "There are" + elders + "Elders in your covent";
    document.getElementById("costRecruitElders").innerHTML = ((elders + 1) *120) + "Souls";
}
var soulcount = 0;
var acolytes = 0;
var elders= 0;
function timer(){
    soulcount = soulcount + acolytes;
    soulcount = soulcount + elders *2;
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
function save(){
    localStorage.setItem("Sicko", "Cheater")
    localStorage.setItem("soulcount", soulcount);
    localStorage.setItem("acolytes", acolytes);
    localStorage.setItem("elders", elders);
}
function load(){
    soulcount = localStorage.getItem("soulcount");
    soulcount = parseInt(soulcount);
    acolytes = localStorage.getItem("acolytes");
    acolytes = parseInt(acolytes);
    elders = localStorage.getItem("elders");
    elders = parseInt(elders);
    update();
}
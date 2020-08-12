function update(){
    document.getElementById("text").value = soulcount;
    document.title = soulcount + "Souls";
    document.getElementById("amountAcolytes").innerHTML = "There are" + acolytes + "Acolytes in your covent";
    document.getElementById("costRecruitAcolyte").innerHTML = ((acolytes + 1) *12) + "Souls";
}
var soulcount = 0;
var acolytes = 0;
function timer(){
    soulcount = soulcount + acolytes;
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
function save(){
    localStorage.setItem("soulcount", soulcount);
    localStorage.setItem("acolytes", acolytes);
}
function load(){
    soulcount = localStorage.getItem("soulcount");
    soulcount = parseInt(soulcount);
    acolytes = localStorage.getItem("acolytes");
    acolytes = parseInt(acolytes);
    update();
}
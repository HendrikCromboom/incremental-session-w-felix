var soulcount = 0;
function add() {
soulcount = soulcount + 1;
document.getElementById("text").value = soulcount;
document.title = soulcount + "Souls";
}
function save(){
    localStorage.setItem("soulcount", soulcount);
}
function load(){
    soulcount = localStorage.getItem("soulcount");
    soulcount = parseInt(soulcount);
    document.getElementById("text").value = soulcount;
    document.title = soulcount + "Souls";
}
//Navigation
var gamestate = 1;

if (gamestate > 1){
    goToIndex();
}
function openeyes(){
    document.getElementById("click-container-text").innerHTML = "It is pitch dark outside...";
    document.getElementById("click-container-answer").innerHTML = "<button class=\"Example\" onclick=\"opencurtain()\"> Open your curtain </button>";
}
function opencurtain(){
    document.getElementById("click-container-text").innerHTML = "The blood moon calls to you...";
    document.getElementById("click-container-answer").innerHTML = "<button class=\"Example\" onclick=\"remember()\"> You remember... </button>";
}
function remember(){
    document.getElementById("click-container-text").innerHTML = "You know what you need to do...";
    document.getElementById("click-container-answer").innerHTML = "<button class=\"Example\" onclick=\"setgamestate()\"> Yes Master </button>";
}
function goToIndex(){
    localStorage.setItem("gamestate", gamestate);
    location.href="main.html";
}
function setgamestate(){
    gamestate = 2;
    goToIndex();
}
(function () {
    gamestate = localStorage.getItem("gamestate");
    gamestate = parseInt(gamestate);
    if (gamestate > 1){
        goToIndex();
    }
})();

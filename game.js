initGame();

const monster = document.getElementById("monster");

function jump (){
    if (monster.classList != "jump") {
        monster.classList.add("jump");

        setTimeout(function () {
            monster.classList.remove("jump")
        }, 300);
    }
}

document.addEventListener("keydown", function (event){
    jump();
});

function initGame() {

    // Your game can start here, but define separate functions, don't write everything in here :)

}

var checkIfLoose = setInterval(function(){
    var monsterTop = (window.getComputedStyle(monster).getPropertyValue('top'));
    var  obstacle = (window.getComputedStyle(obstacle).getPropertyValue('top'));


},10);

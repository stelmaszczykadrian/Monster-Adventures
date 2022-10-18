initGame();

const monster = document.getElementById("monster");
const stone = document.getElementById("stone")

const score = document.getElementById("score")

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

let checkIfLoose = setInterval(function(){
    let monsterTop = (window.getComputedStyle(monster).getPropertyValue('top'));
    let  stoneLeft = (window.getComputedStyle(stone).getPropertyValue('left'));
    if (stoneLeft>0 && stoneLeft<50 && monsterTop<=
 },10);
function initGame() {

    // Your game can start here, but define separate functions, don't write everything in here :)

}






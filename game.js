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

var checkIfLoose = setInterval(function(){
    let monsterTop = parseInt(window.getComputedStyle(monster).getPropertyValue('top'));
    console.log(monsterTop)
    let stoneLeft = parseInt(window.getComputedStyle(stone).getPropertyValue('left'));
    //console.log(stoneLeft)
    if (stoneLeft>40 && stoneLeft<90 && monsterTop>=170){
        alert("You loose")
    }
 },10);
function initGame() {

    // Your game can start here, but define separate functions, don't write everything in here :)

}






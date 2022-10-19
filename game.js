initGame();

let monster = document.getElementById("monster");
const stone = document.getElementById("stone")
const score = document.getElementById("score")

function jump (){
    if (monster.classList != "jump") {
        monster.classList.add("jump");

        setTimeout(function () {
            monster.classList.remove("jump")
        }, 500);
    }
}

document.addEventListener("keydown", function (event){
     if (event.code === 'Space'){
         jump();
     }
     else if (event.code === "ArrowLeft") {
        left();
    }
    else if (event.code === 'ArrowRight') {
        right();
    }
});
document.getElementById('monster').style.left = '50px'
function right (){
    if (parseInt(document.getElementById('monster').style.left) < 950) {
        document.getElementById('monster').style.left = parseInt(document.getElementById('monster').style.left) + 10 + "px";
    }
}
function left(){
    if (parseInt(document.getElementById('monster').style.left) > 0) {
        document.getElementById('monster').style.left = parseInt(document.getElementById('monster').style.left) - 10 + "px";
    }


}

var checkIfLoose = setInterval(function(){
    score.innerText++;
    let monsterTop = parseInt(window.getComputedStyle(monster).getPropertyValue('top'));
    let stoneLeft = parseInt(window.getComputedStyle(stone).getPropertyValue('left'));
    if (stoneLeft < 0) {
        stone.style.display = 'none';
    }
        else {
            stone.style.display = '';

        }
    if (stoneLeft>40 && stoneLeft<90 && monsterTop>=170){
        alert("Your score is: " + score.innerText +"\nDo you want play again?");
        location.reload()
    }
 },10);





function initGame() {




    // Your game can start here, but define separate functions, don't write everything in here :)

}






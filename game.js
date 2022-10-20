
let monster = document.getElementById("monster");
let startMessage = document.querySelector("#start-message");
const stone = document.getElementById("stone")
const score = document.getElementById("score")

loop:
while(true){
    const select = prompt("Your character: \n 1. ANGRY CARROT \n 2. ZOMBIE \n 3. SPIDER")
    switch (select) {
        case "1":
            monster.classList.add("carrot")
            break loop

        case "2":
            monster.classList.add("zombie")
            break loop
        case "3":
            monster.classList.add("monster")
            break loop
        default: alert("Please enter a valid character")
    } }

initGame()

function initGame() {

   function jump (){
    if (monster.classList !== "jump") {
        monster.classList.add("jump");
        setTimeout(function () {
            monster.classList.remove("jump")
        }, 500);
    }
}

function start() {
    document.getElementById('stone').style.animation = 'stone 3s infinite'
    startMessage.classList.add("hide");
}

document.addEventListener("keydown", function (event){
     if (event.code === 'Space'){
         jump();
         start();
     }
     else if (event.code === "ArrowLeft") {
        left();
        start();
    }
    else if (event.code === 'ArrowRight') {
        right();
        start();
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
    let monsterTop = parseInt(window.getComputedStyle(monster).getPropertyValue('top'));
    let monsterLeft = parseInt(window.getComputedStyle(monster).getPropertyValue('left'))
    let stoneLeft = parseInt(window.getComputedStyle(stone).getPropertyValue('left'));
    if (stoneLeft < 0) {
        stone.style.display = 'none';
        score.innerText++
    }
        else {
            stone.style.display = '';

        }
    if (stoneLeft<=monsterLeft+50 && stoneLeft>=monsterLeft && monsterTop>=170){
        alert("You jumped : " + score.innerText + " stones" + "\nDo you want to jump again?");
        location.reload()
    }
 },10);
}






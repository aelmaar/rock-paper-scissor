// select the elemnts
const playerCount = document.querySelector('.player');
const computerCount = document.querySelector('.cop');
const scissor = document.querySelector('.scissor');
const paper = document.querySelector('.paper');
const rock = document.querySelector('.rock');
const result = document.querySelector('.result');
const txtResult = document.querySelector('.footer p'); 
// set count 
let x = 0;
let y = 0;

const rpsIcon = 
    {
        r:'<i class="fas fa-hand-rock">',
        s:'<i class="fas fa-hand-scissors">',
        p:'<i class="fas fa-hand-paper">'
    };


function win(usercop) {
    x++;
    playerCount.textContent = x;
    result.innerHTML = usercop;
    txtResult.textContent = 'excellent';
    txtResult.style.color = 'rgba(6, 206, 6, 0.555)';
}
function lose(usercop) {
    y++;
    computerCount.textContent = y;
    result.innerHTML = usercop;
    txtResult.textContent = 'not lucky try again';
    txtResult.style.color = 'rgba(255, 0, 0, 0.788)';
}
function draw(usercop) {
    result.innerHTML = usercop;
    txtResult.textContent = 'draw again';
    txtResult.style.color = 'rgb(0,0,0)';
}
function returnHand(hand) {
    return rpsIcon[hand];
}

function game(hand) {
    let rps = ['r','p','s'];
    rps = rps[Math.floor(Math.random() * rps.length)];
    const randomRPS = returnHand(rps);
    const addRPS = hand + randomRPS;
    switch(addRPS) {
        case '<i class="fas fa-hand-rock"><i class="fas fa-hand-scissors">':
        case '<i class="fas fa-hand-paper"><i class="fas fa-hand-rock">':
        case '<i class="fas fa-hand-scissors"><i class="fas fa-hand-paper">':
            win(addRPS);
            break;
        case '<i class="fas fa-hand-scissors"><i class="fas fa-hand-rock">':
        case '<i class="fas fa-hand-rock"><i class="fas fa-hand-paper">':
        case '<i class="fas fa-hand-paper"><i class="fas fa-hand-scissors">':
            lose(addRPS);
            break;
        case '<i class="fas fa-hand-rock"><i class="fas fa-hand-rock">':
        case '<i class="fas fa-hand-scissors"><i class="fas fa-hand-scissors">':
        case '<i class="fas fa-hand-paper"><i class="fas fa-hand-paper">':
            draw(addRPS);
            break;
    }
}

function main() {
    rock.addEventListener('click',()=>{game(rpsIcon['r']);});
    paper.addEventListener('click',()=>{game(rpsIcon['p'])});
    scissor.addEventListener('click',()=>{game(rpsIcon['s'])});
}
main();
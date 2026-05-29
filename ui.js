const playthings = {
    battlepong:{
        toggled: false,
        lastTab: null,
        closed: "0rem",
        opened: "20rem",
        description: `<p>BATTLE TO DEFF with Miles =) Brack =] Curly =} & Botto B)! Fight with these custom characters in a twist of the classic game. Battle Pong is a 'Pong' inspired project which is my first Unity game</p>`,
        controls:   
        `<p>Player 1 ~
    W - Up
    S - Down
    A - Decrease Bot Difficulty   [ B) ]
    D - Increase Bot Difficulty   [ B) ]

Player 2 ~
    I - Up
    K - Down
    J - Decrease Bot Difficulty   [ B) ]
    L - Increase Bot Difficulty   [ B) ]

R - Quick Restart (During Game Over Panel)</p>`,
        skills: ["Unity", "C#"],
    },
}

function toggleDesc(frame, button) {
    description = document.getElementById(`${frame}descframe`);
    if (playthings[frame].toggled) {
        if (playthings[frame].lastTab == button){
            console.log(`${frame}: ${button} tab closed`);
            description.style.maxHeight = playthings[frame].closed;
            frameToggle(frame, false);
        } else {
            console.log(`${frame}: ${button} tab opened`);
            description.style.maxHeight = playthings[frame].closed;
            setTimeout(() => {
                description.innerHTML = playthings[frame][button];
                description.style.maxHeight = playthings[frame].opened;
            }, 700)
            frameToggle(frame, true, button);
        }
    } else {
        if (playthings[frame].lastTab == null) {
            console.log(`${frame}: ${button} tab opened`);
            description.innerHTML = playthings[frame][button];
            description.style.maxHeight = playthings[frame].opened;
            frameToggle(frame, true, button);
        }
    }
}
function frameToggle(frame, set, button) {
    playthings[frame].toggled = set;
    playthings[frame].lastTab = set ? button : null;
}
function conjureContents(set) {

}
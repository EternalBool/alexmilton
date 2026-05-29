const playthings = {
    battlepong:{
        toggled: false,
        lastTab: null,
        closed: "0rem",
        opened: "20rem",
        description: `<p>BATTLE TO DEFF with Miles =) Brack =] Curly =} & Botto B)! Fight with these custom characters in a twist of the classic game. Battle Pong is a 'Pong' inspired project which is my first Unity game</p>`,
        controls:   
        `<div>
            <section>
            <span style="display: block; text-align: center">Player 1 ~</span>
                W - Up<br>
                S - Down<br>
                A - Decrease Bot Difficulty   [ B) ]<br>
                D - Increase Bot Difficulty   [ B) ]<br>
            </section>
            <section>
            <span style="display: block; text-align: center">Player 2 ~</span>
                I - Up<br>
                K - Down<br>
                J - Decrease Bot Difficulty   [ B) ]<br>
                L - Increase Bot Difficulty   [ B) ]<br>
            </section>
        </div>
        <p>R - Quick Restart (During Game Over Panel)</p>`,
        skills: ["Unity", "C#"],
    },
}

function toggleDesc(frame, button) {
    description = document.getElementById(`${frame}descframe`);
    if (playthings[frame].toggled) {
        if (playthings[frame].lastTab == button){
            console.log(`${frame}: ${button} tab closed`);
            conjureContents(description, frame, false);
            frameToggle(frame, false);
        } else {
            console.log(`${frame}: ${button} tab opened`);
            conjureContents(description, frame, false);
            setTimeout(() => {conjureContents(description, frame, true, button);}, 700)
            frameToggle(frame, true, button);
        }
    } else {
        if (playthings[frame].lastTab == null) {
            console.log(`${frame}: ${button} tab opened`);
            conjureContents(description, frame, true, button);
            frameToggle(frame, true, button);
        }
    }
}
function frameToggle(frame, set, button) {
    playthings[frame].toggled = set;
    playthings[frame].lastTab = set ? button : null;
}
function conjureContents(description, frame, set, button) {
    if (set) {
        if (button == "skills") {
            description.innerHTML = `<ul>${playthings[frame].skills.map(skill => `<li>${skill}</li>`).join("")}</ul>`    
        } else {
            description.innerHTML = playthings[frame][button];
        }
        description.style.maxHeight = playthings[frame].opened;
    } else {
        description.style.maxHeight = playthings[frame].closed;
    }
}
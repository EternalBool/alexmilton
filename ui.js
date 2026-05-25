const playthings = {
    battlepong:{
        toggled: false,
        lastTab: null,
        closed: "0rem",
        opened: "10rem",
        description: "Battle Pong...",
        controls:   "WASD...",
        skills: ["Unity", "C#"],
    },
}

function toggleDesc(frame, button) {
    description = document.getElementById(`${frame}descframe`);
    if (playthings[frame].toggled) {
        if (playthings[frame].lastTab == button){
            console.log(`${frame}: ${button} tab closed`);
            description.style.maxHeight = playthings[frame].closed;
            playthings[frame].toggled = false;
            playthings[frame].lastTab = null;
        } else {
            console.log(`${frame}: ${button} tab opened`);
            description.style.maxHeight = playthings[frame].closed;
            setTimeout(() => {
                description.querySelector(`#${frame}desc`).innerText = playthings[frame][button];
                description.style.maxHeight = playthings[frame].opened;
            }, 700)
            playthings[frame].toggled = true;
            playthings[frame].lastTab = button;
        }
    } else {
        if (playthings[frame].lastTab == null) {
            console.log(`${frame}: ${button} tab opened`);
            description.style.maxHeight = playthings[frame].opened;
            description.querySelector(`#${frame}desc`).innerText = playthings[frame][button];
            playthings[frame].toggled = true;
            playthings[frame].lastTab = button;
        }
    }
}
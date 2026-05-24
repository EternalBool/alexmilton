let desc = false;
let ctrls = false;
let skills = false;
let lastTab = null;

const playthings = {
    battlepong:{
        description: "Battle Pong...",
        controls:   "WASD...",
        skills: ["Unity", "C#"],
    },
}

function toggleDesc(button) {
    const description = document.getElementById("bpdesc");
    const frame = document.getElementById("bpdescframe");
    
    if (desc) {
        frame.style.maxHeight = "0rem"
        desc = false;
    } else {
        frame.style.maxHeight = "10rem"
        description.innerText = "Description Description Description Description Description Description Description Description Description Description Description "
        desc = true;
    }
}
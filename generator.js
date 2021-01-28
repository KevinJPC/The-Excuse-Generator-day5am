let who = ["El perro", "Mi koala", "Un hacker", "Mi abuela"];
let what = ["se comió", "pisó", "robó", "derramó café en"];
let object = ["mi tarea", "mi gmail", "mi portatil", "el modem de internet"];
let structure = [who, what, object];
function generateExcuse() {
    let excuse = "";
    for (let i = 0; i < 3; i++) {
        excuse += structure[i][Math.floor(Math.random() * (3 + 1))] + " ";
    }
    document.getElementById("excuse").innerHTML = "<h2>" + excuse + "</h2>";
}
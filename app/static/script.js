let prizeDoor = null;
let playerChoice = null;
let hostOpened = null;

async function startGame() {
  const res = await fetch("/api/start");
  const data = await res.json();
  prizeDoor = data.prize_door;
  document.getElementById("message").textContent = "Pick a door!";
  document.getElementById("actions").innerHTML = "";
}

async function chooseDoor(door) {
  playerChoice = door;

  const res = await fetch(`/api/host?player_choice=${door}&prize_door=${prizeDoor}`);
  const data = await res.json();
  hostOpened = data.host_opens;

  document.getElementById("message").textContent = `Host opens door ${hostOpened} 🐐! Do you want to switch?`;

  const actionsDiv = document.getElementById("actions");
  actionsDiv.innerHTML = `
    <button onclick="decide(true)">Switch</button>
    <button onclick="decide(false)">Stay</button>
  `;
}

async function decide(switchChoice) {
  if (switchChoice) {
    playerChoice = [1, 2, 3].find(d => d !== playerChoice && d !== hostOpened);
  }

  const res = await fetch(`/api/result?player_choice=${playerChoice}&prize_door=${prizeDoor}`);
  const data = await res.json();
  const result = data.result;

  const msg = document.getElementById("message");
  msg.textContent = result === "win" ? "🎉 You won the car! 🚗" : "😢 You got a goat 🐐";
  msg.className = result === "win" ? "win" : "lose";

  document.getElementById("actions").innerHTML = `<button onclick="startGame()">Play Again</button>`;
}

document.querySelectorAll(".door").forEach(btn => {
  btn.addEventListener("click", () => chooseDoor(parseInt(btn.id.replace("door", ""))));
});

startGame();


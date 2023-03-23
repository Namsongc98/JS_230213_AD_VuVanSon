let players = JSON.parse(localStorage.getItem("players"));
function AddPlayers() {
    let savePlayers = document.getElementById("players-input").value;
    if (players == null) {
        players = [];
        players.push(savePlayers);
        localStorage.setItem("players", JSON.stringify(players))
    } else {
        players.push(savePlayers);
        localStorage.setItem("players", JSON.stringify(players))
    }
    render()
    document.getElementById("players-input").value = "";
}
function render() {
    let renderFeel = ``;
    for (let i = 0; i < players.length; i++) {
        renderFeel += `
        <div id="add" class="add">
        <div class="wp-players">
          <button onclick="del(${i})" class="button">x</button>
        </div>
        <p class="players">${players[i]}</p>
        <div class="wp-poin">
          <button onclick="minus() " class="button">-</button>
          <span>0</span>
          <button onclick="plus()" class="button">+</button>
        </div>
      </div>
            `;

    }
    document.getElementById("main").innerHTML = renderFeel;
}

function del(index) {
    
    players.splice(index,1);
    localStorage.setItem("players", JSON.stringify(players))
    render()
}

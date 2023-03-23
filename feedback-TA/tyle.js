let feel = JSON.parse(localStorage.getItem("feel"));
function send() {
    let save = document.getElementById("send-input").value;
    if (feel == null) {
        feel = [];
        feel.push(save);
        localStorage.setItem("feel", JSON.stringify(feel))
    } else {
        feel.push(save);
        localStorage.setItem("feel", JSON.stringify(feel))
    }
    render()
    document.getElementById("send-input").value = "";
}
function render() {
    let renderFeel = ``;
    for (let i = 0; i < feel.length; i++) {
        renderFeel += `
        <div class="table">
        <div class="coin">0</div>
        <p class="feed">${feel[i]}</p>
        <button onclick="dele(${i})" class="delete">x</button>
        <button onclick="edit(${i})" class="edit">edit</button>
     </div>
            `;
            
    }
    document.getElementById("table").innerHTML = renderFeel;
}
function dele(index) {
    alert("bạn có muốn delete")
    feel.splice(index,1);
    localStorage.setItem("feel", JSON.stringify(feel))
    render()
}
function edit(index) {
        let editSua = prompt("bạn muốn sửa gì") ;
    feel.splice(index, 1,editSua );
    localStorage.setItem("feel", JSON.stringify(feel))
    render()
}   
function changetitle() {
    let b = document.getElementById("none");
    console.log(b);
    const d = new Date();
    let dd = d.getMinutes();
    b.innerText = dd;
}

function darkMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";

}
function sepiaMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "sepia-mode";
    content.innerText = "Dark Mode is OFF";
}

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
   
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}
// Triangle Perimeter Assignment Start Code
function dist(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

document.getElementById("calcBtn").addEventListener("click", calc)
function calc() {
    let xA = +document.getElementById("xA").value;
    let yA = +document.getElementById("yA").value;
    let xB = +document.getElementById("xB").value;
    let yB = +document.getElementById("yB").value;
    let xC = +document.getElementById("xC").value;
    let yC = +document.getElementById("yC").value;

    let AB = dist(xA, yA, xB, yB);
    let AC = dist(xA, yA, xC, yC);
    let BC = dist(xB, yB, xC, yC);

    document.getElementById("AB").innerHTML = AB;
    document.getElementById("AC").innerHTML = AC;
    document.getElementById("BC").innerHTML = BC;
    document.getElementById("ABC").innerHTML = AB + AC + BC;
}
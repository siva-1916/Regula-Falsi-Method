function f(x) {
    return eval(document.getElementById("functionInput").value.replace(/T/g, x));
}

function regulaFalsi() {
    let x0 = parseFloat(document.getElementById("x0").value);
    let x1 = parseFloat(document.getElementById("x1").value);
    let tol = parseFloat(document.getElementById("tolerance").value);
    let iter = 0;
    let x2;
    
    if (f(x0) * f(x1) >= 0) {
        alert("Invalid initial guesses. f(x0) and f(x1) must have opposite signs.");
        return;
    }
    
    let resultTable = "<table><tr><th>Iteration</th><th>x0</th><th>x1</th><th>xn</th><th>f(xn)</th></tr>";
    do {
        x2 = ((x0*f(x1))-(x1*f(x0)))/(f(x1)-f(x0));
        resultTable += `<tr><td>${iter}</td><td>${x0.toFixed(4)}</td><td>${x1.toFixed(4)}</td><td>${x2.toFixed(6)}</td><td>${f(x2).toFixed(6)}</td></tr>`;
        
        if (Math.abs(f(x2)) < tol) {
            break;
        }
        
        if (f(x0) * f(x2) < 0) {
            x1 = x2;
        } else {
            x0 = x2;
        }
        iter++;
    } while (1==1);
    
    resultTable += `</table><br><strong>Approximate Root:</strong> ${x2.toFixed(6)}`;
    document.getElementById("output").innerHTML = resultTable;
}
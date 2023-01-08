var principal = document.getElementById("principal").value;

var rate = document.getElementById("rate").value;

function compute() {
    var principal = document.getElementById("principal").value;
    if (principal <= 0) {
        alert("ENTER A POSITIVE NUMBER");
    } else {
        var rate = document.getElementById("rate").value;

        var years = document.getElementById("years").value;
        var possibleYears = 2022 + (+years);
        var interest = principal * years * rate / 100;


        var year = new Date().getFullYear() + parseInt(years);
        var result = document.getElementById("result");
        result.innerHTML = "<br>If you deposit " + "<span class='spans'>" +
            principal + "</span>" + ",<br>at an interest rate of" + " " + "<span class='spans'>" + rate + "%</span>" + " .<br> You will receive an amount of " + "<span class='spans'>" + interest + "</span>" + ",<br> in the year " + "<span class='spans'>" + possibleYears + "</span>" + " <br>"
    }
}

function updateRate() {
    var rateval = document.getElementById("rate");
    document.getElementById("rate_val").innerText = rateval.value + "%";
}
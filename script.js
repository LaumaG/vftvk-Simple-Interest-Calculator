function compute(){
    p = document.getElementById("principal").value;
    
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    if (parseInt(principal) <= 0) {
        confirm("Enter a positive number");
        document.getElementById("principal").focus();
    }
    
    
    var interest = principal * years * rate /100;
    endYear = new Date().getFullYear() + parseInt(years);
    el = document.getElementById("result");
    el.innerHTML = "If you deposit <span class='highlight'>" + principal + "</span><br/>";
    el.innerHTML += "at an interest rate of <span class='highlight'>" + rate + "%." + "</span><br/>";
    el.innerHTML += "You will recieve an amount of <span class='highlight'>" + interest + "</span>,<br/>";
    el.innerHTML += "in the year <span class='highlight'>" + endYear + "</span>.<br/>";
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
    
    
}

var price;
var planType;
event.preventDefault();

function monthlyPlan() {
    event.preventDefault();
    document.querySelector("#createrPlan>h2").innerHTML = "$15 USD";
    document.querySelector("#createrPlan>p").innerHTML = "per month";
    document.querySelector("#createrPlan1>h2").innerHTML = "$79 USD";
    document.querySelector("#createrPlan1>p").innerHTML = "per month";
    document.querySelector("#createrPlan2>h2").innerHTML = "$199 USD";
    document.querySelector("#createrPlan2>p").innerHTML = "per month";
    planType = "monthly";
    localStorage.setItem("planType", JSON.stringify(planType));
}
function yearlyPlan() {
    event.preventDefault();
    document.querySelector("#createrPlan>h2").innerHTML = "$11 USD";
    document.querySelector("#createrPlan>p").innerHTML = "per month, billed yearly";
    document.querySelector("#createrPlan1>h2").innerHTML = "$59 USD";
    document.querySelector("#createrPlan1>p").innerHTML = "per month, billed yearly";
    document.querySelector("#createrPlan2>h2").innerHTML = "$149 USD";
    document.querySelector("#createrPlan2>p").innerHTML = "per month, billed yearly";
    planType = "yearly";
    localStorage.setItem("planType", JSON.stringify(planType));

}
function funplan2() {
    price = document.querySelector("#createrPlan>h2").innerHTML;
    localStorage.setItem("price", JSON.stringify(price));
   
}
function funplan3() {
    price = document.querySelector("#createrPlan1>h2").innerHTML;
    localStorage.setItem("price", JSON.stringify(price));

}
function funplan4() {
    price = document.querySelector("#createrPlan2>h2").innerHTML;
    localStorage.setItem("price", JSON.stringify(price));
}

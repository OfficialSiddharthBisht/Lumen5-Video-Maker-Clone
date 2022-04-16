var price;
var planType;

event.preventDefault();

function monthlyPlan() {
    event.preventDefault();
    
    document.querySelector("#createrPlan>h2>span").innerHTML = "15";
    document.querySelector("#createrPlan>p").innerHTML = "per month";
    document.querySelector("#createrPlan1>h2>span").innerHTML = "79";
    document.querySelector("#createrPlan1>p").innerHTML = "per month";
    document.querySelector("#createrPlan2>h2>span").innerHTML = "199";
    document.querySelector("#createrPlan2>p").innerHTML = "per month";
    planType = "monthly";
    localStorage.setItem("planType", JSON.stringify(planType));
}
function yearlyPlan() {
    event.preventDefault();

   
    document.querySelector("#createrPlan>h2>span").innerHTML = "11";
    document.querySelector("#createrPlan>p").innerHTML = "per month, billed yearly";


    document.querySelector("#createrPlan1>h2>span").innerHTML = "59";
    document.querySelector("#createrPlan1>p").innerHTML = "per month, billed yearly";

    document.querySelector("#createrPlan2>h2>span").innerHTML = "149";
    document.querySelector("#createrPlan2>p").innerHTML = "per month, billed yearly";

    planType = "yearly";
    localStorage.setItem("planType", JSON.stringify(planType));

}
function funplan2() {
    price = document.querySelector("#createrPlan>h2>span").innerHTML;
    localStorage.setItem("price", JSON.stringify(price));
   
}
function funplan3() {
    price = document.querySelector("#createrPlan1>h2>span").innerHTML;
    localStorage.setItem("price", JSON.stringify(price));

}
function funplan4() {
    price = document.querySelector("#createrPlan2>h2>span").innerHTML;
    localStorage.setItem("price", JSON.stringify(price));
}
function funplan5() {
    price = 15;
    localStorage.setItem("price", JSON.stringify(price));
}
function funplan6() {
    price = 79;
    localStorage.setItem("price", JSON.stringify(price));
}
function funplan7() {
    price = 199;
    localStorage.setItem("price", JSON.stringify(price));
}

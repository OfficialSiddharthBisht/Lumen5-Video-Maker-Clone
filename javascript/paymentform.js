var price = JSON.parse(localStorage.getItem("price"));
var plantype = JSON.parse(localStorage.getItem("planType"));

if (plantype == "yearly" && price != 15 && price != 79 && price != 199 ) {

    document.querySelector(".amount>span").innerHTML = 12 * price;
    document.querySelector("#price1>span").innerHTML = 12 * price;
    document.querySelector("#price2>span").innerHTML = 12 * price;
    document.querySelector("#price3>span").innerHTML = 12 * price;
}
else {
    document.querySelector(".amount>span").innerHTML = price;
    document.querySelector("#price1>span").innerHTML = price;
    document.querySelector("#price2>span").innerHTML = price;
    document.querySelector("#price3>span").innerHTML = price;
}

document.querySelector(".subscriptionModel").innerHTML = "Subscribe to Premium - v1.5 (" + plantype + ")";
document.querySelector(".premiumPayPage>h3").innerHTML = "Premium - v1.5(" + plantype + ")"

function PaymentFun() {
    event.preventDefault();
    console.log("function called")
    var name = document.querySelector("#name>input").value;
    var email = document.querySelector("#mail>input").value;
    var address = document.querySelector("#address>input").value;
    var city = document.querySelector("#city>input").value;
    var state = document.querySelector("#state>input").value;
    var zipcode = document.querySelector("#zipCode>input").value;
    var nameOnCard = document.querySelector("#nameOnCard>input").value;
    var cardNo = document.querySelector("#cardNo>input").value;
    var expMonth = document.querySelector("#expMonth>input").value;
    var expYear = document.querySelector("#expYear>input").value;
    var cvv = document.querySelector("#cvv>input").value;

    if (name == "") {
        alert("Please fill name")
        return;
        
    }
    if (email == "") {
        alert("Please fill email")
        return
        
    }
    if (address == "") {
        alert("Please fill address")
        return;
    }
    if (city == "") {
        alert("Please fill city")
        return;
    }
    if (state == "") {
        alert("Please fill state")
        return;
    }
    if (zipcode == "") {
        alert("Please fill zipCode")
        return;
    }
    if (nameOnCard == "") {
        alert("Please fill Name which is on card")
        return;
    }
    if (cardNo == "") {
        alert("Please fill card number")
        return;
    }
    if (expMonth == "") {
        alert("Please fill month of expire date")
        return;
    }
    if (expYear == "") {

        alert("Please fill year of expire year")
        return;
    }
    if (cvv == "") {
        alert("Please fill cvv")
        return;
    }
    else{
    alert("Payment Successful ");
    location.href="./index.html";
    }



}
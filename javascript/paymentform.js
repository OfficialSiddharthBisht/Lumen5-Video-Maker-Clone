var price = JSON.parse(localStorage.getItem("price"));
var plantype = JSON.parse(localStorage.getItem("planType"));

if (plantype == "yearly") {

    document.querySelector(".amount").innerHTML = "US" + price;
    document.querySelector("#price1").innerHTML = "US" + price;
    document.querySelector("#price2").innerHTML = "US" + price;
    document.querySelector("#price3").innerHTML = "US" + price;
}
else {
    document.querySelector(".amount").innerHTML = "US" + price;
    document.querySelector("#price1").innerHTML = "US" + price;
    document.querySelector("#price2").innerHTML = "US" + price;
    document.querySelector("#price3").innerHTML = "US" + price;
}

document.querySelector(".subscriptionModel").innerHTML = "Subscribe to Premium - v1.5 (" + plantype + ")";
document.querySelector(".premiumPayPage>h3").innerHTML = "Premium - v1.5(" + plantype + ")"

function PaymentFun() {
    var email = document.querySelector("#mailValidate").value;
    var cardNo = document.querySelector("#card").value;
    var expireDate = document.querySelector("#expireDate").value;
    var cardCvc = document.querySelector("#cvc").value;
    var name = document.querySelector("#nameOnCard").value;
    var address = document.querySelector("#address").value;
    var postalCode = document.querySelector("#code").value;
    var city = document.querySelector("#city").value;

    if (email == "") {
        alert("Please Enter E-mail")
        return;
    }

    if (cardNo == "" || cardNo.length !== 16) {
        alert("Please Enter valid Card number")
        return;
    }
    if (expireDate == "") {
        alert("Please Enter valid Date")
        return;
    }
    if (cardCvc == "" || cardCvc.length !== 3) {
        alert("Please Enter valid CVC")
        return;
    }
    if (name == "") {
        alert("Please Enter Your name")
        return;
    }
    if (address == "") {
        alert("Please Enter Address");
        return;
    }
    if (postalCode == "" || postalCodelength !== 6) {
        alert("Please Enter Postal code")
        return;
    }
    if (city == "") {
        alert("Please Enter City")
        return;
    }
    else {
        alert("payment successful")
    }



}
function showPrices(car) {
    pricing = document.getElementById(car.toString());
    pricing.style.display = "block";
}
function hidePrices(car) {
    pricing = document.getElementById(car.toString());
    pricing.style.display = "none";
}


function showClose() {
    terms = document.getElementById("close");
    terms.style.display = "block";
}

function checksubmit() {
    var CheckBox    =   document.getElementById("myCheck");
    var button      =   document.getElementById("submitButton");
    var Subject     =   document.getElementById("Subject");
    var Name        =   document.getElementById("Name");
    var Email       =   document.getElementById("Email");
    var Message     =   document.getElementById("Message");
    var sendMail    =   document.getElementById("sendMail");


    sendMail.setAttribute('href', 'mailto:madshejn@gmail.com?subject=' + Subject.value + '&body=' + '                Name: ' + Name.value + '                Email: ' + Email.value + '                Message: ' + Message.value);

    if (CheckBox.checked == true) {
        button.style.display = "block";
        button.style.animation = 'fade-in 1s';
    } else {
        button.style.display = "none";
    }
}

function openThanks() {
    window.open("thank.html", "_blank");
}

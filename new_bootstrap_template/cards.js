
$('#modalform').submit(function (e) {
    e.preventDefault();
    $('CardModal').modal('hide');
    document.getElementById("company").value = "";
    document.getElementById("product").value = "";
    document.getElementById("price").value = "";
    document.getElementById("info").value = "";
    return false;

});


function addCard() {
    var companyval = document.getElementById("company").value;
    var productval = document.getElementById("product").value;
    var priceval = document.getElementById("price").value;
    var informationval = document.getElementById("info").value;

    var plusbutton = document.getElementById("plusbutton");
    var cardholder = document.getElementById("card-holder");
    var mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "col-lg-3 col-md-6 mb-4");
    var divOne = document.createElement("div");
    divOne.setAttribute("class", "card h-100");
    var divTwo = document.createElement("div");
    divTwo.setAttribute("class", "card-body");
    var companyName = document.createElement("h4");
    companyName.innerHTML = companyval;
    var productName = document.createElement("h5");
    productName.innerHTML = productval;
    var priceValue = document.createElement("h5");
    priceValue.innerHTML = priceval;
    var textInfo = document.createElement("P");
    textInfo.innerHTML = informationval;
    var storesAvailable = document.createElement("P");
    storesAvailable.innerHTML="whole foods";
    var footerElement = document.createElement("div");
    footerElement.setAttribute("class", "card-footer");
    var commentLink = document.createElement("a");
    commentLink.setAttribute("href", "#");
    commentLink.setAttribute("class", "btn btn-primary");
    commentLink.innerHTML = "Comment";

    divTwo.appendChild(companyName);
    divTwo.appendChild(productName);
    divTwo.appendChild(priceValue);
    divTwo.appendChild(textInfo);
    divTwo.appendChild(storesAvailable);
    footerElement.appendChild(commentLink);
    divOne.appendChild(divTwo);
    divOne.appendChild(footerElement);
    mainDiv.appendChild(divOne);

    cardholder.insertBefore(mainDiv, plusbutton);


}    

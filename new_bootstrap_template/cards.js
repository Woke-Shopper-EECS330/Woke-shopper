
function formChanged(){

    var companyName = document.getElementById("company").value;
    var productName = document.getElementById("product").value;
    var price = document.getElementById("price").value;
    var information = document.getElementById("info").value;
    /*var storeNames = document.getElementsByName("")[0].value;*/;
    var product = companyName + '-' + productName;
    var info = price + '-' + information;
    /*info = [price, information, storeNames];*/
    document.getElementById("company-name").innerHTML = companyName;
    document.getElementById("product-name").innerHTML = productName;
    document.getElementById("price-field").innerHTML = price;
    document.getElementById("information").innerHTML = information;
}

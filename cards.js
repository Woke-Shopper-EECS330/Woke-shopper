var cards = [];
var cardsNum = 2

/* this function was found on stackOverflow */
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function makeTimeStamp() {
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth();
	var day = d.getDate();
	//var fuk = d.getMinutes();
	if (d.getHours() >= 12) {
		var hours = d.getHours() - 12;
		var mornOrAfternoon = "pm";
	} else {
		var hours = d.getHours();
		var mornOrAfternoon = "am";
	}
	if (d.getMinutes() >= 10) {
		var minutes = d.getMinutes();
	} else {
		var minutes = "0" + d.getMinutes();
	}

	var dayAndTime = month + "/" + day + "/" + year + " - " + hours + ":" + minutes + mornOrAfternoon;
	return dayAndTime;
}

function addComment() {
		var usernameval = document.getElementById("name").value;
		var timeval = makeTimeStamp();
		var commenttextval = document.getElementById("comment").value;

		var commentHeader = document.getElementById("comment-header");
		var commentContainer = document.getElementById("comment-container");

		var singleComment = document.createElement("div");
		singleComment.setAttribute("class", "single-comment");
		var userName = document.createElement("div");
		userName.setAttribute("id","username");
		if (usernameval == "") {
			userName.innerHTML = "Anonymous";
		} else {
			userName.innerHTML = usernameval;
		}
		var timeStamp = document.createElement("div");
		timeStamp.setAttribute("id", "timestamp");
		timeStamp.innerHTML = timeval;
		var commentText = document.createElement("div");
		commentText.setAttribute("id", "comment-text");
		commentText.innerHTML = commenttextval;

	  singleComment.appendChild(userName);
		singleComment.appendChild(timeStamp);
		singleComment.appendChild(commentText);

		insertAfter(singleComment, commentHeader);
}

function validateComment() {

    var nameval = document.getElementById("name").value;
    var commentval = document.getElementById("comment").value;
    var errormessage = document.createElement("label");
    errormessage.innerHTML = "This field is required";
    errormessage.setAttribute("id", "error-message");
    $('.error').hide();
    if (commentval != "") {
        addComment();
    }

    else {
        if (commentval == "") {
            document.getElementById("commentdiv").appendChild(errormessage)
            return false;
        }
    }
}


function init() {
	for (var i=0; i<cardsNum; i++) {
		volLevels[i] = document.getElementById("card" + i);
	}
};

$('#modalform').submit(function (e) {
    e.preventDefault();
    return false;
});


function validation() {

    var companyval = document.getElementById("company").value;
    var productval = document.getElementById("product").value;
    var priceval = document.getElementById("pricenumber").value;
    var informationval = document.getElementById("info").value;
    var errormessage = document.createElement("label");
    errormessage.innerHTML = "This field is required";
    errormessage.setAttribute("id", "error-message");
    $('.error').hide();
    if ((companyval != "") && (productval != "") && (priceval != "") && (informationval != "")) {
        addCard();
    }

    else {
        if (companyval == "") {
            document.getElementById("companydiv").appendChild(errormessage)
            return false;
        }
        if (productval == "") {
            $("label#product_error").show();
            document.getElementById("productdiv").appendChild(errormessage)
            return false;
        }
        if (priceval == "") {
            $("label#price_error").show();
            document.getElementById("pricediv").appendChild(errormessage)
            return false;
        }
    }
}


function addCard() {
    var companyval = document.getElementById("company").value;
    var productval = document.getElementById("product").value;
    var priceval = document.getElementById("pricenumber").value;
    var informationval = document.getElementById("info").value;

    var plusbutton = document.getElementById("plusbutton");
    var cardholder = document.getElementById("card-holder");
    var mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "col-lg-3 col-md-6 mb-4");
    var divOne = document.createElement("div");
    divOne.setAttribute("class", "card h-100");
    divOne.setAttribute("id", "card" + cardsNum)
    var divTwo = document.createElement("div");
    divTwo.setAttribute("class", "card-body");
    var companyName = document.createElement("h4");
    companyName.innerHTML = companyval;
    var productName = document.createElement("h5");
    productName.innerHTML = productval;
    var priceValue = document.createElement("h5");
    priceValue.innerHTML = "$" + priceval;
    var textInfo = document.createElement("P");
    textInfo.innerHTML = informationval;
    var storesAvailable = document.createElement("P");
    var footerElement = document.createElement("div");
    footerElement.setAttribute("class", "card-footer");
    var commentLink = document.createElement("a");
    commentLink.setAttribute("href", "#");
		commentLink.setAttribute("data-toggle", "modal");
		commentLink.setAttribute("data-target", "#CommentModal");
    commentLink.setAttribute("class", "btn btn-primary");
    commentLink.innerHTML = "Comment";

		/*<div class="card-footer" id = commentbutton>
			<a href="#" data-toggle="modal" data-target="#CommentModal" class="btn btn-primary">Comment</a>
		</div>*/

    cardsNum = cardsNum + 1;

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

    $("#CardModal").modal('toggle');
    document.getElementById("company").value = "";
    document.getElementById("product").value = "";
    document.getElementById("pricenumber").value = "";
    document.getElementById("info").value = "";
    var element = document.getElementById("error-message");
    element.parentNode.removeChild(element);
    var element = document.getElementById("error-message");
    element.parentNode.removeChild(element);
    var element = document.getElementById("error-message");
    element.parentNode.removeChild(element);

}

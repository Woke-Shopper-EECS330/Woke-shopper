var cards = [];
var cardsNum = 3



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

function addComment(x) {
    var nameid = "name" + x;
    var commentid = "comment" + x;
    var commentheaderid = "comment-header" + x;
    var commentcontainerid = "comment-container" + x;
    
    var usernameval = document.getElementById(nameid).value;
	var timeval = makeTimeStamp();
	var commenttextval = document.getElementById(commentid).value;

	var commentHeader = document.getElementById(commentheaderid);
    var commentContainer = document.getElementById(commentcontainerid);

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

function validateComment(x) {

    var nameid = "name" + x;
    var commentid = "comment" + x;
    var commentdivid = "commentdiv" + x;


    var nameval = document.getElementById(nameid).value;
    var commentval = document.getElementById(commentid).value;
    var errormessage = document.createElement("label");
    errormessage.innerHTML = "This field is required";
    errormessage.setAttribute("id", "error-message");
    $('.error').hide();
    if (commentval != "") {
        addComment(x);
    }

    else {
        if (commentval == "") {
            document.getElementById(commentdivid).appendChild(errormessage)
            return false;
        }
    }
    document.getElementById(nameid).value = "";
    document.getElementById(commentid).value = "";
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
    var cardnumberid = cardsNum + 1
    var modalID = "commentModal" + cardnumberid
    var nameid = "name" + cardnumberid
    var commentid = "comment" + cardnumberid
    var commentdivid = "commentdiv" + cardnumberid
    var commentheaderid = "comment-header" + cardnumberid
    var commentcontainerid = "comment-container" + cardnumberid

    //making new modal for comments
    var modalDiv1 = document.createElement("div");
    modalDiv1.setAttribute("class", "modal fade");
    modalDiv1.setAttribute("id", modalID);
    modalDiv1.setAttribute("tabindex", "-1");
    modalDiv1.setAttribute("role", "dialog");
    modalDiv1.setAttribute("aria-labelledby", "myModalLabel");
    modalDiv1.setAttribute("aria-hidden", "true");
    var firstform = document.createElement("form");
    firstform.setAttribute("action", "cardspage.html");
    firstform.setAttribute("method", "get");
    var modalDiv2 = document.createElement("div");
    modalDiv2.setAttribute("class", "modal-dialog");
    modalDiv2.setAttribute("role", "document");
    var modaldiv3 = document.createElement("div");
    modaldiv3.setAttribute("class", "modal-content");

    var modaldiv4 = document.createElement("div");
    modaldiv4.setAttribute("class", "modal-header text-center");
    var commentTitle = document.createElement("h4");
    commentTitle.setAttribute("class", "modal-title w-100 font-weight-bold");
    commentTitle.innerHTML = "Leave a Comment";
    var closebutton = document.createElement("button");
    closebutton.setAttribute("type", "button");
    closebutton.setAttribute("class", "close");
    closebutton.setAttribute("data-dismiss", "modal");
    closebutton.setAttribute("aria-label", "Close");
        var spanbutton = document.createElement("span");
    spanbutton.setAttribute("aria-hidden", "true");
    spanbutton.innerHTML = "&times;"
    closebutton.appendChild(spanbutton);
    modaldiv4.appendChild(commentTitle);
    modaldiv4.appendChild(closebutton);

    var firstsection = document.createElement("section");
    firstsection.setAttribute("id", "comments");
    firstsection.setAttribute("class", "comment-body mx-3");

    var modaldiv5 = document.createElement("div");
    modaldiv5.setAttribute("id", "respond");

    var secondform = document.createElement("form");
    secondform.setAttribute("action", "cardspage.html");
    secondform.setAttribute("method", "post");
    secondform.setAttribute("id", "commentform");

    var modaldivname = document.createElement("div");
    modaldivname.setAttribute("class", "md-form mb-5");
    modaldivname.setAttribute("id", "namediv");
    var namelabel = document.createElement("label");
    namelabel.setAttribute("data-error", "wrong");
    namelabel.setAttribute("data-success", "right");
    namelabel.setAttribute("for", "comment");
    var bolder = document.createElement("b");
    bolder.innerHTML = "Your name"
    namelabel.appendChild(bolder);
    var nameinput = document.createElement("input");
    nameinput.setAttribute("type", "text");
    nameinput.setAttribute("placeholder", "optional");
    nameinput.setAttribute("id", nameid);
    nameinput.setAttribute("class", "form-control validate");
    modaldivname.appendChild(namelabel);
    modaldivname.appendChild(nameinput);

    var modaldivcomment = document.createElement("div");
    modaldivcomment.setAttribute("class", "md-form");
    modaldivcomment.setAttribute("id", commentdivid);
    var commentlabel = document.createElement("label");
    commentlabel.setAttribute("data-error", "wrong");
    commentlabel.setAttribute("data-success", "right");
    commentlabel.setAttribute("for", "comment");
    var boldertwo = document.createElement("b");
    boldertwo.innerHTML = "Your comment";
    commentlabel.appendChild(boldertwo);
    var commentinput = document.createElement("textarea");
    commentinput.setAttribute("type", "text");
    commentinput.setAttribute("id", commentid);
    commentinput.setAttribute("class", "md-textarea form-control")
    commentinput.setAttribute("rows", "2");
    modaldivcomment.appendChild(commentlabel);
    modaldivcomment.appendChild(commentinput);

    var submitdiv = document.createElement("div");
    submitdiv.setAttribute("class", "modal-footer d-flex justify-content-center");
    var submitbutton = document.createElement("button");
    submitbutton.setAttribute("type", "button");
    submitbutton.setAttribute("class", "btn btn-primary");
    submitbutton.onclick = function () { validateComment(cardnumberid); };

    submitbutton.innerHTML = "Submit Comment";
    submitdiv.appendChild(submitbutton);

    var commentsheaderdiv = document.createElement("div");
    commentsheaderdiv.setAttribute("id", commentheaderid);
    var commentheadertext = document.createElement("h4");
    commentheadertext.innerHTML = "Comments";
    commentsheaderdiv.appendChild(commentheadertext);
    var commentcontainerdiv = document.createElement("div");
    commentcontainerdiv.setAttribute("id", commentcontainerid);


    secondform.appendChild(modaldivname);
    secondform.appendChild(modaldivcomment);
    secondform.appendChild(submitdiv);
    secondform.appendChild(commentsheaderdiv);
    secondform.appendChild(commentcontainerdiv);
    modaldiv5.appendChild(secondform);
    firstsection.appendChild(modaldiv5);
    modaldiv3.appendChild(modaldiv4);
    modaldiv3.appendChild(firstsection);
    modalDiv2.appendChild(modaldiv3);
    firstform.appendChild(modalDiv2);
    modalDiv1.appendChild(firstform);
    
    
    //newcardcode
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
    var newidcommentmodal = "#" + modalID;
		commentLink.setAttribute("data-toggle", "modal");
		commentLink.setAttribute("data-target", newidcommentmodal);
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
    cardholder.insertBefore(modalDiv1, plusbutton);

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

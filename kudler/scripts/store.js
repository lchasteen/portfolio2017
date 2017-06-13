/* 	 Author: Jerry Lane Chasteen
	 Date:	 01/10/11
	 
	 These functions allows for advanced navigation and supports the store processes.	 
*/


var cartValues = "";
var currentSelection = "";


////////////////////////////////////////////////////////////////////////////////////
// This function chops up the string returned from function getItemString this
// returns the value from the first part of the string from <e> to the next tag
// <n />.
function getItemPrice(itemNo){
	var fPos = 0;
	var lPos = 0;
	var numberStr = "";
	
	if(itemNo < 0) return -1;
	
	var itemDesc = new String(getItemString(itemNo));
	
	fPos = itemDesc.indexOf("<e>");
	lPos = itemDesc.indexOf("<n />");
	
	if((fPos < 0) || (lPos < 0))return -1;
	
	fPos += 3; // move to position after <e>
	
	numberStr = new String(itemDesc.substring(fPos,lPos));
	if(isNaN(numberStr))return -1;
	
	return numberStr;
}
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  END  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////
// This function chops up the string returned from function getItemString this
// returns the value from the second part of the string from <n /> to the next tag
// <n />.
function getItemName(itemNo){
	var fPos = 0;
	var lPos = 0;
	var nameStr = "";
	
	if(itemNo < 0) return "";
	
	var itemDesc = new String(getItemString(itemNo));
	
	fPos = itemDesc.indexOf("<n />");
	if(fPos < 0) return "";
	fPos += 5;	
	// chop off number
	itemDesc = itemDesc.substring(fPos,itemDesc.length);		
	lPos = itemDesc.indexOf("<n />");
	if(lPos < 0)return "";
	nameStr = itemDesc.substring(0,lPos);	
	return nameStr;

}
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  END  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////
// This function chops up the string returned from function getItemString this
// returns the value from the third part of the string from <n /> to the next tag
// <n />.
function getItemUnit(itemNo){
	var fPos = 0;
	var lPos = 0;
	var nameStr = "";
	
	if(itemNo < 0) return "";
	
	var itemDesc = new String(getItemString(itemNo));
	
	fPos = itemDesc.indexOf("<n />");
	if(fPos < 0) return "";
	fPos += 5;	
	// chop off number
	itemDesc = itemDesc.substring(fPos,itemDesc.length);			
	fPos = itemDesc.indexOf("<n />");
	if(fPos < 0) return "";	
	fPos += 5;
	// chop off item name
	itemDesc = itemDesc.substring(fPos,itemDesc.length);	
	lPos = itemDesc.indexOf("<n />");	
	nameStr = itemDesc.substring(0,lPos);		
	return nameStr;
}
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  END  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////
// This function chops up the string returned from function getItemString this
// returns the value from the third part of the string from <n /> to the next tag
// <n />.
function getItemDescription(itemNo){
	var fPos = 0;
	var lPos = 0;
	var nameStr = "";
	
	if(itemNo < 0) return "";
	
	var itemDesc = new String(getItemString(itemNo));
	
	fPos = itemDesc.lastIndexOf("<n />");
	if(fPos < 0) return "";
	fPos += 5;	
	// get last item between <n /> and </e>
	lPos = itemDesc.indexOf("</e>");
	if(lPos < 0) return "";
	nameStr = itemDesc.substring(fPos,lPos);				
	return nameStr;
}
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  END  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////////
// This function represents the list for the food items.  The custom tags are parsed
// and are independently obtained from the "get" function.
function getItemString(itemNo){
	var itemDesc;
	
	switch(itemNo){
	case 1:
		itemDesc = "<e>7.98<n />Food Item 01<n />(5 pk.)<n />These are really good!</e>"; 
	break;
	case 2:
		itemDesc = "<e>6.98<n />Food Item 02<n />(5 pk.)<n />These are really good!</e>"; 
	break;
	case 3:
		itemDesc = "<e>8.10<n />Food Item 03<n />(10 pk.)<n />These are really good!</e>"; 
	break;
	case 4:
		itemDesc = "<e>7.98<n />Food Item 01<n />(5 pk.)<n />These are really good!</e>"; 
	break;
	case 5:
		itemDesc = "<e>3.98<n />Food Item 05<n />(1 ea.)<n />These are really good!</e>"; 
	break;
	case 6:
		itemDesc = "<e>37.98<n />Food Item 06<n />(20 count)<n />These are really good!</e>"; 
	break;
	case 7:
		itemDesc = "<e>19.98<n />Food Item 07<n />(2 ea.)<n />These are really good!</e>"; 
	break;
	case 8:
		itemDesc = "<e>17.88<n />Food Item 08<n />(5 ea.)<n />These are really good!</e>"; 
	break;
	case 9:
		itemDesc = "<e>9.98<n />Food Item 09<n />(1 pk.)<n />These are really good!</e>"; 
	break;
	case 10:
		itemDesc = "<e>4.98<n />Food Item 010<n />(2 pk.)<n />These are really good!</e>"; 
	break;
	case 11:
		itemDesc = "<e>19.98<n />Food Item 011<n />(2 ea.)<n />These are really good!</e>"; 
	break;
	case 12:
		itemDesc = "<e>7.01<n />Food Item 012<n />(3 ea.)<n />These are really good!</e>"; 
	break;
	case 13:
		itemDesc = "<e>13.98<n />Food Item 013<n />(5 per case)<n />These are really good!</e>"; 
	break;
	case 14:
		itemDesc = "<e>24.98<n />Food Item 014<n />(10 per case.)<n />These are really good!</e>"; 
	break;
	case 15:
		itemDesc = "<e>2.98<n />Food Item 015<n />(2 pk.)<n />These are really good!</e>"; 
	break;
	case 16:
		itemDesc = "<e>1.98<n />Food Item 016<n />(1 ea.)<n />These are really good!</e>"; 
	break;
	case 17:
		itemDesc = "<e>12.98<n />Food Item 017<n />(5 per case)<n />These are really good!</e>"; 
	break;
	case 18:
		itemDesc = "<e>44.98<n />Food Item 018<n />(10 per case.)<n />These are really good!</e>"; 
	break;
	case 19:
		itemDesc = "<e>2.98<n />Food Item 019<n />(2 pk.)<n />These are really good!</e>"; 
	break;
	case 20:
		itemDesc = "<e>1.89<n />Food Item 020<n />(1 ea.)<n />These are really good!</e>"; 
	break;
	case 21:
		itemDesc = "<e>4.98<n />Food Item 021<n />(2 pk.)<n />These are really good!</e>"; 
	break;
	case 22:
		itemDesc = "<e>19.98<n />Food Item 022<n />(2 ea.)<n />These are really good!</e>"; 
	break;
	case 23:
		itemDesc = "<e>7.01<n />Food Item 023<n />(3 ea.)<n />These are really good!</e>"; 
	break;
	case 24:
		itemDesc = "<e>13.98<n />Food Item 024<n />(5 per case)<n />These are really good!</e>"; 
	break;
	case 25:
		itemDesc = "<e>24.98<n />Food Item 025<n />(10 per case.)<n />These are really good!</e>"; 
	break;
	case 26:
		itemDesc = "<e>2.98<n />Food Item 026<n />(2 pk.)<n />These are really good!</e>"; 
	break;
	case 27:
		itemDesc = "<e>1.98<n />Food Item 027<n />(1 ea.)<n />These are really good!</e>"; 
	break;
	case 28:
		itemDesc = "<e>2.98<n />Food Item 028<n />(5 pk.)<n />These are really good!</e>"; 
	break;
	case 29:
		itemDesc = "<e>44.98<n />Food Item 029<n />(10 per case.)<n />These are really good!</e>"; 
	break;
	case 30:
		itemDesc = "<e>22.98<n />Food Item 030<n />(2 pk.)<n />These are really good!</e>"; 
	break;
	case 31:
		itemDesc = "<e>1.89<n />Food Item 031<n />(1 ea.)<n />These are really good!</e>"; 
	break;
	case 32:
		itemDesc = "<e>21.98<n />Food Item 032<n />(5 pk.)<n />These are really good!</e>"; 
	break;
	case 33:
		itemDesc = "<e>44.98<n />Food Item 033<n />(10 per case.)<n />These are really good!</e>"; 
	break;
	case 34:
		itemDesc = "<e>22.98<n />Food Item 034<n />(2 pk.)<n />These are really good!</e>"; 
	break;
	case 35:
		itemDesc = "<e>41.89<n />Food Item 035<n />(5 pk.)<n />These are really good!</e>"; 
	break;
	
	}
	
	return itemDesc;
}
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  END  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////




function clearMenuItem(elementID){
	document.getElementById(elementID).style.display = "none";			
	return;
}
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  END  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function mouseOverItem(elementID){
	document.getElementById(elementID).style.display = "block";	
	setTextItem(elementID);		
	return;
}
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  END  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function mouseOverItemMenu(elementID){
	document.getElementById(elementID).style.display = "block";	
	return;
}
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  END  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function showMenuPanel(elementID){	
	document.getElementById(elementID).style.display = "block"; 	
	return;
}
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  END  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////
// This function makes the panel items disapperar.
function clearAllItems(){
	
	clearMenuItem("bakery_panel");
	clearMenuItem("croissant");
	clearMenuItem("flat_bread");
	clearMenuItem("fruit_tart");
	clearMenuItem("table_loaves");
	clearMenuItem("meat_panel");
	clearMenuItem("beef");
	clearMenuItem("lamb");
	clearMenuItem("poultry");
	clearMenuItem("produce_panel");
	clearMenuItem("seafood");
	clearMenuItem("fruits");
	clearMenuItem("vegetables");
	clearMenuItem("herbs");
	clearMenuItem("dairy_panel");
	clearMenuItem("cheddar");
	clearMenuItem("colby");
	clearMenuItem("swiss");
	clearMenuItem("specialty");
	clearMenuItem("cart");
	clearMenuItem("items");
	return;
}
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  END  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function showMenuItem(menuItem){
	
	window.location = "store.html?name=" + menuItem;	
	
	return;
}
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  END  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////






////////////////////////////////////////////////////////////////////////////////////
// This function gets the value passed from the store_main.html during 
// the onload() event and calls the selectMenuItem() corresponding to the value.
// This function makes it possible for the menu item selected in the store_main page
// to be passed to the store.html page.
function selectFirstMenuItem(){
	var url = window.location.href;
	var urlList;
	var fPos = -1;
	var menuName;
	
	
	urlList = url.split("?");
	fPos = urlList[1].indexOf("=");
	if(fPos < 0)return "";
	fPos++;
	menuName = urlList[1].substring(fPos,urlList[1].length);
	selectMenuItem(menuName);
	return;
}
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  END  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////////
// This function makes the <div>s visible for each store item.  This function clears
// the existing data and calls the setShoppingList() function.
function selectMenuItem(menuItem){	
	clearAllItems();
	
	currentSelection = menuItem;
	switch(menuItem){
		case "bakery":			
			showMenuPanel("bakery_panel");						
			setShoppingList("croissant");
			setShoppingList("flat_bread");
			setShoppingList("fruit_tart");			
			setShoppingList("table_loaves");
		break;
		case "croissant":
			showMenuPanel("bakery_panel");
			setShoppingList("croissant");
		break;
		case "flat_bread":
			showMenuPanel("bakery_panel");
			setShoppingList("flat_bread");
		break;
		case "fruit_tart":
			showMenuPanel("bakery_panel");
			setShoppingList("fruit_tart");
		break;
		case "table_loaves":
			showMenuPanel("bakery_panel");
			setShoppingList("table_loaves");
		break;
		case "meat":			
			showMenuPanel("meat_panel");						
			setShoppingList("beef");
			setShoppingList("lamb");
			setShoppingList("poultry");			
			setShoppingList("seafood");
		break;
		case "beef":
			showMenuPanel("meat_panel");
			setShoppingList("beef");
		break;
		case "lamb":
			showMenuPanel("meat_panel");
			setShoppingList("lamb");
		break;
		case "poultry":
			showMenuPanel("meat_panel");
			setShoppingList("poultry");
		break;
		case "seafood":
			showMenuPanel("meat_panel");
			setShoppingList("seafood");
		break;
		case "produce":
			showMenuPanel("produce_panel");
			setShoppingList("fruits");
			setShoppingList("vegetables");
			setShoppingList("herbs");
		break;
		case "fruits":
			showMenuPanel("produce_panel");
			setShoppingList("fruits");
		break;
		case "vegetables":
			showMenuPanel("produce_panel");
			setShoppingList("vegetables");
		break;
		case "herbs":
			showMenuPanel("produce_panel");
			setShoppingList("herbs");
		break;
		case "dairy":
			showMenuPanel("dairy_panel");
			setShoppingList("cheddar");
			setShoppingList("colby");
			setShoppingList("swiss");
			setShoppingList("specialty");
		break;
		case "cheddar":
			showMenuPanel("dairy_panel");
			setShoppingList("cheddar");			
		break;
		case "colby":
			showMenuPanel("dairy_panel");			
			setShoppingList("colby");			
		break;
		case "swiss":
			showMenuPanel("dairy_panel");
			setShoppingList("swiss");			
		break;
		case "specialty":
			showMenuPanel("dairy_panel");
			setShoppingList("specialty");
		break;
		case "cart":
			showMenuPanel("cart");			
			setShoppingList("items");
		break;
	}
	return;
}
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  END  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////






////////////////////////////////////////////////////////////////////////////////////
// This function returns the HTML string for the store items and sets the <div>s 
// for each category.
function setShoppingList(elementID) {
	var message = "";
	
	showMenuPanel(elementID);
	
	
	
	switch(elementID){
	
		case "croissant":					
			
			message = "<div class=\"store_item\">";			
			message += "<form name=\"form1\">";
			message += setHTMLShoppingList(1,"form1") + "<br /><br />";			
			message += setHTMLShoppingList(2,"form1") + "<br /><br />";						
			message += "</form></div>";			
		break;
		
		case "flat_bread":
			
			message = "<div class=\"store_item\">";			
			message += "<form name=\"form2\">";
			message += setHTMLShoppingList(3,"form2") + "<br /><br />";			
			message += setHTMLShoppingList(4,"form2") + "<br /><br />";			
			message += setHTMLShoppingList(5,"form2") + "<br /><br />";			
			message += "</form></div>";
		break;
		
		case "fruit_tart":
			message = "<div class=\"store_item\">";			
			message += "<form name=\"form3\">";
			message += setHTMLShoppingList(6,"form3") + "<br /><br />";			
			message += setHTMLShoppingList(7,"form3") + "<br /><br />";			
			message += setHTMLShoppingList(8,"form3") + "<br /><br />";			
			message += "</form></div>";
		break;
		case "table_loaves":
			message = "<div class=\"store_item\">";			
			message += "<form name=\"form4\">";
			message += setHTMLShoppingList(9,"form4") + "<br /><br />";			
			message += setHTMLShoppingList(10,"form4") + "<br /><br />";						
			message += "</form></div>";
		break;
		
		case "beef":			
			
			message = "<div class=\"store_item\">";			
			message += "<form name=\"form5\">";
			message += setHTMLShoppingList(11,"form5") + "<br /><br />";			
			message += setHTMLShoppingList(12,"form5") + "<br /><br />";			
			message += setHTMLShoppingList(13,"form5") + "<br /><br />";			
			message += "</form></div>";			
		break;
		
		case "lamb":			
			message = "<div class=\"store_item\">";			
			message += "<form name=\"form6\">";
			message += setHTMLShoppingList(14,"form6") + "<br /><br />";			
			message += setHTMLShoppingList(15,"form6") + "<br /><br />";						
			message += "</form></div>";
		break;
		
		case "poultry":
			message = "<div class=\"store_item\">";			
			message += "<form name=\"form7\">";
			message += setHTMLShoppingList(16,"form7") + "<br /><br />";			
			message += setHTMLShoppingList(17,"form7") + "<br /><br />";						
			message += "</form></div>";
		break;
		case "seafood":
			message = "<div class=\"store_item\">";			
			message += "<form name=\"form8\">";
			message += setHTMLShoppingList(18,"form8") + "<br /><br />";			
			message += setHTMLShoppingList(19,"form8") + "<br /><br />";						
			message += "</form></div>";
		break;
		case "fruits":			
			message = "<div class=\"store_item\">";			
			message += "<form name=\"form9\">";
			message += setHTMLShoppingList(20,"form9") + "<br /><br />";			
			message += setHTMLShoppingList(21,"form9") + "<br /><br />";						
			message += "</form></div>";
		break;
		
		case "vegetables":
			message = "<div class=\"store_item\">";			
			message += "<form name=\"form10\">";
			message += setHTMLShoppingList(22,"form10") + "<br /><br />";			
			message += setHTMLShoppingList(23,"form10") + "<br /><br />";						
			message += "</form></div>";
		break;
		case "herbs":
			message = "<div class=\"store_item\">";			
			message += "<form name=\"form11\">";
			message += setHTMLShoppingList(24,"form11") + "<br /><br />";			
			message += setHTMLShoppingList(25,"form11") + "<br /><br />";						
			message += "</form></div>";
		break;
		case "cheddar":
			message = "<div class=\"store_item\">";			
			message += "<form name=\"form12\">";
			message += setHTMLShoppingList(26,"form12") + "<br /><br />";			
			message += setHTMLShoppingList(27,"form12") + "<br /><br />";						
			message += "</form></div>";
		break;
		case "colby":			
			message = "<div class=\"store_item\">";			
			message += "<form name=\"form13\">";
			message += setHTMLShoppingList(28,"form13") + "<br /><br />";			
			message += setHTMLShoppingList(29,"form13") + "<br /><br />";						
			message += "</form></div>";
		break;
		
		case "swiss":
			message = "<div class=\"store_item\">";			
			message += "<form name=\"form14\">";
			message += setHTMLShoppingList(30,"form14") + "<br /><br />";			
			message += setHTMLShoppingList(31,"form14") + "<br /><br />";						
			message += "</form></div>";
		break;
		case "specialty":
			message = "<div class=\"store_item\">";			
			message += "<form name=\"form15\">";
			message += setHTMLShoppingList(32,"form15") + "<br /><br />";			
			message += setHTMLShoppingList(33,"form15") + "<br /><br />";						
			message += setHTMLShoppingList(34,"form15") + "<br /><br />";			
			message += setHTMLShoppingList(35,"form15") + "<br /><br />";									
			message += "</form></div>";
		break;
		case "items":
			message = "<div class=\"store_item\">";			
			message += "<form name=\"form16\">";			
			message += createCart("form16");			
			message += "</form></div>";						
			message += "<div class=\"store_item\">";			
			message += "<form name=\"form17\">";		
			message += "<table cellspacing=\"20\">";
			message += "<tr>";
			message += "<td><b>Email: *</b></td><td><input type=\"text\" name=\"email\" size=\"25\" /></td>";						
			message += "</tr>";
			message += "<tr>";
			message += "<td><b>Password: *</b></td><td><input type=\"password\" name=\"pword\" size=\"25\" /></td>";			
			message += "</tr>";
			message += "<tr>";
			message += "<td><b>First Name: *</b></td><td><input type=\"text\" name=\"fname\" size=\"25\" /></td>";						
			message += "</tr>";			
			message += "<tr>";
			message += "<td><b>Last Name: *</b></td><td><input type=\"text\" name=\"lname\" size=\"25\" /></td>";						
			message += "</tr>";						
			message += "<tr>";			
			message += "<td><b><u>Sub Total:</u></b></td><td>$" + getCartTotal().toFixed(2) + "</td>";
			message += "</tr>";			
			message += "<tr>";						
			message += "<td><input type=\"button\" name=\"button1\" value=\" Complete Order \" onclick=\"completePurchase();\" /></td><br /><br />";							
			message += "</tr>";
			message += "</table>";
			message += "</form></div>";
		break;
		
	}
		
		document.getElementById(elementID).innerHTML = message;				
		return;
}
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  END  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////
// This function validates the form information and submits the info to the server.
// Complets the customers purchase.
function completePurchase(){
	var total = 0;
	
	total = getCartTotal();
	if(total > 0){
		if(!validatePassword())return false;
		if(!validateEmail())return false;
		if(!validateCustomerNames())return false;
		alert("Thank you for your purchase of $" + total.toFixed(2) + "! Next Step: Open HTTPS secure connection and accept payment information!");
		return true;
	}
	return true;
}
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  END  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////






function validateEmail(){
	var eMail = document.form17.email.value.trim();
	
	if(eMail.length < 3){
		alert("Invald field: \"Email\".  This is a required field must contain a value.");
		document.form17.email.focus();
		return false;
	}
	
	if((eMail.indexOf(".") > 2) && (eMail.indexOf("@") > 0)){
		document.form17.email.value = eMail;
		return true;
	}
	
	alert("Invald field: \"Email\".  You must submit a valid email address such as: example@yourdomain.com.");
	document.form17.email.focus();
	return false;

}
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  END  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


function validatePassword(){
	var pw = document.form17.pword.value.trim();
	
	if(pw.length < 6){
		alert("Invald field: \"Password\".  This is a required field must contain a value with six or more characters. You must have at lease one alpha numeric character. Example: succ1f9b");
		document.form17.pword.focus();
		return false;
	}
	
	if(containsCharacters("1234567890",pw)){
		return true;
	}
	
	alert("Invald field: \"Password\".  This is a required field must contain a value with six or more characters. You must have at lease one alpha numeric character. Example: succ1f9b");
	document.form17.pword.focus();
	return false;
}
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  END  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


function validateCustomerNames(){
	var firstName = "";
	var lastName = "";
	var restFirst = "";
	var restLast = "";
	
	firstName = document.form17.fname.value.trim();
	lastName = document.form17.lname.value.trim();
	
	if(firstName.length < 1){
		alert("Invald field: \"First Name\".  This is a required field must contain a value.");
		document.form17.fname.focus();
		return false;
	}
	if(lastName.length < 1){
		alert("Invald field: \"Last Name\".  This is a required field and must contain a value.");
		document.form17.lname.focus();
		return false;
	}
	
	if (containsCharacters("?{}[]+-=|\"/<>,.:;@#!$%^&*()", firstName)){
		alert("Invald field: \"First Name\".  This is a required field and must not contain any invalid characters such as ?{}[]+-=|\"/<>,.:;@#!$%^&*()");
		document.form17.fname.focus();
		return false;	
	}
	if (containsCharacters("?{}[]+-=|\"/<>,.:;@#!$%^&*()", lastName)){
		alert("Invald field: \"Last Name\".  This is a required field and must not contain any invalid characters such as ?{}[]+-=|\"/<>,.:;@#!$%^&*()");
		document.form17.lname.focus();
		return false;
	}
	
	
	
	//make the first letter of the first and last name uppercase and the rest lowercase
	restFirst = firstName.substring(1, firstName.length);
	restFirst = restFirst.toLowerCase();
	firstName = firstName.charAt(0).toUpperCase() + restFirst;
	
	restLast = lastName.substring(1, lastName.length);
	restLast = restLast.toLowerCase();
	lastName = lastName.charAt(0).toUpperCase() + restLast;
	
	document.form17.fname.value = firstName;
	document.form17.lname.value = lastName;
	
	return true;
}
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  END  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////





function containsCharacters(contains, toTest){

	if(contains.length < 1) return false;
	if(toTest.length < 1) return false;
	
	for(var i = 0; i < contains.length; i++){
		if(toTest.indexOf(contains.charAt(i)) >= 0)return true;
	}	
	return false;
}

////////////////////////////////////////////////////////////////////////////////////
// This function returns the image, text, and qty input text box as well as the
// remove from cart button for the particular item and form.  This will append to the
// customers shopping chart.
function getHTMLCartItem(itemNo, itemQTY, formName){
	var inputName = "";
	var message = "";
	
	inputName = "item" + itemNo;
	
	message += "<img src=\"internet/images/store_images/food.jpg\" alt=\"Bakery Image\" width=\"50\" height=\"50\" style=\"float: left; margin:0 10px 0 0; border: #00ff00 2px solid;\" />";			
	message += "$" + getItemPrice(itemNo) + ", " + getItemName(itemNo) + "<br />" + getItemDescription(itemNo) + "<br /><br />"; 
	message += "Add: <input type=\"text\" name=\"" + inputName + "\" size=\"1\" value=" + itemQTY + " /> " + getItemUnit(itemNo);			
	message += "&nbsp<input type=\"button\" name=\"button1\" value=\" Remove \" onclick=\"removeCartItem(document."+ formName + "." + inputName +".value, " + itemNo + ");\" /><br /><br />";				
	
	return message;

}
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  END  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


function createCart(formName){
	var arrayLen = 0;
	var cartString = "";
	var iQty = 0;
	var iName = 0;
	
	arrayLen = cartValues.length;
	if(arrayLen <= 0){
		return "";
	}else{
		var message = cartValues.split(";");
		for(var i = 0; i < (message.length -1); i++){
			var itemQty = message[i].split("<n>");
			iQty = parseInt(itemQty[0]);
			iName = parseInt(itemQty[1]);
			if(iName > 0){
				if(i == 0)cartString = getHTMLCartItem(iName,iQty,formName);
				else cartString += getHTMLCartItem(iName,iQty,formName);
			}
		}
	}

	return cartString;
}


////////////////////////////////////////////////////////////////////////////////////
// This function returns the image, text, and qty input text box as well as the
// add to cart button for the particular item and form.
function setHTMLShoppingList(itemNo, formName){
	var inputName = "";
	var message = "";
	
	
	inputName = "item" + itemNo;
	if(isItemInList(itemNo)){
		message += "<img src=\"internet/images/store_images/food.jpg\" alt=\"Bakery Image\" width=\"50\" height=\"50\" style=\"float: left; margin:0 10px 0 0; border: #00ff00 2px solid;\" />";			
		message += "$" + getItemPrice(itemNo) + ", " + getItemName(itemNo) + "<br />" + getItemDescription(itemNo) + "<br /><br />"; 
		message += "Add: <input type=\"text\" name=\"" + inputName + "\" size=\"1\" value=\"" + getQtyFromList(itemNo) + "\" /> " + getItemUnit(itemNo);			
		message += "&nbsp<input type=\"button\" name=\"button1\" value=\" Remove \" onclick=\"removeCartItem(document."+ formName + "." + inputName +".value, " + itemNo + ");\" />";				
		message += "&nbsp<input type=\"button\" name=\"button1\" value=\" Review Cart \" onclick=\"selectMenuItem('cart');\" />";	
		
	}else{
		message += "<img src=\"internet/images/store_images/food.jpg\" alt=\"Bakery Image\" width=\"50\" height=\"50\" style=\"float: left; margin:0 10px 0 0;\" />";			
		message += "$" + getItemPrice(itemNo) + ", " + getItemName(itemNo) + "<br />" + getItemDescription(itemNo) + "<br /><br />"; 
		message += "Add: <input type=\"text\" name=\"" + inputName + "\" size=\"1\" value=\"0\" /> " + getItemUnit(itemNo);			
		message += "&nbsp<input type=\"button\" name=\"button1\" value=\" To Cart \" onclick=\"setCartValues(document."+ formName + "." + inputName +".value, " + itemNo + ", false);\" />";				
		message += "&nbsp<input type=\"button\" name=\"button1\" value=\" Checkout \" onclick=\"setCartValues(document."+ formName + "." + inputName +".value, " + itemNo + ", true);\" />";				
	}
	return message;
}
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  END  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////////
// This function checks to see if the variable itemNo is in the shopping cart list.
function isItemInList(itemNo){

	var message = cartValues.split(";");
	for(var i = 0; i < (message.length -1); i++){
		var itemQty1 = message[i].split("<n>");
		var segQty = parseInt(itemQty1[0]);
		var segItem = parseInt(itemQty1[1]);
		// if you have already selected this item then add the quantities together and set 
		// the flag value
		if(segItem == itemNo){			
			return true;
		}			
	}

	return false;
}
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  END  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function getCartTotal(){
	var subTotal = 0;
	
	var message = cartValues.split(";");
	for(var i = 0; i < (message.length -1); i++){
		var itemQty1 = message[i].split("<n>");
		var segQty = parseInt(itemQty1[0]);
		var segItem = parseInt(itemQty1[1]);
		if(segItem > 0)	subTotal = subTotal + (segQty * getItemPrice(segItem));
		
	}
	return subTotal;

}


function getQtyFromList(itemNo){
	var message = cartValues.split(";");
	for(var i = 0; i < (message.length -1); i++){
		var itemQty1 = message[i].split("<n>");
		var segQty = parseInt(itemQty1[0]);
		var segItem = parseInt(itemQty1[1]);
		// if you have already selected this item then add the quantities together and set 
		// the flag value
		if(segItem == itemNo){
			return segQty;
		}
	}
	return 0;

}
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  END  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


function setCartValues(txtQTY, itemNumber, isCheckOut){
	var arrayLen = 0;	
	var qty = 0;
	var flagVal = false;
	
	if(isNaN(txtQTY)){
		alert("The value entered in the QTY field must be numeric.");
		return false;
	}
	if(isNaN(itemNumber)) {
		alert("Error itemNumber must be a numeric value.");
		return false;
	}
	
	qty = parseInt(txtQTY);	
	if(qty <= 0){
		alert("You must enter a numeric value in the QTY field.");
		return false;
	}
	
	arrayLen = cartValues.length;
	if(arrayLen <= 0){
		cartValues = txtQTY + "<n>" + itemNumber + ";";
	}else{
		var message = cartValues.split(";");
		for(var i = 0; i < (message.length -1); i++){
			var itemQty1 = message[i].split("<n>");
			var segQty = parseInt(itemQty1[0]);
			var segItem = parseInt(itemQty1[1]);
			// if you have already selected this item then add the quantities together and set 
			// the flag value
			if(segItem == parseInt(itemNumber)){
				segQty += qty;
				message[i] = segQty + "<n>" + itemNumber;				
				flagVal = true;				
			}			
		}
		// set the cart values to the message segements
			if(flagVal){
				cartValues = "";
				for(var i = 0; i < (message.length -1); i++){
					if(i == 0) cartValues = message[i] + ";";
					else cartValues += message[i] + ";";					
				}
				//alert(cartValues);
			}else cartValues += txtQTY + "<n>" + itemNumber + ";";
	}

	if(isCheckOut) {
		selectMenuItem("cart");
	}else refreshCart();
	
	return true;
}
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  END  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function refreshCart(){
	selectMenuItem(currentSelection);
	
}

function removeCartItem(txtQTY, itemNumber){
	var arrayLen = 0;
	var flagVal = false;
	
	if(isNaN(txtQTY)){
		alert("The value entered in the QTY field must be numeric.");
		return false;
	}
	if(isNaN(itemNumber)) {
		alert("Error itemNumber must be a numeric value.");
		return false;
	}
	
	qty = parseInt(txtQTY);	
	if(qty <= 0){
		alert("You must enter a numeric value in the QTY field.");
		return false;
	}
	
	arrayLen = cartValues.length;
	if(arrayLen <= 0){
		return false;
	}else {
		var message = cartValues.split(";");
		for(var i = 0; i < (message.length -1); i++){
			var itemQty1 = message[i].split("<n>");
			var segQty = parseInt(itemQty1[0]);
			var segItem = parseInt(itemQty1[1]);
			// if you have already selected this item then add the quantities together and set 
			// the flag value
			if(segItem == parseInt(itemNumber)){
				if(qty > segQty){
					alert("Quantity exceeds the amount in cart.");
					return false;
				}
				if(qty < segQty) {
					segQty = segQty - qty;
					message[i] = segQty + "<n>" + itemNumber;				
					
					flagVal = true;				
				}else if(qty == segQty){
					message[i] = "0<n>0";
					flagVal = true;
				}
				
			}			
		}
		// set the cart values to the message segements
			if(flagVal){
				cartValues = "";
				for(var i = 0; i < (message.length -1); i++){
					if(i == 0) cartValues = message[i] + ";";
					else cartValues += message[i] + ";";					
				}
				setShoppingList("items");
				
			}

	}
	
	 refreshCart();
	
}

////////////////////////////////////////////////////////////////////////////////////
// This function sets the text for the "message_panel" on the store_main.html page
// basically you pass the elementID argument to this function to set the message
// for the panel.
function setTextItem(elementID){
	var message;
	
			
	switch(elementID){
		case "bakery":
			message = "";
			message = "<img src=\"internet/images/bread1.jpg\" alt=\"Bakery Image\" width=\"150\" height=\"150\" style=\"padding:0px 25px 5px 5px;float:right;\"/>";
			message += "<p class=\"spacing\">Each of our stores has its own modern European Style Bakery. ";
			message += "In the wee hours of the morning, our bakers begin mixing their dough and creating fresh breads ";
			message += "and pastries including fruit tarts, table loaves, flat bread and the flakiest croissants in Southern California. ";
			message += "Our breads and pastries are made from old world recipes and the finest ingredients � Irish butter, organic eggs and unbleached flour. ";
			message += "Kudler's bakery products do not contain preservatives. </p>";
	
		break;
		case "meat":
			message = "";
			message = "<img src=\"internet/images/meat.jpg\" alt=\"Bakery Image\" width=\"150\" height=\"150\" style=\"padding:0px 25px 5px 5px;float:right;\"/>";
			message += "<p class=\"spacing\">Our meat and seafood are procured from certified organic producers. ";
			message += "The meat and seafood products are fresh and prepared in the store to your order. <br /><br />";
			message += "Order online and have our fresh products sent straight to your location.</p>";			
	
		break;
		case "produce":
			message = "";
			message = "<img src=\"internet/images/yams.jpg\" alt=\"Bakery Image\" width=\"150\" height=\"150\" style=\"padding:0px 25px 5px 5px;float:right;\"/>";
			message += "<p class=\"spacing\">Our produce department offers over 350 fresh fruits, vegetables, herbs and spices. ";
			message += "We stock 16 different varieties of apples as well as a wide range of tropical fruits from around the world. ";
			message += "Experienced cooks know that the right combinations of herbs and spices will turn a good meal into a great meal. Herbs and spices are most flavorful when they are fresh, and we carry the freshest herbs and spices in the area. ";
			message += "We know that our customers are interested in maintaining a healthy lifestyle while also trying to live within their budgets. We address these concerns by offering most of our produce in both organic and non-organic varieties.</p>";			
	
		break;
		case "dairy":
			message = "";
			message = "<img src=\"internet/images/cheese2.jpg\" alt=\"Bakery Image\" width=\"150\" height=\"150\" style=\"padding:0px 25px 5px 5px;float:right;\"/>";
			message += "<p class=\"spacing\">Our stores carry a complete line of the finest Dairy products including Irish butter and organic milk. ";
			message += "We are known for our wide assortment of gourmet cheeses. We carry over 250 varieties of cheese from 21 countries. Our stores offer cheeses made from cow, goat and sheep's milk. We will also special order any cheese you may want that we do not carry in stock. ";
		break;
	}
	
		document.getElementById("message_panel").innerHTML = message;				
	return;
}
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  END  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

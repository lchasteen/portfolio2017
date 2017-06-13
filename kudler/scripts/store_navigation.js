

function clearMenuItem(elementID){
	document.getElementById(elementID).style.display = "none";		
	return;
}

function mouseOverItem(elementID){
	document.getElementById(elementID).style.display = "block";	
	setTextItem(elementID);		
	return;
}

function selectMenuItem(elementID){	
	
	document.getElementById(elementID).style.display = "block";
	
	return;
}

function clearAllItems(){
	
	clearMenuItem("bakery_panel");
	clearMenuItem("croissant");
	clearMenuItem("flat_bread");
	clearMenuItem("fruit_tarts");
	clearMenuItem("table_loaves");
	return;
}

function showMenuItem(menuItem){
	clearAllItems();
	switch(menuItem){
		case "bakery":
			selectMenuItem("bakery_panel");
			selectMenuItem("croissant");
			selectMenuItem("flat_bread");
			selectMenuItem("fruit_tarts");
			selectMenuItem("table_loaves");
		break;
		case "croissant":
			selectMenuItem("bakery_panel");
			selectMenuItem("croissant");
		break;
		case "flat-bread":
			selectMenuItem("bakery_panel");
			selectMenuItem("flat_bread");
		break;
		case "fruit-tarts":
			selectMenuItem("bakery_panel");
			selectMenuItem("fruit_tarts");
		break;
		case "table-loaves":
			selectMenuItem("bakery_panel");
			selectMenuItem("table_loaves");
		break;
	}
	return;
}

function setShoppingList(elementID, category) {
	var message;
	
	
	switch(category){
		case "croissants":
			message = "<p class=\"spacing\"><img src=\"internet/images/food.jpg\" alt=\"Bakery Image\" width=\"50\" height=\"50\" style=\"padding:5px 25px 5px 5px;float:left;\"/>";
			message += "<form name=\"shopping\" action=\"\" />";
			message += "Food Item 001: <input type=\"text\" name=\"item_01\" />";			
			message += "<input type=\"button\" onClick=\"addToCart('item_01','croissants')\" />";
			message += "</p>";
		break;
		case "flat-bread":
		break;
		case "fruit-tarts":
		break;
		case "table-loaves":
		break;
	}
		return;
}
/*
function getFoodItem(item){
	var item_text;
	
	
	switch(item}{
		case 1:
			item_text = "<form name="item1" action="something.pl" onsubmit="return checkOut()"><input type=text size=20 name=name>
		break;
		case 2:
		break;
		case 3:
		break;
		case 4:
		break;
		case 5:
		break;
		case 6:
		break;
		case 7:
		break;
		case 8:
		break;
		case 9:
		break;
		case 10:
		break;
	}
	return item_text;
}

*/
function setCartValues(item, qty){
	
	return true;
}

function setTextItem(elementID){
	var message;
	
			
	switch(elementID){
		case "bakery":
			message = "";
			message = "<img src=\"internet/images/bread1.jpg\" alt=\"Bakery Image\" width=\"150\" height=\"150\" style=\"padding:0px 25px 5px 5px;float:right;\"/>";
			message += "<p class=\"spacing\">Each of our stores has its own modern European Style Bakery. ";
			message += "In the wee hours of the morning, our bakers begin mixing their dough and creating fresh breads ";
			message += "and pastries including fruit tarts, table loaves, flat bread and the flakiest croissants in Southern California. ";
			message += "Our breads and pastries are made from old world recipes and the finest ingredients – Irish butter, organic eggs and unbleached flour. ";
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
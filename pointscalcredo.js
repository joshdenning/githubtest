function heropts() {		//Hero Points//
	var heroval = document.getElementById("heropts").value;
    var node = document.createElement("FORM");
	var quantity = document.createElement("SELECT");
	quantity.setAttribute("id","heroqty");
	quantity.setAttribute("onchange","displaypts()");
		var quanopt1 = document.createElement("OPTION");
		quanopt1.value = "1";
		quanopt1.innerHTML = "1";
		quantity.appendChild(quanopt1);
		
		var quanopt2 = document.createElement("OPTION");
		quanopt2.value = "2";
		quanopt2.innerHTML = "2";
		quantity.appendChild(quanopt2);
		
	var textnode = document.createTextNode("Points: " + heroval);
	var unitnode = document.createTextNode("Unit size:");
	var br = document.createElement('br');
	var delbut = document.createElement("button");
	delbut.setAttribute("type","button");
	delbut.setAttribute("onClick","dltme(this)");
	delbut.innerHTML = "delete";
    node.appendChild(textnode);
	node.appendChild(br);
	node.appendChild(unitnode);
	node.appendChild(quantity);
	node.appendChild(delbut);
    document.getElementById("demo").appendChild(node);
}

function generalpts() { //Unit Points//
	var generalthing = document.getElementById("genpts").value;
    var node = document.createElement("FORM");
	var quantity = document.createElement("SELECT");
	quantity.setAttribute("id","genquan");
	quantity.setAttribute("onchange","displaypts()");
		var quanopt1 = document.createElement("OPTION");
		quanopt1.value = "1";
		quanopt1.innerHTML = "1";
		quantity.appendChild(quanopt1);
		
		var quanopt2 = document.createElement("OPTION");
		quanopt2.value = "2";
		quanopt2.innerHTML = "2";
		quantity.appendChild(quanopt2);
		
	var textnode = document.createTextNode("Points: " + generalthing);
	var unitnode = document.createTextNode("Unit size:");
	var br = document.createElement('br');
	var delbut = document.createElement("button");
	delbut.setAttribute("type","button");
	delbut.setAttribute("onClick","dltme(this)");
	delbut.innerHTML = "delete";
    node.appendChild(textnode);
	node.appendChild(br);
	node.appendChild(unitnode);
	node.appendChild(quantity);
	node.appendChild(delbut);
    document.getElementById("demo").appendChild(node);
}

function generalpts() { //Battalions//
	var generalthing = document.getElementById("genpts").value;
    var node = document.createElement("FORM");
	var quantity = document.createElement("SELECT");
	quantity.setAttribute("id","genquan");
	quantity.setAttribute("onchange","displaypts()");
		var quanopt1 = document.createElement("OPTION");
		quanopt1.value = "1";
		quanopt1.innerHTML = "1";
		quantity.appendChild(quanopt1);
		
		var quanopt2 = document.createElement("OPTION");
		quanopt2.value = "2";
		quanopt2.innerHTML = "2";
		quantity.appendChild(quanopt2);
		
	var textnode = document.createTextNode("Points: " + generalthing);
	var unitnode = document.createTextNode("Unit size:");
	var br = document.createElement('br');
	var delbut = document.createElement("button");
	delbut.setAttribute("type","button");
	delbut.setAttribute("onClick","dltme(this)");
	delbut.innerHTML = "delete";
    node.appendChild(textnode);
	node.appendChild(br);
	node.appendChild(unitnode);
	node.appendChild(quantity);
	node.appendChild(delbut);
    document.getElementById("demo").appendChild(node);
}

function dltme(item) {
	 item.parentElement.parentElement.removeChild(item.parentElement);
}


      function displaypts() {
		var win = heroqty.value * genpts.value;
		document.getElementById("answerpts").innerHTML = "Points: " + win;
		
		}
		
	
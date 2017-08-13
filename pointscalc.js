
function generalpts() {
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
		var win = genquan.value * genpts.value;
		var create = document.createElement("P");
		var txtnode = document.createTextNode("Points: " + win);
		create.appendChild(txtnode);
		document.getElementById("answerpts").appendChild(create);

		}
		
	
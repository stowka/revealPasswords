(function () {
	var inputs = document.getElementsByTagName( "input" );
	var pass = "Passwords :\n";
	for ( var i = 0; i < inputs.length; i++ ) {
		if ( inputs[i].type.toLowerCase() === "password" )  {
			pass += inputs[i].value;
			pass += "\n";
		}
	}
	alert(pass);
})();
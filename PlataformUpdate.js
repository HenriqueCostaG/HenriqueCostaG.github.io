document.addEventListener ('keypress', closeGame)


var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


if ( isMobile.any() ) {
	
	location.replace("https://henriquecostag.github.io/Home.html");
} else{
	
	var r = confirm("Para andar utilize as setas do teclado. Caso queira ir direto para o portifólio, pressione 'S'");

	if (r == true) {
	  document.getElementById("canvas").focus();
	} else {
	  document.getElementById("canvas").focus();
	}

}


function closeGame(event){
var keyName = event.key;
  if ( keyName == "s"){
	location.replace("https://henriquecostag.github.io/Home.html");
  }
}

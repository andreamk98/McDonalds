$(document).ready(function(){
	$('.sidenav').sidenav();

	$('.slider').slider({
  	//Cambiamos propiedades
  	indicators: false,
  	interval: 2000,
  	duration: 2000
  });

	$('.tabs').tabs({
		duration: 200
	});

	$('.collapsible').collapsible();

	$('input.autocomplete').autocomplete({
		data: {
			"Diseño Web": null,
			"Redes de Datos": null,
		},

		minLength: 3
	});
});
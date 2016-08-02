/*Jquery*/

//console.log(hey);

var mdp = []; //création d'un tableau vide

$.ajax({
    url: 'http://docusland.fr/code-academie/js_bruteforce/data/dico.txt', // La ressource ciblée
    success: function(result){
		mdp = result.split("\n");
		testPassword(mdp[i]);
}
});

$(document).ready(function() {
	for (var i = 0; i < mdp.length; i++) {
		var url ='http://docusland.fr/code-academie/js_bruteforce/';  //  ../?password=
	}
});


/*Pas réussi ce challenge*/


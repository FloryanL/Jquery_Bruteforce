/*Jquery*/
//console.log();

var mdp = {}

$.ajax({
    url: 'http://docusland.fr/code-academie/js_bruteforce/data/dico.txt', // La ressource ciblée
    success: function(result){
		mdp = result.split("\n");
		testPassword(mdp[i]);
}
});
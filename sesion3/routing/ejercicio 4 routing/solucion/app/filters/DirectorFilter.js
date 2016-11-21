var directorFilterApp = angular.module('DirectorFilter',[]);

directorFilterApp.filter('DirectorFilter',function(){
	return function (directores,cadena){
		var result=[];
		if  ((directores) && (cadena)){
			for (var i=0;i<directores.length;i++){
				if ((directores[i].nombre.toLowerCase().indexOf(cadena.toLowerCase())>-1)){
					result.push(directores[i]);
				}
			}
			return result;
		} else {
			return directores;
		}
	};
});

directorFilterApp.filter('ChangeCaps',function(){
	return function (cadena,caps){
	if(typeof(cadena)!='undefined'){
		if (caps=="mays"){
			return cadena.toUpperCase();
		} else {
			return cadena;
		}
	}
	};
});
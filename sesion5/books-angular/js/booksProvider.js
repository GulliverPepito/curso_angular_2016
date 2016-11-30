(function(myModule){
	function provider(){

		var path;
		this.setPath=function(paramPath){
			path = paramPath;
        };
		
		this.$get = ['$http','$q', function($http,$q) {
			return {
				getBooks: function() {
					console.log('path '+path)
					var books1=$http.get(path);
					var books2=$http.get(path);
					
					return $q.all([books1,books2]).then(function(result){
						var books=[];
						angular.forEach(result,function(response){
							books.push(response.data);
						});
						
						return books;
					}).then(function(books){
						var finalbooks=books[0].concat(books[1]);
						return finalbooks;
					})
					
					
				}
			};
		}];
	}
	myModule.provider('booksProvider',provider);
}(angular.module('myApp')));
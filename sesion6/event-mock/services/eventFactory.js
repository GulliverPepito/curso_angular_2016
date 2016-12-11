angular.module('eventApp')
.factory('eventFactory',function($http,$q){

	var eventFactory={}
	
	eventFactory.getAllEvents=function(){
		var deferred=$q.defer();
		$http.get('events').then(function(response){
			deferred.resolve(response.data);
			console.log('eventFactory.getAllEvents',response.data);
		},function(error){
			deferred.reject(error);
			console.log('eventFactory.getAllEvents',error);
		 });
		return deferred.promise;
		
	}
	
	eventFactory.createEvent=function(event){
		var deferred=$q.defer();
		$http.post('add-event',event).then(function(response){
			deferred.resolve(response.data);
			console.log('eventFactory.createEvent',response.data);
		},function(error){
			deferred.reject(error);
			console.log('eventFactory.createEvent',error);
		 });
		return deferred.promise;
		
	}
	
	eventFactory.deleteEvent=function(event){
		var deferred=$q.defer();
		console.log('event-name'+event.name);
		$http.delete('delete/'+event.name).then(function(response){
			deferred.resolve(response.data);
			console.log('eventFactory.deleteEvent',response.data);
		},function(error){
			deferred.reject(error);
			console.log('eventFactory.deleteEvent',error);
		 });
		return deferred.promise;
		
	}
	
	eventFactory.updateEvent=function(event){
		var deferred=$q.defer();
		$http.put('update-event',event).then(function(response){
			deferred.resolve(response.data.events);
			console.log('eventFactory.getAllEvents',response.data);
		},function(error){
			deferred.reject(error);
			console.log('eventFactory.getAllEvents',error);
		 });
		return deferred.promise;
		
	}
	
	return eventFactory;
	
});

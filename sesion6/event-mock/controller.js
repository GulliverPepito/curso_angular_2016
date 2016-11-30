angular.module('eventApp')
.controller('eventController',['eventFactory','$location',function(eventFactory,$location){

	var vm=this;
	
	vm.events=[];
	vm.edit={}
	
	vm.init=function(form){
		var promise=eventFactory.getAllEvents();
		promise.then(function(data){
			console.log('get events data',data);
			vm.events=data;
			console.log('get events data',vm.events);
		},function(error){
			console.log('get events error',error);
		});
		
	}
	
	vm.update=function(event){
		var promise=eventFactory.updateEvent(event);
		promise.then(function(data){
			console.log('update event data',data);
			vm.events=data;
			console.log('get events data',vm.events);
		},function(error){
			console.log('get events error',error);
		});
		
	}
	
	vm.submitForm=function(form){
		eventFactory.createEvent(angular.copy(form));
		var promise=eventFactory.getAllEvents();
		promise.then(function(data){
			console.log('get events data',data);
			vm.events=data;
			console.log('get events data',vm.events);
			$location.path('/');
		},function(error){
			console.log('get events error',error);
		});
		
	}
	
	vm.delete=function(eventName){
		eventFactory.deleteEvent({'name':eventName});
		var promise=eventFactory.getAllEvents();
		promise.then(function(data){
			console.log('get events data',data);
			vm.events=data;
			console.log('get events data',vm.events);
		},function(error){
			console.log('get events error',error);
		});
	}
	
	vm.redirectAddEvent=function(){
		$location.path('/add-event');
	}
	
	vm.redirectEventList=function(){
		$location.path('/');
	}
	
	// fire on controller loaded
    this.init();
	
}]);
angular.module('eventApp')
.run(function($httpBackend){

	$httpBackend.whenGET(/views\/.*/).passThrough();
	$httpBackend.whenGET(/services\/.*/).passThrough();
	
	var events=[{'id':1,'name':'angularcamp','description':'angular conferences',
	'location':'Barcelona','email':'angularcamp@camp.org','date':'2016-01-01',
	'special':true},
	{'id':2,'name':'angularconf','description':'angular conferences',
	'location':'San francisco','email':'angularconf@conf.org','date':'2016-10-10',
	'special':false}]
	
	//return current event list
	$httpBackend.whenGET('events').respond(events);
	
	$httpBackend.whenPOST('add-event').respond(function(method,url,data){
		var event =angular.fromJson(data);
		event.id=events.length+1;
		events.push(event);
		return [200,{'addEventResult':true},{}]
	});
	
	$httpBackend.whenPOST('update-event').respond(function(method,url,data){
		var event =angular.fromJson(data);
		for(i=0;i<events.length;i++){
			if(events[i].id==event.id){
				events[i]=event;
				break;
			}
		};
		return [200,{'events':events},{}]
	});
	
	$httpBackend.whenPOST('delete-event').respond(function(method,url,data){
		var eventToDelete =angular.fromJson(data);
		eventToDelete.id=events.length+1;
		for(i=0;i<events.length;i++){
			if(events[i].name==eventToDelete.name){
				events.splice(i,1);
			}
		};
		return [200,{'deleteEventResult':true},{}]
	});
});
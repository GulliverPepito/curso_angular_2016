(function(angular) {
angular.module('app', []).controller("MainController",function($scope){
	
	//$scope.search="";
	
	$scope.tasks=[
		{name:"Task 1",done:false},
		{name:"Task 2",done:false},
	];
	
	$scope.add=function(newtask){
		console.log('adding task '+ newtask.name)
		var task={};
		task.name=newtask.name;
		task.done=false;
		$scope.tasks.push(task);
		newtask.name="";
	};
	
	$scope.delete=function(task){
		console.log('deleting task '+ task.name)
		for(var i=0;i<$scope.tasks.length;i++){
			if($scope.tasks[i].name==task.name){
				this.tasks.splice(i,1);
				break;
			}
		}
	};
	
}).
filter('searchTask', function(){
return function(input,search) {

for(var i=0;i<input.length;i++){
	var array=[];
	if(search==input[i].name){
		array.push(input[i]);
		return array;
	}	
}
return input;
}})


}(angular));
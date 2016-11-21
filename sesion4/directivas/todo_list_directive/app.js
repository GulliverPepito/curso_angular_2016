(function(angular) {
angular.module('app', []).directive("mgList",function(){
	return {
	
		restrict:'A',
		controller:function($scope){
	
			$scope.tasks=[
				{name:"Task 1",done:true},
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
						$scope.tasks.splice(i,1);
						break;
					}
				}
			};
	
		}
	};
	
})
}(angular));
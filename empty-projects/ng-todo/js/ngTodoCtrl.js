ngTodo.controller('NgTodoCtrl', function NgTodoCtrl($scope){
	$scope.todos = [
		{ val: "A new cool thing", completed: false },
		{ val: "Buy groceries", completed: false },
		{ val: "Go to the dr.", completed: false },
		{ val: "Walk the dog", completed: false },
		{ val: "work out", completed: true },
		{ val: "study", completed: false },
	];

	$scope.addNewTask = function() {
		$scope.todos.unshift({ completed: false , val: $scope.newTask });
		$scope.newTask = '';
	};

	$scope.clearCompleted = function() {
		$scope.todos = $scope.todos.filter(function(el, index){
			return !el.completed;
		});
	};

	$scope.removeTodo = function(index) {
		$scope.todos.splice(index, 1); 
	};
});
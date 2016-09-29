ngTodo.controller('NgTodoCtrl', function NgTodoCtrl($scope){
	$scope.todos = [
		{ val: "A new cool thing", completed: false },
		{ val: "Buy groceries", completed: false },
		{ val: "Go to the dr.", completed: false },
		{ val: "Walk the dog", completed: false },
		{ val: "work out", completed: true },
		{ val: "study", completed: false },
	];
});
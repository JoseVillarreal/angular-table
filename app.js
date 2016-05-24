var app = angular.module('angularTable', []);

app.controller('tableController', function ($scope, $http){

	$scope.sortOrder = false;

	//generic sorting function for table columns
	$scope.sortTable = function($col){
		//check if sorting by same column
		if ( $col == $scope.sortOption){
			//we are, so let's just flip sort order
			$scope.sortOrder = !$scope.sortOrder;
		}
		else{
			//we're not, so let's reset sort order to base & change column we're sorting by
			$scope.sortOrder = false;
			$scope.sortOption = $col;	
		}
	}

	//loading the data
	$scope.loadData = function(){
		$http.get("http://jsonplaceholder.typicode.com/posts")
		.then(function(response){
			$scope.posts = response.data;
		});
	}
});

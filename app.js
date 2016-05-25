var app = angular.module('angularTable', []);

app.controller('tableController', function ($scope, $http){

	$scope.sortOrder = false;
	$scope.users = [];
	//		- Filter by user
	//		- fix project's readme

	//generic sorting function for table columns
	$scope.sortTable = function(col){
		console.log(col);
		//check if sorting by same column
		if ( col === $scope.sortOption){
			//we are, so let's just flip sort order
			$scope.sortOrder = !$scope.sortOrder;
		}
		else{
			//we're not, so let's reset sort order to base & change column we're sorting by
			$scope.sortOrder = false;
			$scope.sortOption = col;	
		}
	}

	//loading the data
	$scope.loadData = function(){
		$http.get("http://jsonplaceholder.typicode.com/posts")
		.then(function(response){
			if ( response.data.length > 0 ){
				$scope.posts = response.data;
				var unique = {}
				for (var i = $scope.posts.length - 1; i >= 0; i--) {
					if (typeof(unique[$scope.posts[i].userId]) == "undefined"){
						$scope.users.push($scope.posts[i].userId);
					}
					unique[$scope.posts[i].userId] = 0;
				}
			}
		});
	}
});

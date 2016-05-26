(function(){
		function spidercontrollerfun($scope){
			$scope.hero = { title : 'Spiderman', fname : 'Peter', lname : 'Parker', 	city : 'New york', 		power : 7,  price : 750.46758, releasedate : '2016-03-23',  photo: 'images/spiderman.jpg'};
		}
		angular.module("app").controller("spidercontroller",spidercontrollerfun );
		}());
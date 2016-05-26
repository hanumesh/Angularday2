(function(){
		function phantomcontrollerfun($scope){
			$scope.hero = { title : 'Phantom',	fname : 'Kit',   lname : 'Walker', 	city : 'Bhangala', 		power : 6,  price : 320.74568, releasedate : '2016-03-19',  photo: 'images/phantom.jpg'};
		}
		angular.module("app").controller("phantomcontroller", phantomcontrollerfun);
	}());
(function(){
		function supercontrollerfun($scope){
			$scope.hero = { title : 'Superman',	fname : 'Clark', lname : 'Kent', 	city : 'Metropolis', 	power : 8,  price : 940.64578, releasedate : '2016-03-27',  photo: 'images/superman.jpg'};
		}
		angular.module("app").controller("supercontroller", supercontrollerfun);
		}());
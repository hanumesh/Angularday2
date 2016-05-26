(function(){
	function ironcontrollerfun($scope){
		$scope.hero = { title : 'Ironman',	fname : 'Tony',  lname : 'Stark', 	city : 'New york', 		power : 7,  price : 450.54678, releasedate : '2016-03-24',  photo: 'images/ironman.jpg'};
	}
	angular.module("app").controller("ironcontroller",ironcontrollerfun );
}());
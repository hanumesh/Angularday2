(function(){
	angular.module("app").config(function($routeProvider){
		$routeProvider
		.when("/",{
			controller : "heroController",
			templateUrl : "heroapp/view/hero.html"
		})
		.when("/movies/:heroname",{
			controller : "movieController",
			template : "<h1>Welcome to {{param}} Page</h1>"
		})
	})
}());
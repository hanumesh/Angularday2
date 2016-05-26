(function(){

		angular.module("app").config(function($routeProvider){
		$routeProvider
		.when("/",{
		controller : "homecontroller",
		controllerAs : "home",
		templateUrl : "template/home_temp.html"
		})
		.when("/batman",{
		controller : "batcontroller as bat",
		templateUrl : "template/bat_temp.html"
		})
		.when("/superman",{
		controller : "supercontroller",
		templateUrl : "template/temp.html"
		})
		.when("/spiderman",{
		controller : "spidercontroller",
		templateUrl : "template/temp.html"
		})
		.when("/ironman",{
		controller : "ironcontroller",
		templateUrl : "template/temp.html"
		})
		.when("/phantom",{
		controller : "phantomcontroller",
		templateUrl : "template/temp.html"
		})
		.otherwise({
		redirectTo : "/"
		})
		});
		}())
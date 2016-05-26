(function(){
	angular.module("app").factory("heroFactory", function($http){
			return {
				hd : $http.get("data/data.json")
			}
		})
}())

(function(){
	angular.module("app")
		.controller("heroController", function($scope,heroFactory){
			function successFun(d,s,x){
				$scope.data = d;
			}
			function errorFun(m,s,x){
				alert(m)
			}
			heroFactory.hd.success(successFun).error(errorFun);
		});
}())

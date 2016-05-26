(function(){
		function homecontrollerfun(){
			this.hero = { title : 'Welcome to Synechron'};
		};
		angular.module("app").controller("homecontroller", homecontrollerfun);
		}());
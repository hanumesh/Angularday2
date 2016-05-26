(function(){
		function batcontrollerfun(){
			this.hero = { title : 'Batman',	fname : 'Bruce', lname : 'Wayne', 	city : 'Gotham', 		power : 7,  price : 876.45678, releasedate : '2016-03-30',  photo: 'images/batman.jpg'};
		};
		angular.module("app").controller("batcontroller", batcontrollerfun);
		}());
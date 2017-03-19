var myApp = angular.module('myApp', [ngRoue])

myApp.config(function($routeProvider){

	$routeProvider
	
	.when('/', {

		templateUrl:'page/first.html',
		controller:'myController'

	})

	.when('/second', {
		templateUrl:'pages/second.html',
		controller:'myController1'
	})
});

myApp.controller('myController', ['$scope', '$location', '$log', function($scope, $location, $log){
	$scope.name="Alekhya";
	$log.info($location.path());
}]);

myApp.controller('myController1', ['$scope', function($scope){
	$scope.man ="human";

}]);

/*window.addEventListener('hashchange', function(){

	if(window.location.hash === '#nam' ){

		console.log('this is working perfect');
	}



	//console.log('hash changed :' + window.location.hash);

});*/


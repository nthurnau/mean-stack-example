(function(){
	angular.module('meanStack')
		.factory('userService', userService)

	userService.$inject = ['$http']

	function userService($http){
		var apiUrl = '/api/users/'
		var service = {
			index: index
		}
		return service

		// factory functions:
		function index(){
			return $http.get(apiUrl)
		}
	}
})()
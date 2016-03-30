(function(){
	angular.module('meanStack')
		.factory('userService', userService)

	userService.$inject = ['$http']

	function userService($http){
		var apiUrl = '/api/users/'
		var service = {
			index: index,
			show: show
		}
		return service

		// factory functions:
		function index(){
			return $http.get(apiUrl)
		}

		function show(id){
			return $http.get(apiUrl + id)
		}
	}
})()
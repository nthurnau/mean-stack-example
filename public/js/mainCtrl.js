(function(){
	angular.module('meanStack')
		.controller('MainController', MainController)

	MainController.$inject = ['userService']

	function MainController(userService){
		var vm = this
		vm.title = "Main Controller"

		userService.index().success(function(results){
			vm.users = results
		})

	}
})()
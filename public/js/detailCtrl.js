(function(){
	angular.module('meanStack')
		.controller('DetailController', DetailController)

	DetailController.$inject = ['userService', '$stateParams']

	function DetailController(userService, $stateParams){
		var vm = this
		vm.title = "This is the DETAIL controller"
		
		userService.show($stateParams.id).success(function(results){
			vm.user = results
			console.log(vm.user)
		})
	}
})()
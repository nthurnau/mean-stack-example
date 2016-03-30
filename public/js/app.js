(function(){
	angular.module('meanStack', ['ui.router'])
		.config(function($stateProvider, $urlRouterProvider){
			
			// handle any attempts to routes other than what's listed below:
			$urlRouterProvider.otherwise('/')

			// my established routes
			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'partials/home.html',
					controller: 'MainController as main'
				})
		})
})()
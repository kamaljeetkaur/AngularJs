
myApp.config(function($routeProvider) {
	$routeProvider.when(
			'/signup',
			{
				controller: 'signupController',
				templateUrl: 'views/signup/signup.html'
			}
	);
	
	
});
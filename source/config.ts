function config(locationProvider, stateProvider, urlRouterProvider) {
    locationProvider.html5Mode(true);
	urlRouterProvider.otherwise('/home');

    stateProvider.state('home', {
        url:'/home',
        template: '<home></home>'
    })
    .state('team', {
        url: '/team',
        template: '<team></team>'
    })
}

config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

export default config;
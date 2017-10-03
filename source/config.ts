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
    .state('search', {
        url: '/search',
        template: '<search></search>'
    })
    .state('check', {
        url: '/check',
        template: '<check></check>'
    })
    .state('skills', {
        url: '/skills',
        template: '<skills></skills>'
    })
}

config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

export default config;
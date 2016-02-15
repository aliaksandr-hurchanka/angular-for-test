var testApp = angular.module('testApp', ['ui.router']);
var testAppCtrl = require('./testApp-ctrl');

testApp
    .config(cfgApp)
    .controller('testAppCtrl', testAppCtrl)


function cfgApp($stateProvider, $urlRouterProvider, $rootScope) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'home.html',
            controller: testAppCtrl
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: 'about.html'      
        });
        
}

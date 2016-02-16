/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var testApp = angular.module('testApp', ['ui.router']);
	var testAppCtrl = __webpack_require__(1);

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


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function ($scope) {

	    $scope.hello = 55;
	    $scope.spices = [{"name":"pasilla", "spiciness":"mild"},
	                    {"name":"jalapeno", "spiceiness":"hot hot hot!"},
	                    {"name":"habanero", "spiceness":"LAVA HOT!!"}];
	 
	   $scope.spice = "habanero";
	};


/***/ }
/******/ ]);
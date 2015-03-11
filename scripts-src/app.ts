'use strict';

// Create and register modules
var modules = ['app.controllers', 'app.directives', 'app.filters', 'app.services'];
modules.forEach((module) => angular.module(module, []));

modules.push('ngRoute');
modules.push('ngMaterial');
modules.push('firebase');

angular.module('app', modules);

angular.module('app').config(['$routeProvider', '$mdIconProvider', function routes ($routeProvider: ng.route.IRouteProvider, $mdIconProvider: any) {
    $routeProvider
        .when('/', {
            controller: 'messagesCtrl',
            controllerAs: 'vm',
            templateUrl: 'messages.html',
            authRequired: true,
            pageTitle: 'Chat'
        })
        .when('/login', {
            controller: 'loginCtrl',
            controllerAs: 'vm',
            templateUrl: 'login.html'
        })
        .when('/logout', {
            controller: 'logoutCtrl',
            template: ''
        })
        .otherwise('/');

        $mdIconProvider.defaultIconSet('assets/svg/svg-sprite-action.svg', 128)
            .iconSet('nav', 'assets/svg/svg-sprite-navigation.svg', 128);
}]);

angular.module('app').run(['$rootScope', '$location', 'authFactory', 'userService', function ($rootScope : ng.IRootScopeService, $location : ng.ILocationService, auth, user) {
    var profile = auth().$getAuth();
    if (profile) {
        user.set(profile);
    }

    $rootScope.$on('$routeChangeStart', function (event: ng.IAngularEvent, next: ng.route.ICurrentRoute, current: ng.route.ICurrentRoute) {
        if (next['authRequired']) {
            auth().$waitForAuth().then(function () {
                if (!auth().$getAuth()) {
                    $location.path('/login');
                }
            });
        }
    });

    $rootScope.$on('$routeChangeSuccess', function (event: ng.IAngularEvent, current: ng.route.ICurrentRoute, previous: ng.route.ICurrentRoute) {
        $rootScope['pageTitle'] = current['pageTitle'];
    });
}]);

module app {
    export module controllers { null; }
    export module directives { null; }
    export module filters { null; }
    export module services { null; }

    export interface IController {}
    export interface IDirective {
        restrict: string;
        link($scope: ng.IScope, element: JQuery, attrs: ng.IAttributes): any;
    }
    export interface IFilter {
        filter (input: any, ...args: any[]): any;
    }
    export interface IService {}
}

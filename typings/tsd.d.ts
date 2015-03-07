/// <reference path="angularjs/angular.d.ts" />
/// <reference path="jquery/jquery.d.ts" />
/// <reference path="angularfire/angularfire.d.ts" />
/// <reference path="firebase/firebase.d.ts" />
/// <reference path="angularjs/angular-route.d.ts" />
/// <reference path="angularjs/angular-animate.d.ts" />

interface AngularFireArrayService {
	$extendFactory(ChildClass: Object, methods?: Object): Object;
    (firebase: Firebase): AngularFireArray;
}

interface AngularFireAuth {
	$getCurrentUser(): ng.IPromise<any>;
	$login(provider: string, options?: Object): ng.IPromise<any>;
	$logout(): void;
	$createUser(email: string, password: string): ng.IPromise<any>;
	$changePassword(email: string, oldPassword: string, newPassword: string): ng.IPromise<any>;
	$removeUser(email: string, password: string): ng.IPromise<any>;
	$sendPasswordResetEmail(email: string): ng.IPromise<any>;
	$authWithOAuthPopup(provider: string, options?: Object): ng.IPromise<any>;
	$waitForAuth(): ng.IPromise<any>;
}

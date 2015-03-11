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
	$getAuth(): ng.IPromise<any>;
}

// Angular Material Interfaces
declare module ng.material {
	/**
	* Configures Angular Material Design Icons
	*/
	interface IMdIconProvider {
		icon (id: string|number, url: string, iconSize: string): ng.IPromise<any>;
		iconSet (id: string|number, url: string, iconSize: string): any;
		defaultIconSet (url: string, iconSize: string|number): ng.IPromise<any>;
		defaultIconSize (iconSize: string): any;
		preloadIcons ($templateCache: ng.ITemplateCacheService): void;
    }
}
